"use client"
import Image from "next/image";
import {Button, Table} from "antd";
import React from "react";





const Page = () => {
    const words: string[] = [
        'Shadow', 'Raven', 'Blaze', 'Phoenix', 'Mystic',
        'Eclipse', 'Zephyr', 'Noir', 'Frost', 'Storm',
        'Vortex', 'Nebula', 'Seraph', 'Viper', 'Draco'
    ];

    const generateUsername = ():string =>  {
        const minLen = 5;
        const maxLen = 11;

        // Step 1: Generate an English word
        let username: string = words[Math.floor(Math.random() * words.length)];
        const usernameLength = username.length;

        // Step 2: Calculate how many Chinese characters we can add
        const remainingLength = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen - usernameLength;

        // Step 3: Add Chinese characters at random positions (before or after the word)
        let finalUsername:string = '';
        for (let i = 0; i < remainingLength; i++) {
            if (Math.random() > 0.5) {
                finalUsername += '你好世界和平美丽梦想星空希望未来'.charAt(Math.floor(Math.random() * '你好世界和平美丽梦想星空希望未来'.length));
            }
        }

        // Randomly decide to insert Chinese characters before or after the English word
        if (Math.random() > 0.5) {
            finalUsername = finalUsername + username;
        } else {
            finalUsername = username + finalUsername;
        }

        return finalUsername;
    }


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
                    <Image src={record?.image} alt={record?.title} width={50} height={50} className={"rounded-full"}/>
                    <div className={'ml-12px'}>{record?.user}</div>
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
