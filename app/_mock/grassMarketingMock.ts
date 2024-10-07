import generateUsername from "@/app/_utils/generateUsername";
const basicDataOption = {
    legend: {
        data: ['种草前', '种草后']
    },
    radar: {
        center: ['50%', '60%'], // 将雷达图向上移动
        radius: '80%', // 调整雷达图的大小
        indicator: [
            {name: '互动总量', max: 6500},
            {name: '点赞数', max: 16000},
            {name: '收藏总数', max: 30000},
            {name: '评论总数', max: 38000},
            {name: '分享总数', max: 52000},
        ]
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000],
                    name: '种草前'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000],
                    name: '种草后'
                }
            ]
        }
    ]
};

const consumerAnalysis = [
    {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            center: 'center',
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 20, name: '男'},
                    {value: 979, name: '女'},
                    {value: 1, name: '未知'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['音乐', '旅游', '美食', '运动', '阅读']
        },
        series: [
            {
                type: 'bar',
                data: [5, 15, 20, 25, 35]
            }
        ]
    }
];

const noteAnalysis = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['赞藏量', '评论量', '发布数量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '评论量',
            min: 0,
            max: 10,
            interval: 2,
            axisLabel: {
                formatter: '{value} w'
            }
        },
        {
            type: 'value',
            name: '发布数量',
            min: 0,
            max: 10,
            interval: 2,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: '赞藏量',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value: any) {
                    return value + 'w';
                }
            },
            data: [
                1.5, 2.2, 1.4, 3, 2.6, 6.8, 5.8
            ]
        },
        {
            name: '评论量',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value: any) {
                    return value + ' w';
                }
            },
            data: [
                0.75, 1.7, 1.5, 2.3, 3.4, 5.8, 6.7
            ]
        },
        {
            name: '发布数量',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value: any) {
                    return value;
                }
            },
            data: [1, 1, 0, 2, 1, 2, 3]
        }
    ]
};

const privateDomainTrackingCard = [
    [
        {
            title: '粉丝支付金额',
            data: "1,770,929.29",
            increase: '+51.78%',
            merit: "1,075,519.63",
            isPrimary: true
        },
        {
            title: '粉丝支付金额占比',
            data: "95.9%",
            increase: '-0.30%',
            merit: "54.0%",
            isPrimary: true,
            isGreen: true
        },
        {
            title: '粉丝支付人数',
            data: "957",
            increase: '+39.91%',
            merit: "1,164",
        }],
    [
        {
            title: '粉丝观播人数',
            data: "17,101",
            increase: '+0.97%',
            merit: "26,655",
        },
        {
            title: '粉丝观播率',
            data: "11.0%",
            increase: '+0.79%',
            merit: "5.09%",
        }
    ]
];

const productDetailData = new Array(1000).fill(0).map((_, index) => {
    return {
        key: index + 1,
        image: `/数据大屏材料/素人头像/pic (${(index+10)%30+1}).jpg`,
        user: generateUsername(),
        totalMoney: `￥${Math.floor(Math.random() * 96458)}`,
        paymentOrderNumber: Math.floor(Math.random() * 2503),
        numberOfRefunds: Math.floor(Math.random() * 75),
        lastTradingTime: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}`,
        status: false,
    }
})

const productDetailOneData = new Array(80).fill(0).map((_, index) => {
    return {
        id: index + 1,
        count: Math.floor(Math.random() * 2503),
        amount: Math.floor(Math.random() * 75),
        tradingHours: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}`,
        refundStatus: Math.floor(Math.random() * 75) % 2,
        refundReason: '/',
        afterSaleStatus: '/',
    }
})
export {
    basicDataOption,
    consumerAnalysis,
    noteAnalysis,
    privateDomainTrackingCard,
    productDetailData,
    productDetailOneData
}