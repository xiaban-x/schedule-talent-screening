"use client"
import React, {useState} from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import NotificationIcon from "/public/notification.svg";
import SettingIcon from "/public/setting.svg";
import UserIcon from "/public/user.svg";
import Avatar from "/public/avatar.png";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {Select, Space} from 'antd';

const Upper = () => {
    const pathname = usePathname();
    const router = useRouter();
    const routes = [
        {
            label: "达人智能筛选系统",
            value: "/talent-screening"
        },
        {
            label: "广告投放优化系统",
            value: "/advertising"
        },
        {
            label: "内容智能创作系统",
            value: "/content-creation"
        },
        {
            label: "种草营销服务系统",
            value: "/grass-marketing"
        },
    ];
    const [currentPath, setCurrentPath] =
        useState(routes.find(item => pathname === item.value)?.label);


    const handleLinkClick = (path: string) => {
        setCurrentPath(routes.find(item => path === item.value)?.label);
        router.push(`${path}`)
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

                    <Select
                        defaultValue={currentPath}
                        style={{width: 160}}
                        onChange={(e) => handleLinkClick(e)}
                        options={routes}
                    >
                        {/*<Link*/}
                        {/*    href={`/${currentPath.path}`}*/}
                        {/*    className={`leading-29px whitespace-nowrap px-13px pb-18px border-b-1 border-#ACABAB ${currentPath === route.path ? 'text-primary' : 'text-neutral'}`}*/}
                        {/*    onClick={() => handleLinkClick(route.path)}*/}
                        {/*>*/}
                        {/*    {route.name}*/}
                        {/*</Link>*/}
                    </Select>

                    {/*{routes.map((route, index) => (*/}
                    {/*    currentPath.includes(route.path) &&*/}
                    {/*    <div key={index}*/}
                    {/*         className={'leading-29px whitespace-nowrap px-13px text-18px text-primary fw-700'}>*/}
                    {/*        {route.name}*/}
                    {/*    </div>*/}
                    {/*))}*/}
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
