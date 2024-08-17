"use client"
import Image from "next/image";
import {Button, Table} from "antd";
import React from "react";
import generateUsername from "@/app/_utils/generateUsername";

const Page = () => {


    const temp = new Array(30).fill(0);
    const initData = temp.map((_, index) => {
        return {
            key: index + 1,
            image: `/数据大屏材料/素人头像/pic (${index + 1}).jpg`,
            user: generateUsername(),
            totalMoney: `￥${Math.floor(Math.random() * 96458)}`,
            paymentOrderNumber: Math.floor(Math.random() * 2503),
            numberOfRefunds: Math.floor(Math.random() * 75),
            lastTradingTime: `2023-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 30) + 1).padStart(2, '0')}`,
        }
    })
    const data = []
    data.push(...initData);
    data.push(...initData);
    data.push(...initData);
    data.push(...initData);
    data.push(...initData);
    data.push(...initData);
    data.push(...initData);

    const components = {
        header: {
            cell: (props: any) => (
                <th {...props} style={{backgroundColor: '#FBF7F0', textAlign:'center'}}>
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
                    <Image src={record?.image} alt={record?.title} width={50} height={50} className={"rounded-full"}/>
                    <div className={'ml-12px'}>{record?.user}</div>
                </div>
            ),
        },
        {
            title: '总支付金额',
            dataIndex: 'totalMoney',
            key: 'totalMoney',
            align: 'center',
        },
        {
            title: '支付订单数',
            dataIndex: 'paymentOrderNumber',
            key: 'paymentOrderNumber',
            align: 'center',
        },
        {
            title: '退款次数',
            dataIndex: 'numberOfRefunds',
            key: 'numberOfRefunds',
            align: 'center',
        },
        {
            title: '最近一次交易事件',
            dataIndex: 'lastTradingTime',
            key: 'lastTradingTime',
            align: 'center',
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

    return <div className="bg-white pt-10px pb-50px rounded-20px">
        {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={data} pagination={false}/>
    </div>
}
export default Page;
