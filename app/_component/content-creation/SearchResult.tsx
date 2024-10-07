"use client"
import {Button, Table} from "antd";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {contentCreationData} from "@/app/_mock/contentCreation";
import {useRouter} from "next/navigation";

const SearchResult = () => {
    // 定义状态来跟踪每行的收藏状态
    const [favoriteStatus, setFavoriteStatus] = useState({});

    const toggleFavorite = (record) => {
        // 更新状态，切换收藏状态
        setFavoriteStatus(prevState => ({
            ...prevState,
            [record.key]: !prevState[record.key] || undefined
        }));
    };
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        // 只在客户端生成随机数据
        setDataSource(contentCreationData);
    }, []);

    const router = useRouter();

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
            width: 230,
            render: (text: string, record: any) => (
                <>
                    <Button type="link" onClick={() => toggleFavorite(record)}>
                        {favoriteStatus[record.key] ? '取消收藏' : '收藏'}
                    </Button>
                    <Button type="link" onClick={() => router.push('/content-creation-detail')}>查看详情</Button>
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
        <Table components={components} columns={columns} dataSource={dataSource} pagination={{ position: ['bottomCenter'] }}/>
    </div>

}

export default SearchResult;
