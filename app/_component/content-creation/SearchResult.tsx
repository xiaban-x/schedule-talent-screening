"use client"
import {Button, Table} from "antd";
import React from "react";
import Image from "next/image";
import {contentCreationData} from "@/app/_mock/contentCreation";

const SearchResult = () => {
    const components = {
        header: {
            cell: (props: any) => (
                <th {...props} style={{backgroundColor: '#FBF7F0', textAlign: 'center'}}>
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
            render: (text: string, record: any) => (
                <div className="flex items-center text-12px text-neutral">
                    <Image src={record.image} alt={record.title} width={60} height={70}/>
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
            align: 'center',
            key: 'completionRate',
        },
        {
            title: '赞藏率',
            dataIndex: 'likes',
            align: 'center',
            key: 'likes',
        },
        {
            title: '评论量',
            dataIndex: 'comments',
            align: 'center',
            key: 'comments',
        },
        {
            title: '购买率',
            dataIndex: 'purchaseRate',
            align: 'center',
            key: 'purchaseRate',
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
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
            <div className="text-14px text-#ACABAB">共{contentCreationData.length}条结果</div>
        </div>
        {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={contentCreationData} pagination={{ position: ['bottomCenter'] }}/>
    </div>

}

export default SearchResult;
