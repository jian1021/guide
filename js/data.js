// 资阳市市场监督管理局行政审批事项数据
const categoryData = [
    {
        title: "食品生产许可",
        items: [
            {
                number: 1,
                title: "食品生产许可核发（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600053-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 2,
                title: "食品生产许可延续（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐等除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600054-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 3,
                title: "食品生产许可变更生产者名称（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600031-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 4,
                title: "食品生产许可变更法定代表人（负责人）（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600039-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 5,
                title: "食品生产许可变更住所名称（保健食品、特殊医学用途配方食品、婴幼儿配方食品和白酒类除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600032-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 6,
                title: "食品生产许可变更生产地址（同址变更）（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600058-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 7,
                title: "食品生产许可变更生产地址（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600036-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 8,
                title: "食品生产许可变更主要设施设备（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600030-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 9,
                title: "食品生产许可变更工艺设备布局和工艺流程（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600035-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 10,
                title: "食品生产许可变更生产类别（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600059-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 11,
                title: "食品生产许可补办（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600055-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 12,
                title: "食品生产许可注销（（保健食品、特殊医学用途配方食品、婴幼儿配方食品、婴幼儿辅助食品、食盐除外）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0080600056-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "药品零售企业许可",
        items: [
            {
                number: 13,
                title: "《药品经营许可证》（零售）核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026000011-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 14,
                title: "《药品经营许可证》（零售）许可事项变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0023700034-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 15,
                title: "《药品经营许可证》（零售）登记事项变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A72033001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 16,
                title: "《药品经营许可证》（零售）重新审查发证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026000015-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 17,
                title: "《药品经营许可证》（零售）补办",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026000014-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 18,
                title: "《药品经营许可证》（零售）注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026000013-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "第二类精神药品零售业务审批",
        items: [
            {
                number: 19,
                title: "第二类精神药品零售业务审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075200001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "麻醉药品和第一类精神药品运输证明核发",
        items: [
            {
                number: 20,
                title: "麻醉药品和第一类精神药品运输证明核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075300001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "执业药师注册",
        items: [
            {
                number: 21,
                title: "执业药师首次注册",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0019600001-510000000000-000-12510000MB1C99058D-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 22,
                title: "执业药师延续注册",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0019600002-510000000000-000-12510000MB1C99058D-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 23,
                title: "执业药师变更注册",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0019600003-510000000000-000-12510000MB1C99058D-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 24,
                title: "执业药师注销注册",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0019600004-510000000000-000-12510000MB1C99058D-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "医疗用毒性药品零售企业批准",
        items: [
            {
                number: 25,
                title: "医疗用毒性药品零售企业批准",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A72011001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "第三类医疗器械经营许可",
        items: [
            {
                number: 26,
                title: "第三类医疗器械经营许可核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026100005-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 27,
                title: "第三类医疗器械经营许可延续",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026100014-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 28,
                title: "第三类医疗器械经营许可变更(需现场核查)",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026100004-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 29,
                title: "第三类医疗器械经营许可变更(不需现场核查)",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A72021001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 30,
                title: "第三类医疗器械经营许可补办",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026100015-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 31,
                title: "第三类医疗器械经营许可注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0026100016-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "食品添加剂生产许可",
        items: [
            {
                number: 32,
                title: "食品添加剂生产许可核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300014-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 33,
                title: "食品添加剂生产许可延续",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300015-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 34,
                title: "食品添加剂生产许可变更住所名称",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300008-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 35,
                title: "食品添加剂生产许可变更法定代表人（负责人）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300007-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 36,
                title: "食品添加剂生产许可变更生产者名称",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300016-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 37,
                title: "食品添加剂生产许可变更生产地址（同址变更）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300009-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 38,
                title: "食品添加剂生产许可变更生产类别（增加，含同一类别内的明细增加）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300013-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 39,
                title: "食品添加剂生产许可变更生产类别（减少，含同一类别内的明细减少）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300012-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 40,
                title: "食品添加剂生产许可变更生产地址（增加/搬迁）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300019-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 41,
                title: "食品添加剂生产许可变更主要设施设备、工艺设备布局或工艺流程变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300011-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 42,
                title: "食品添加剂生产许可变更生产地址（减少）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300010-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 43,
                title: "食品添加剂生产许可补办",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300017-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 44,
                title: "食品添加剂生产许可注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005300018-512000000000-000-11511800008539131R-null-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "麻醉药品和精神药品邮寄证明核发",
        items: [
            {
                number: 45,
                title: "麻醉药品和精神药品邮寄证明核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075500001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "科研和教学用毒性药品购买审批",
        items: [
            {
                number: 46,
                title: "科研和教学用毒性药品购买审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0025100001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "特种设备使用登记",
        items: [
            {
                number: 47,
                title: "特种设备使用登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041400002-512000000000-000-11511800008538999Y-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "计量标准器具核准",
        items: [
            {
                number: 48,
                title: "计量标准器具核准新建",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000003-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 49,
                title: "计量标准器具核准证书变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000006-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 50,
                title: "计量标准变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000004-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 51,
                title: "计量标准封存或撤销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000005-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 52,
                title: "计量标准器具核准复查",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000002-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 53,
                title: "计量标准器具核准证书补办",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041000007-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "承担国家法定计量检定机构任务授权",
        items: [
            {
                number: 54,
                title: "承担国家法定计量检定机构任务授权",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041800001-512000000000-000-11511800008538999Y-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "特种设备生产单位许可",
        items: [
            {
                number: 55,
                title: "移动式压力容器（气瓶）充装单位许可换证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300011-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 56,
                title: "移动式压力容器（气瓶）充装单位许可取证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358600000-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 57,
                title: "移动式压力容器（气瓶）充装单位许可增项",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300008-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 58,
                title: "移动式压力容器（气瓶）充装单位许可变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300014-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 59,
                title: "移动式压力容器（气瓶）充装单位许可补发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300017-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 60,
                title: "移动式压力容器（气瓶）充装单位许可注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300026-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 61,
                title: "特种设备安装、改造、修理单位许可（省级权限）首次申请",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300022-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 62,
                title: "特种设备安装、改造、修理单位许可（省级权限）有效期届满申请延续",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300019-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 63,
                title: "特种设备安装、改造、修理单位许可（省级权限）申请扩项",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300021-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 64,
                title: "特种设备安装、改造、修理单位许可（省级权限）申请变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358700000-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 65,
                title: "特种设备安装、改造、修理单位许可（省级权限）许可证补发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300020-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 66,
                title: "特种设备安装、改造、修理单位许可（省级权限）许可证注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358300025-510000000000-000-11510000MB1690541M-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "特种设备作业人员资格认定",
        items: [
            {
                number: 67,
                title: "特种设备作业人员资格认定取证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358400001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 68,
                title: "特种设备作业人员资格认定复审",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358400002-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 69,
                title: "特种设备作业人员资格认定补发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0358400003-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "企业登记注册",
        items: [
            {
                number: 70,
                title: "公司设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100070-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 71,
                title: "公司变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100078-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 72,
                title: "公司备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100093-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 73,
                title: "公司注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100118-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 74,
                title: "分公司设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100173-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 75,
                title: "分公司变更登记（备案）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100073-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 76,
                title: "分公司注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100064-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 77,
                title: "撤销变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100083-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 78,
                title: "因公司合并（分立）申请设立、变更或注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100098-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 79,
                title: "因公司的股东发生合并（分立），公司申请变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100128-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 80,
                title: "非公司企业法人设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100052-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 81,
                title: "非公司企业法人变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100061-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 82,
                title: "非公司企业法人备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100152-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 83,
                title: "非公司企业法人注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100063-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 84,
                title: "非公司企业法人分支机构设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100121-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 85,
                title: "非公司企业法人分支机构变更登记（备案）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100082-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 86,
                title: "非公司企业法人分支机构注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100063-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 87,
                title: "非公司企业法人按《公司法》改制登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100124-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 88,
                title: "合伙企业设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100091-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 89,
                title: "合伙企业变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100112-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 90,
                title: "合伙企业备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A31004003-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 91,
                title: "合伙企业注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100156-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 92,
                title: "合伙企业分支机构设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100157-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 93,
                title: "合伙企业分支机构变更登记（备案）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100158-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 94,
                title: "合伙企业分支机构注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100187-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 95,
                title: "个人独资企业设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100190-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 96,
                title: "个人独资企业变更登记（备案）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100195-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 97,
                title: "个人独资企业注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100200-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 98,
                title: "个人独资企业分支机构设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100213-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 99,
                title: "个人独资企业分支机构变更登记（备案）",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100214-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 100,
                title: "个人独资企业分支机构注销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100219-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 101,
                title: "市场主体迁移调档",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100226-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 102,
                title: "申请增加、减少证照",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100220-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 103,
                title: "证照遗失补领、换发申请",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0064100101-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 104,
                title: "市场主体歇业备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A31004005-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "食品经营许可（仅销售预包装食品除外）",
        items: [
            {
                number: 105,
                title: "食品经营许可新办审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005200004-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 106,
                title: "食品经营许可延续审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005200008-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 107,
                title: "食品经营许可变更审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005200009-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 108,
                title: "食品经营许可补办审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005200006-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
            {
                number: 109,
                title: "食品经营许可注销审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0005200007-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "股权出质登记",
        items: [
            {
                number: 110,
                title: "股权出质设立登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511F31141001-512000000000-000-11511800008539131R-1-00&taskType=7&deptCode=11511800008539131R"
            },
            {
                number: 111,
                title: "股权出质变更登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511F31141002-512000000000-000-11511800008539131R-1-00&taskType=7&deptCode=11511800008539131R"
            },
            {
                number: 112,
                title: "股权出质注销/撤销登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511F31141003-512000000000-000-11511800008539131R-1-00&taskType=7&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "企事业单位计量器具检定授权",
        items: [
            {
                number: 113,
                title: "企事业单位计量器具检定授权",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z0100300001-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "医疗器械经营企业跨行政区域设置库房备案",
        items: [
            {
                number: 114,
                title: "医疗器械经营企业跨行政区域设置库房备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111400001-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "第一类医疗器械生产备案",
        items: [
            {
                number: 115,
                title: "第一类医疗器械生产备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111700001-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 116,
                title: "第一类医疗器械生产备案补证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111700003-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 117,
                title: "第一类医疗器械生产备案变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111700002-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "对食品生产经营者自建网站交易进行备案",
        items: [
            {
                number: 118,
                title: "对食品生产者自建网站交易进行备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z31019001-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 119,
                title: "对食品生产经营者自建网站交易备案进行发放",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111500003-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 120,
                title: "对食品生产经营者自建网站交易进行备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111500002-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 121,
                title: "对食品生产经营者自建网站交易备案进行补办",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111500004-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 122,
                title: "对食品生产经营者自建网站交易备案进行注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111500001-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "特殊标志使用人书面使用合同存查",
        items: [
            {
                number: 123,
                title: "特殊标志使用人书面使用合同存查",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z0113600001-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "仅销售预包装食品的食品经营者备案",
        items: [
            {
                number: 124,
                title: "仅销售预包装食品经营者备案信息采集",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z31138001-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 125,
                title: "仅销售预包装食品经营者备案信息变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z31138003-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 126,
                title: "仅销售预包装食品经营者备案注销",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z31138005-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "第一类医疗器械产品备案",
        items: [
            {
                number: 127,
                title: "第一类医疗器械产品备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111600001-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 128,
                title: "第一类医疗器械产品备案变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111600002-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 129,
                title: "第一类医疗器械产品备案补证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111600003-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 130,
                title: "第一类医疗器械产品备案取消",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0111600004-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "医疗机构炮制中药饮片备案",
        items: [
            {
                number: 131,
                title: "医疗机构炮制中药饮片备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511Z72008002-512000000000-000-11511800008539131R-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "第二类医疗器械经营备案",
        items: [
            {
                number: 132,
                title: "第二类医疗器械经营备案",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0106300015-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 133,
                title: "第二类医疗器械经营备案变更",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0106300005-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
            {
                number: 134,
                title: "第二类医疗器械经营备案补证",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=513A0106300016-512000000000-000-11511800015427357G-1-00&taskType=10&deptCode=11511800008539131R"
            },
        ]
    },
    {
        title: "企业登记档案资料查询",
        items: [
            {
                number: 135,
                title: "企业登记档案资料查询",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=512B0110700001-512000000000-000-11511800008539131R-1-00&taskType=20&deptCode=11511800008539131R"
            },
        ]
    },
];
