import React from "react";
import TopHalf from "@/app/_component/grass-marketing/TopHalf";

const layout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className={"pl-17px pt-15px pr-14px w-full"}>
        <TopHalf/>
        <div>{children}</div>
    </div>
}
export default layout;