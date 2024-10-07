"use client"
import {Table} from "antd";
import React from "react";
import {productDetailOneData} from "@/app/_mock/grassMarketingMock";

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
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: '购买数量(个)',
            dataIndex: 'count',
            key: 'count',
            align: 'center',
        },
        {
            title: '支付金额(元)',
            dataIndex: 'amount',
            key: 'amount',
            align: 'center',
        },
        {
            title: '交易时间',
            dataIndex: 'tradingHours',
            key: 'tradingHours',
            align: 'center',
        },
        {
            title: '退款情况',
            dataIndex: 'refundStatus',
            key: 'refundStatus',
            align: 'center',
        },
        {
            title: '退款原因',
            dataIndex: 'refundReason',
            key: 'refundReason',
            align: 'center',
        },
        {
            title: '售后情况',
            dataIndex: 'afterSaleStatus',
            key: 'afterSaleStatus',
            align: 'center',
        },
    ];

    return <div className="bg-white mx-10 mt-10 px-10 pt-40px pb-20px rounded-20px">
        {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={productDetailOneData}
               pagination={{position: ['bottomCenter']}}/>
    </div>
}
export default Page;
