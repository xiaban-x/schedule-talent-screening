"use client"
import {Button, Table} from "antd";
import React from "react";
import Image from "next/image";
import {provinces, talentScreeningData, talentScreeningLabels} from "@/app/_mock/talentScreening";
const SearchResult = () => {
    const components = {
        header: {
            cell: (props: any) => (
                <th {...props} style={{backgroundColor: '#FBF7F0',textAlign:'center'}}>
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
                <div className="flex text-12px text-neutral">
                    <div className={"flex flex-col items-center justify-center w-70px"}>
                        <Image src={record.image} alt={record.title} width={50} height={50} className={"rounded-full"}/>
                        <div className={'mt-6px'}>{record.user}</div>
                    </div>
                    <div className={'ml-12px space-y-3px'}>
                        <div>小红书号：{Math.floor(Math.random() * 9000000000 + 1000000000).toString()}</div>
                        <div>IP属地：{provinces[Math.floor(Math.random() * provinces.length)]}</div>
                        <div className={"space-x-2px pt-5px"}>
                            {new Array(Math.floor(Math.random() * 3)+1).fill(0).map((_, index) => (
                                <span key={index} className={'rounded-full p-4px border border-#ACABAB'}>{talentScreeningLabels[Math.floor(Math.random() * talentScreeningLabels.length)]}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: '笔记数',
            dataIndex: 'notesNum',
            key: 'notesNum',
            align:'center'
        },
        {
            title: '近一年新增作品数',
            dataIndex: 'newWorkNum',
            key: 'newWorkNum',
            align:'center'

        },
        {
            title: '粉丝数',
            dataIndex: 'fansNum',
            key: 'fansNum',
            align:'center'
        },
        {
            title: '爆文数',
            dataIndex: 'explosiveNum',
            key: 'explosiveNum',
            align:'center'
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: () => (
                <div>
                    <Button type="link">收藏</Button>
                    <Button type="link">查看详情</Button>
                </div>
            ),
        },
    ];

    return <div className="bg-white p-20px rounded-20px shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
        <div className="mb-10px flex justify-between items-center">
            <div className="text-24px font-bold">搜索结果</div>
            <div className="text-14px text-#ACABAB">共{talentScreeningData.length}条结果</div>
        </div>
         {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={talentScreeningData} pagination={{ position: ['bottomCenter'] }}/>
    </div>

}

export default SearchResult;
