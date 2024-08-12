"use client"
import ReactEcharts from "echarts-for-react";
import React from "react";

const page = () => {
    const option = {
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
    return <div className={"flex w-full justify-center items-center py-80px"}>
        <div className={"w-60%"}>
            <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    </div>
}
export default page;