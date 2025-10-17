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
            }
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
            }
        ]
    },
    {
        title: "第二类精神药品零售业务审批",
        items: [
            {
                number: 19,
                title: "第二类精神药品零售业务审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075200001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            }
        ]
    },
    {
        title: "麻醉药品和第一类精神药品运输证明核发",
        items: [
            {
                number: 20,
                title: "麻醉药品和第一类精神药品运输证明核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075300001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            }
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
            }
        ]
    },
    {
        title: "医疗用毒性药品零售企业批准",
        items: [
            {
                number: 25,
                title: "医疗用毒性药品零售企业批准",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A72011001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            }
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
            }
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
            }
        ]
    },
    {
        title: "麻醉药品和精神药品邮寄证明核发",
        items: [
            {
                number: 45,
                title: "麻醉药品和精神药品邮寄证明核发",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0075500001-512000000000-000-11511800015427357G-1-00&taskType=1&deptCode=11511800008539131R"
            }
        ]
    },
    {
        title: "科研和教学用毒性药品购买审批",
        items: [
            {
                number: 46,
                title: "科研和教学用毒性药品购买审批",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0025100001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            }
        ]
    },
    {
        title: "特种设备使用登记",
        items: [
            {
                number: 47,
                title: "特种设备使用登记",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041400002-512000000000-000-11511800008538999Y-1-00&taskType=1&deptCode=11511800008539131R"
            }
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
            }
        ]
    },
    {
        title: "承担国家法定计量检定机构任务授权",
        items: [
            {
                number: 54,
                title: "承担国家法定计量检定机构任务授权",
                url: "http://www.sczwfw.gov.cn/jiq/front/transition/ywTransToDetail?areaCode=512000000000&itemCode=511A0041800001-512000000000-000-11511800008539131R-1-00&taskType=1&deptCode=11511800008539131R"
            }
        ]
    }
];
