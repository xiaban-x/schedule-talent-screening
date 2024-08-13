"use client"
import React, {useState} from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import NotificationIcon from "/public/notification.svg";
import SettingIcon from "/public/setting.svg";
import UserIcon from "/public/user.svg";
import Avatar from "/public/avatar.png";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Upper = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname.replace("/", ""));
    const routes = [
        // {
        //     name: "达人智能筛选系统",
        //     path: "talent-screening"
        // },
        // {
        //     name: "广告投放优化系统",
        //     path: "advertising"
        // },
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
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
                <Image src={Logo} alt="logo" width={50} height={50}/>
                <div
                    className="bg-gradient-to-r from-[#fb9d09] to-[#fc641b] text-transparent bg-clip-text font-sans text-[24px] font-bold">
                    有档期么
                </div>
                <div className="flex items-center space-x-20px ml-20px">
                    {routes.map((route, index) => (
                        <div key={index}>
                            <Link

                                href={`/${route.path}`}
                                className={`leading-29px whitespace-nowrap px-13px pb-18px border-b-1 border-#ACABAB ${currentPath === route.path ? 'text-primary' : 'text-neutral'}`}
                                onClick={() => handleLinkClick(route.path)}
                            >
                                {route.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center space-x-[20px]">
                <Image src={NotificationIcon} alt="notification" width={28} height={28}/>
                <Image src={SettingIcon} alt="setting" width={28} height={28}/>
                <Image src={UserIcon} alt="user" width={28} height={28}/>
                <Image src={Avatar} alt="avatar" width={41} height={41}/>
                <div>小小火</div>
            </div>
        </div>
    );
};

export default React.memo(Upper);
