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
        {
            key: '5',
            image: '/content-creation/廖西西.png',
            user: '蓝天白云',
            totalMoney: '￥127589.47',
            paymentOrderNumber: '3892',
            numberOfRefunds: '89',
            lastTradingTime: '2024-03-15',
        },
        {
            key: '6',
            image: '/content-creation/勉是酷girl.png',
            user: '小美人鱼',
            totalMoney: '￥118752.90',
            paymentOrderNumber: '3621',
            numberOfRefunds: '67',
            lastTradingTime: '2024-02-20',
        },
        {
            key: '7',
            image: '/content-creation/赤脚大仙的大仙.png',
            user: '狂野玫瑰',
            totalMoney: '￥115693.28',
            paymentOrderNumber: '3410',
            numberOfRefunds: '120',
            lastTradingTime: '2024-01-30',
        },
        {
            key: '8',
            image: '/content-creation/廖西西.png',
            user: '天才少年',
            totalMoney: '￥109342.75',
            paymentOrderNumber: '2987',
            numberOfRefunds: '54',
            lastTradingTime: '2024-01-10',
        },
        {
            key: '9',
            image: '/content-creation/赤脚大仙的大仙.png',
            user: '夜空中最亮的星',
            totalMoney: '￥102547.13',
            paymentOrderNumber: '2846',
            numberOfRefunds: '103',
            lastTradingTime: '2023-12-25',
        },
        {
            key: '10',
            image: '/content-creation/勉是酷girl.png',
            user: '梦中的婚礼',
            totalMoney: '￥96458.20',
            paymentOrderNumber: '2503',
            numberOfRefunds: '75',
            lastTradingTime: '2023-11-30',
        },
    ];

    const components = {
        header: {
            cell: (props: any) => (
                <th {...props} style={{backgroundColor: '#FBF7F0'}}>
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
                    <Image src={record.image} alt={record.title} width={50} height={50} className={"rounded-full"}/>
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
