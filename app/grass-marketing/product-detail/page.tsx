"use client"
import Image from "next/image";
import {Button, Table} from "antd";
import React from "react";

const Page = () => {
    const data = [
        {
            key: '1',
            image: '/content-creation/赤脚大仙的大仙.png',
            user: '赤脚大仙的大仙',
            totalMoney: '￥155364.30',
            paymentOrderNumber: '7852',
            numberOfRefunds: '1205',
            lastTradingTime: '2024-06-15',
        },
        {
            key: '2',
            image: '/content-creation/廖西西.png',
            user: '廖西西',
            totalMoney: '￥155422.64',
            paymentOrderNumber: '7420',
            numberOfRefunds: '906',
            lastTradingTime: '2024-05-10',
        },
        {
            key: '3',
            image: '/content-creation/勉是酷girl.png',
            user: '勉是酷girl',
            totalMoney: '￥142588.50',
            paymentOrderNumber: '6528',
            numberOfRefunds: '522',
            lastTradingTime: '2024-04-10',
        },
        {
            key: '4',
            image: '/content-creation/可乐小甜姜.png',
            user: '可乐小甜姜',
            totalMoney: '￥132246.36',
            paymentOrderNumber: '4210',
            numberOfRefunds: '105',
            lastTradingTime: '2024-04-09',
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
                    <Image src={record.image} alt={record.title} width={50} height={50}  className={"rounded-full"}/>
                    <div className={'ml-12px'}>{record.user}</div>
                </div>
            ),
        },
        {
            title: '总支付金额',
            dataIndex: 'totalMoney',
            key: 'totalMoney',
        },
        {
            title: '支付订单数',
            dataIndex: 'paymentOrderNumber',
            key: 'paymentOrderNumber',
        },
        {
            title: '退款次数',
            dataIndex: 'numberOfRefunds',
            key: 'numberOfRefunds',
        },
        {
            title: '最近一次交易事件',
            dataIndex: 'lastTradingTime',
            key: 'lastTradingTime',
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

    return <div className="bg-white pt-10px pb-50px rounded-20px">
        <Table components={components} columns={columns} dataSource={data} pagination={false}/>
    </div>
}
export default Page;