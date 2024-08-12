"use client"
import {usePathname} from "next/navigation";
import {useState} from "react";
import Link from "next/link";

const BottomHalfNav = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);
    const routes = [
        {
            name: "种草基础数据对比",
            path: "/grass-marketing/basic-data"
        },
        {
            name: "私域追踪",
            path: "/grass-marketing/private-domain-tracking"
        },
        {
            name: "消费者分析",
            path: "/grass-marketing/consumer-analysis"
        },
        {
            name: "产品明细",
            path: "/grass-marketing/product-detail"
        },
        {
            name: "笔记分析",
            path: "/grass-marketing/note-analysis"
        },
    ];

    const handleLinkClick = (path: string) => {
        setCurrentPath(path);
    };

    return <div className={"flex space-x-36px"}>
        {
            routes.map((route,index)=>(
                <div key={index} className={`fw-700 text-neutral px-4px ${currentPath === route.path ? 'border-b border-b-4px border-primary' : ''}`} onClick={() => handleLinkClick(route.path)}>
                    <Link href={route.path}>{route.name}</Link>
                </div>
            ))
        }
    </div>
}

export default BottomHalfNav;