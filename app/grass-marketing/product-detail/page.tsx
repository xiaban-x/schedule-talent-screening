"use client"
import Image from "next/image";
import {Button, Table} from "antd";
import React from "react";
import {productDetailData} from "@/app/_mock/grassMarketingMock";

const Page = () => {
    const components = {
        header: {
            cell: (props: any) => (
                <th {...props} style={{backgroundColor: '#FBF7F0', textAlign: 'center'}}>
                    {props.children}
                </th>
            ),
        },
    }

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
        <Table components={components} columns={columns} dataSource={productDetailData}
               pagination={{position: ['bottomCenter']}}/>
    </div>
}
export default Page;
