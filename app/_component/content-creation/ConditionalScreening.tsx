"use client"
import Image from "next/image";
import {Button, DatePicker, Select, Space} from "antd";
import Search from '/public/search.svg'
import type {DatePickerProps, GetProps} from 'antd';
import dayjs from "dayjs";

const ConditionalScreening = () => {
    const handleChange = (value: string) => {
        console.log(value);
    }
    type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

    const {RangePicker} = DatePicker;

    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };
    const dateFormat = 'YYYY-MM-DD';
    return <div className={"bg-white pl-31px pt-15px pb-27px w-full rounded-20px shadow-bluegray"}>
        <div className={"text-neutral"}>通过内容搜索</div>
        <div className={"w-347px flex items-center mt-28px border border-#6F6F6F"}>
            <div className={"flex items-center bg-#F5F7FB  pl-11px py-5px"}>
                <Image src={Search} alt={"search"} width={20} height={20}/>
                <input type="text" className={"w-262px bg-transparent border-transparent ml-12px border-none focus:outline-none focus:ring-0"}
                       placeholder={"洗发水推荐"}/>
            </div>
            <button className={"h-full bg-primary text-white w-50px py-5px"}>搜索</button>
        </div>
        <div className={"mt-29px space-y-15px"}>
            <div className={"flex items-center space-x-42px"}>
                <div>基本筛选</div>
                <div>
                    <Space wrap>
                        <Select
                            defaultValue="内容特征"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: '内容特征', label: '内容特征'},
                                {value: '性别特征', label: '性别特征'},
                            ]}
                        />
                        <Select
                            defaultValue="标签"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: '清纯', label: '清纯'},
                                {value: '性感', label: '性感'},
                            ]}
                        />
                        <Select
                            defaultValue="文章分类"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: '装扮', label: '装扮'},
                                {value: '外快', label: '外快'},
                            ]}
                        />
                        <span>
                           <span className={"mr-10px"}>发布时间</span>
                        <RangePicker
                            showTime={{format: dateFormat}}
                            format={dateFormat}
                            defaultValue={[dayjs('2010-09-03', dateFormat), dayjs('2024-08-15', dateFormat)]}
                            onChange={(value, dateString) => {
                                console.log('Selected Time: ', value);
                                console.log('Formatted Selected Time: ', dateString);
                            }}
                            onOk={onOk}
                        />
                       </span>
                    </Space>
                </div>
            </div>
            <div className={"flex items-center space-x-42px"}>
                <div>作者属性</div>
                <div>
                    <Space wrap>
                        <Select
                            defaultValue="性别"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: '男', label: '男'},
                                {value: '女', label: '女'},
                            ]}
                        />
                        <Select
                            defaultValue="粉丝数"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 100, label: '小于100'},
                                {value: 1000, label: '100-999'},
                                {value: 10000, label: '1000-9999'},
                                {value: 100000, label: '10000-99999'},
                                {value: 1000000, label: '大于99999'},
                            ]}
                        />
                        <Select
                            defaultValue="账号属性"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: '会员', label: '会员'},
                                {value: '超级会员', label: '超级会员'},
                            ]}
                        />
                    </Space>
                </div>
            </div>
            <div className={"flex items-center space-x-42px"}>
                <div>数据表现</div>
                <div>
                    <Space wrap>
                        <Select
                            defaultValue="完播率"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 30, label: '小于30%'},
                                {value: 50, label: '30%~49%'},
                                {value: 70, label: '50%~69%'},
                                {value: 90, label: '70%~89%'},
                                {value: 100, label: '大于89%'},
                            ]}
                        />
                        <Select
                            defaultValue="赞藏率"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 30, label: '小于30%'},
                                {value: 50, label: '30%~49%'},
                                {value: 70, label: '50%~69%'},
                                {value: 90, label: '70%~89%'},
                                {value: 100, label: '大于89%'},
                            ]}
                        />
                        <Select
                            defaultValue="点赞数"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 100, label: '小于100'},
                                {value: 1000, label: '100-999'},
                                {value: 10000, label: '1000-9999'},
                                {value: 100000, label: '10000-99999'},
                                {value: 1000000, label: '大于99999'},
                            ]}
                        />
                        <Select
                            defaultValue="分享数"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 100, label: '小于100'},
                                {value: 1000, label: '100-999'},
                                {value: 10000, label: '1000-9999'},
                                {value: 100000, label: '10000-99999'},
                                {value: 1000000, label: '大于99999'},
                            ]}
                        />
                        <Select
                            defaultValue="评论数"
                            style={{width: 120}}
                            onChange={handleChange}
                            options={[
                                {value: 100, label: '小于100'},
                                {value: 1000, label: '100-999'},
                                {value: 10000, label: '1000-9999'},
                                {value: 100000, label: '10000-99999'},
                                {value: 1000000, label: '大于99999'},
                            ]}
                        />
                    </Space>
                </div>
            </div>
        </div>
    </div>
}

export default ConditionalScreening;