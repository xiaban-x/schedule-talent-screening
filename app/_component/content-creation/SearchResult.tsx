"use client"
import {Button, Table} from "antd";
import React from "react";
import Image from "next/image";

const SearchResult = () => {
    const data = [
        {
            key: '1',
            image: '/content-creation/赤脚大仙的大仙.png',
            title: '不神化“3天不油”人肉测评！宣称没翻车',
            user: '赤脚大仙的大仙',
            completionRate: '95.4%',
            likes: '7w',
            comments: '5.2w',
            purchaseRate: '60%',
        },
        {
            key: '2',
            image: '/content-creation/廖西西.png',
            title: '我富布！它就是古希腊掌管橄榄的神！',
            user: '廖西西',
            completionRate: '88.4%',
            likes: '6.8w',
            comments: '4.3w',
            purchaseRate: '55.2%',
        },
        {
            key: '3',
            image: '/content-creation/勉是酷girl.png',
            title: '九敏！到底哪瓶才是古希腊掌管高质量的神？',
            user: '勉是酷girl',
            completionRate: '88.3%',
            likes: '5.5w',
            comments: '3.0w',
            purchaseRate: '45.6%',
        },
        {
            key: '4',
            image: '/content-creation/可乐小甜姜.png',
            title: '爆改油头女大都靠它！喝油大师实锤了！',
            user: '可乐小甜姜',
            completionRate: '75.8%',
            likes: '4.1w',
            comments: '3.3w',
            purchaseRate: '44.2%',
        },
    ];
    const components = {
        header: {
            cell: (props:any) => (
                <th {...props} style={{ backgroundColor: '#FBF7F0' }}>
                    {props.children}
                </th>
            ),
        },
    };
    const columns = [
        {
            title: '基本信息',
            dataIndex: 'image',
            key: 'image',
            render: (text:string, record:any) => (
                <div className="flex items-center text-12px text-neutral">
                    <Image src={record.image} alt={record.title} width={60} height={70} />
                    <div className={'ml-12px'}>
                        <div className={'w-120px'}>{record.title}</div>
                        <div className={'mt-6px'}>{record.user}</div>
                    </div>
                </div>
            ),
        },
        {
            title: '完播率',
            dataIndex: 'completionRate',
            key: 'completionRate',
        },
        {
            title: '赞藏率',
            dataIndex: 'likes',
            key: 'likes',
        },
        {
            title: '评论量',
            dataIndex: 'comments',
            key: 'comments',
        },
        {
            title: '购买率',
            dataIndex: 'purchaseRate',
            key: 'purchaseRate',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <>
                    <Button type="link">收藏</Button>
                    <Button type="link">查看详情</Button>
                </>
            ),
        },
    ];

    return <div className="bg-white p-20px rounded-20px shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <div className="mb-10px flex justify-between items-center">
            <div className="text-24px font-bold">搜索结果</div>
            <div className="text-14px text-#ACABAB">共15w条结果</div>
        </div>
        <Table components={components} columns={columns} dataSource={data} pagination={false}/>
    </div>

}

export default SearchResult;