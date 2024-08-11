"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

const LeftSide = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname.replace("/",""));
    const routes = [
        {
            name: "达人智能筛选系统",
            path: "talent-screening"
        },
        {
            name: "广告投放优化系统",
            path: "advertising"
        },
        {
            name: "内容智能创作系统",
            path: "content-creation"
        },
        {
            name: "种草营销服务系统",
            path: "grass-marketing"
        },
    ];

    const handleLinkClick = (path: string) => {
        setCurrentPath(path);
    };

    return (
        <div className="w-207px px-24px bg-white h-screen  pt-94px">
            {routes.map((route, index) => (
                <div key={index}>
                    <Link

                        href={`/${route.path}`}
                        className={`leading-59px whitespace-nowrap px-13px pb-18px border-b-1 border-#ACABAB ${currentPath === route.path ? 'text-primary' : 'text-neutral'}`}
                        onClick={() => handleLinkClick(route.path)}
                    >
                        {route.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default LeftSide;