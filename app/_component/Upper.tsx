import React from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import NotificationIcon from "/public/notification.svg";
import SettingIcon from "/public/setting.svg";
import UserIcon from "/public/user.svg";
import Avatar from "/public/avatar.png";
const Upper = () => {
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
                <Image src={Logo} alt="logo" width={50} height={50} layout="fixed" />
                <div className="bg-gradient-to-r from-[#fb9d09] to-[#fc641b] text-transparent bg-clip-text font-sans text-[24px] font-bold">
                    有档期么
                </div>
            </div>
            <div className="flex items-center space-x-[20px]">
                <Image src={NotificationIcon} alt="notification" width={28} height={28} layout="fixed" />
                <Image src={SettingIcon} alt="setting" width={28} height={28} layout="fixed" />
                <Image src={UserIcon} alt="user" width={28} height={28} layout="fixed" />
                <Image src={Avatar} alt="avatar" width={41} height={41} layout="fixed" />
                <div>小小火</div>
            </div>
        </div>
    );
};

export default React.memo(Upper);
