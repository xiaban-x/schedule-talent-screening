"use client"
import React from "react";
import ReactEcharts from "echarts-for-react";

const Page = () => {

    const option = {
        legend: {
            data: ['种草前', '种草后']
        },
        radar: {
            center: ['50%', '60%'], // 将雷达图向上移动
            radius: '80%', // 调整雷达图的大小
            indicator: [
                { name: '互动总量', max: 6500 },
                { name: '点赞数', max: 16000 },
                { name: '收藏总数', max: 30000 },
                { name: '评论总数', max: 38000 },
                { name: '分享总数', max: 52000 },
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
    return <div className={"h-full py-90px"}>
        <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    </div>
}
export default Page;