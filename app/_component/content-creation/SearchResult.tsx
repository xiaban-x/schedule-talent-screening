"use client"
import {Button, Table} from "antd";
import React from "react";
import Image from "next/image";

const SearchResult = () => {
    const words: string[] = [
        'Shadow', 'Raven', 'Blaze', 'Phoenix', 'Mystic',
        'Eclipse', 'Zephyr', 'Noir', 'Frost', 'Storm',
        'Vortex', 'Nebula', 'Seraph', 'Viper', 'Draco'
    ];

    const generateUsername = (): string => {
        const minLen = 5;
        const maxLen = 11;

        // Step 1: Generate an English word
        let username: string = words[Math.floor(Math.random() * words.length)];
        const usernameLength = username.length;

        // Step 2: Calculate how many Chinese characters we can add
        const remainingLength = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen - usernameLength;

        // Step 3: Add Chinese characters at random positions (before or after the word)
        let finalUsername: string = '';
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
    const titles = [
        "不神化“3天不油”人肉测评！宣称没翻车",
        '我富布！它就是古希腊掌管橄榄的神！',
        '九敏！到底哪瓶才是古希腊掌管高质量的神？',
        '爆改油头女大都靠它！喝油大师实锤了！',
        '学生党平价化妆品推荐！测评不踩雷',
        '深扒！这些网红护肤品真的有效吗？',
        '夏季防晒大作战！这几款防晒霜强烈推荐',
        '日常护肤误区，你中招了吗？',
        '超A穿搭！这个秋冬必备的时尚单品',
        '瘦身饮食指南！教你科学减肥不反弹',
        '我的护发神器大公开！洗完头发顺滑到不行',
        '年度最火口红试色！哪个颜色最显白？',
        '眼妆教程！初学者必学的4款妆容',
        '从头到脚！夏季美白秘籍全揭秘',
        '熬夜党福音！这几款面膜让我起床超有精神',
        '日系风温柔穿搭，男朋友看了都夸好看',
        '这些平价好物，真的买了不后悔',
        '3分钟搞定懒人早餐！美味又健康',
        '深夜护肤日记，这款精华救了我的痘痘肌',
        '我试了10款平价香水，这几款你一定要试试',
        '减脂餐也可以很好吃！分享我的健康食谱',
        '打造素颜感底妆！这款粉底液遮瑕又轻薄',
        '原来大牌也有平替！省钱攻略了解一下',
        '职场小白如何穿出气场？时尚穿搭指南',
        '探店分享！这家咖啡馆颜值与口感并存',
        '我的清洁神器！用了它后再也不怕堵毛孔',
        '极简风穿搭攻略，教你如何越简单越高级',
        '换季护肤大作战！皮肤干燥用什么最好？',
        '出门必备！这些小物品让旅行更方便',
        '超详细化妆刷使用教程，新手必看！'
    ]
    const initData = temp.map((_, index) => {
        return {
            key: index + 1,
            image: `/数据大屏材料/素人头像/pic (${index + 1}).jpg`,
            user: generateUsername(),
            totalMoney: `￥${Math.floor(Math.random() * 96458)}`,
            title: titles[Math.floor(Math.random() * titles.length)],
            completionRate: `${(Math.random() * 100).toFixed(2)}%`,
            likes: `${(Math.random() * 9).toFixed(2)}w`,
            comments: `${(Math.random() * 12).toFixed(2)}w`,
            purchaseRate: `${(Math.random() * 70).toFixed(2)}%`,
        }
    })
    const data = [];
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
    data.push(...initData)
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
            <div className="text-14px text-#ACABAB">共15w条结果</div>
        </div>
        {/*@ts-ignore*/}
        <Table components={components} columns={columns} dataSource={data} pagination={false}/>
    </div>

}

export default SearchResult;
