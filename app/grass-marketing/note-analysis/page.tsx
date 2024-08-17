"use client"
import ReactEcharts from "echarts-for-react";
import React from "react";
import {noteAnalysis} from "@/app/_mock/grassMarketingMock";

const page = () => {
    return <div className={"flex w-full justify-center items-center py-80px"}>
        <div className={"w-60%"}>
            <ReactEcharts
                option={noteAnalysis}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    </div>
}
export default page;