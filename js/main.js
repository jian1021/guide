// 主要交互逻辑
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    initSearch();
});

/**
 * 初始化分类列表
 */
function initCategories() {
    const categoryList = document.getElementById('categoryList');
    
    if (!categoryList) {
        console.error('找不到分类列表容器');
        return;
    }
    
    // 检查数据是否存在
    if (typeof categoryData === 'undefined' || !Array.isArray(categoryData)) {
        categoryList.innerHTML = '<div class="empty-state"><p>暂无数据</p></div>';
        return;
    }
    
    // 清空现有内容
    categoryList.innerHTML = '';
    
    // 渲染每个分类
    categoryData.forEach((category, index) => {
        const categoryElement = createCategoryElement(category, index);
        categoryList.appendChild(categoryElement);
    });
}

/**
 * 创建分类元素
 * @param {Object} category - 分类数据
 * @param {number} index - 分类索引
 * @returns {HTMLElement} 分类DOM元素
 */
function createCategoryElement(category, index) {
    // 创建分类容器
    const categoryItem = document.createElement('div');
    categoryItem.className = 'category-item';
    categoryItem.dataset.categoryIndex = index;
    
    // 创建分类标题
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
        <div class="category-title">
            <span>${category.title}</span>
            <span class="category-count">${category.items.length}项</span>
        </div>
        <span class="toggle-icon">▼</span>
    `;
    
    // 创建子项容器
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'items-container';
    
    const itemList = document.createElement('div');
    itemList.className = 'item-list';
    
    // 渲染子项
    category.items.forEach(item => {
        const itemElement = createItemElement(item);
        itemList.appendChild(itemElement);
    });
    
    itemsContainer.appendChild(itemList);
    
    // 组装分类元素
    categoryItem.appendChild(categoryHeader);
    categoryItem.appendChild(itemsContainer);
    
    // 添加点击事件
    categoryHeader.addEventListener('click', function() {
        toggleCategory(categoryItem);
    });
    
    return categoryItem;
}

/**
 * 创建子项元素
 * @param {Object} item - 子项数据
 * @returns {HTMLElement} 子项DOM元素
 */
function createItemElement(item) {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    
    const itemLink = document.createElement('a');
    itemLink.className = 'item-link';
    itemLink.href = item.url;
    itemLink.target = '_blank';
    itemLink.rel = 'noopener noreferrer';
    
    itemLink.innerHTML = `
        <div class="item-number">${item.number}</div>
        <div class="item-title">${item.title}</div>
        <div class="item-arrow">→</div>
    `;
    
    itemElement.appendChild(itemLink);
    
    return itemElement;
}

/**
 * 切换分类展开/收起状态
 * @param {HTMLElement} categoryItem - 分类元素
 */
function toggleCategory(categoryItem) {
    const isExpanded = categoryItem.classList.contains('expanded');
    
    if (isExpanded) {
        // 收起
        categoryItem.classList.remove('expanded');
    } else {
        // 展开
        categoryItem.classList.add('expanded');
    }
}

/**
 * 展开所有分类
 */
function expandAll() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.classList.add('expanded');
    });
}

/**
 * 收起所有分类
 */
function collapseAll() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.classList.remove('expanded');
    });
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchStats = document.getElementById('searchStats');
    
    if (!searchInput) {
        return;
    }
    
    // 监听输入事件
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value.trim().toLowerCase();
        performSearch(keyword);
    });
    
    // 清空搜索框时恢复显示
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
        }
    });
}

/**
 * 执行搜索
 * @param {string} keyword - 搜索关键词
 */
function performSearch(keyword) {
    const categoryItems = document.querySelectorAll('.category-item');
    const searchStats = document.getElementById('searchStats');
    
    // 如果搜索词为空，显示所有内容
    if (!keyword) {
        categoryItems.forEach(categoryItem => {
            categoryItem.classList.remove('search-hidden');
            const items = categoryItem.querySelectorAll('.item');
            items.forEach(item => {
                item.classList.remove('search-hidden');
                // 移除高亮
                removeHighlight(item);
            });
        });
        searchStats.textContent = '';
        searchStats.classList.remove('active');
        return;
    }
    
    let totalMatches = 0;
    let matchedCategories = 0;
    
    // 遍历所有分类
    categoryItems.forEach(categoryItem => {
        const items = categoryItem.querySelectorAll('.item');
        let categoryHasMatch = false;
        let categoryMatchCount = 0;
        
        // 遍历分类下的所有办事项
        items.forEach(item => {
            const itemTitle = item.querySelector('.item-title');
            const originalText = itemTitle.getAttribute('data-original-text') || itemTitle.textContent;
            
            // 保存原始文本
            if (!itemTitle.getAttribute('data-original-text')) {
                itemTitle.setAttribute('data-original-text', originalText);
            }
            
            // 检查是否匹配
            if (originalText.toLowerCase().includes(keyword)) {
                item.classList.remove('search-hidden');
                categoryHasMatch = true;
                categoryMatchCount++;
                totalMatches++;
                
                // 高亮关键词
                highlightKeyword(itemTitle, originalText, keyword);
            } else {
                item.classList.add('search-hidden');
                // 移除高亮
                removeHighlight(item);
            }
        });
        
        // 如果分类有匹配的办事项，显示并展开；否则隐藏
        if (categoryHasMatch) {
            categoryItem.classList.remove('search-hidden');
            categoryItem.classList.add('expanded'); // 自动展开
            matchedCategories++;
        } else {
            categoryItem.classList.add('search-hidden');
        }
    });
    
    // 显示搜索统计
    if (totalMatches > 0) {
        searchStats.textContent = `找到 ${totalMatches} 个办事项，共 ${matchedCategories} 个分类`;
        searchStats.classList.add('active');
    } else {
        searchStats.textContent = '未找到匹配的办事项';
        searchStats.classList.add('active');
    }
}

/**
 * 高亮关键词
 * @param {HTMLElement} element - 目标元素
 * @param {string} text - 原始文本
 * @param {string} keyword - 关键词
 */
function highlightKeyword(element, text, keyword) {
    // 使用正则表达式进行大小写不敏感的替换
    const regex = new RegExp(`(${escapeRegExp(keyword)})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
    element.innerHTML = highlightedText;
}

/**
 * 移除高亮
 * @param {HTMLElement} item - 办事项元素
 */
function removeHighlight(item) {
    const itemTitle = item.querySelector('.item-title');
    const originalText = itemTitle.getAttribute('data-original-text');
    if (originalText) {
        itemTitle.textContent = originalText;
    }
}

/**
 * 转义正则表达式特殊字符
 * @param {string} string - 要转义的字符串
 * @returns {string} 转义后的字符串
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
