"use client"
import ReactEcharts from "echarts-for-react";
import React from "react";

const Page = () => {
    const option1 = {
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
    };

    const option2 = {
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
    };
    return <div className={"flex items-center justify-center mt-18px ml-10px pb-90px"}>
        <div className={"w-467px h-426px shadow-[4px_4px_10px_rgba(0,0,0,0.1)]"}>
            <div className={"fw-700"}>用户画像</div>
            <div className={"mt-15px"}>性别分布</div>
            <ReactEcharts
                option={option1}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
        <div className={"w-467px h-426px shadow-[4px_4px_10px_rgba(0,0,0,0.1)] ml-37px"}>
            <div className={"fw-700"}>粉丝兴趣偏好</div>
            <div className={"mt-15px"}>偏好类别分布</div>
            <ReactEcharts
                option={option2}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    </div>
}
export default Page;
