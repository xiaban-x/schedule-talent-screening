import React from "react";
import TopHalf from "@/app/_component/grass-marketing/TopHalf";
import BottomHalfNav from "@/app/_component/grass-marketing/BottomHalfNav";

const layout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className={"pl-17px pt-15px pr-14px w-full"}>
        <TopHalf/>
        <div className={"h-full bg-white rounded-20px pl-28px pt-15px mt-15px"}>
            <BottomHalfNav/>
            {children}
        </div>
    </div>
}
export default layout;