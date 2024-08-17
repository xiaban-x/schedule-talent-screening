"use client"
import React from "react";
import ReactEcharts from "echarts-for-react";
import {basicDataOption} from "@/app/_mock/grassMarketingMock";

const Page = () => {
    return <div className={"h-full py-90px"}>
        <ReactEcharts
            option={basicDataOption}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
    </div>
}
export default Page;