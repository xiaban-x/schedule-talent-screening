"use client"
import ReactEcharts from "echarts-for-react";
import React from "react";
import {consumerAnalysis} from "@/app/_mock/grassMarketingMock";

const Page = () => {
    return <div className={"flex items-center justify-center mt-18px ml-10px pb-90px"}>
        <div className={"w-467px h-426px shadow-[4px_4px_10px_rgba(0,0,0,0.1)]"}>
            <div className={"fw-700"}>用户画像</div>
            <div className={"mt-15px"}>性别分布</div>
            <ReactEcharts
                option={consumerAnalysis[0]}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
        <div className={"w-467px h-426px shadow-[4px_4px_10px_rgba(0,0,0,0.1)] ml-37px"}>
            <div className={"fw-700"}>粉丝兴趣偏好</div>
            <div className={"mt-15px"}>偏好类别分布</div>
            <ReactEcharts
                option={consumerAnalysis[1]}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    </div>
}
export default Page;
