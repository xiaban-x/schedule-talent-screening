"use client"
import {Table} from "antd";
import React from "react";
import {contentCreationDetailData} from "@/app/_mock/contentCreation";

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
            title: '观看ID',
            dataIndex: 'userId',
            key: 'userId',
            align: 'center',
        },
        {
            title: '观看时长(s)',
            dataIndex: 'viewingDuration',
            key: 'viewingDuration',
            align: 'center',
        },
        {
            title: '购买数量(个)',
            dataIndex: 'purchaseQuantity',
            key: 'purchaseQuantity',
            align: 'center',
        },
    ];

    return <div className="bg-white mx-10 mt-10 px-10 pt-40px pb-20px rounded-20px">
        {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={contentCreationDetailData}
               pagination={{position: ['bottomCenter']}}/>
    </div>
}
export default Page;
