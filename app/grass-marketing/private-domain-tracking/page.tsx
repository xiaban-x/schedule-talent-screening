import PrivateCard from "@/app/_component/grass-marketing/PrivateCard";

const Page = () => {
    const cardData1 = [
        {
            title: '粉丝支付金额',
            data: "1,770,929.29",
            increase: '+51.78%',
            merit: "1,075,519.63",
            isPrimary: true
        },
        {
            title: '粉丝支付金额占比',
            data: "95.9%",
            increase: '-0.30%',
            merit: "54.0%",
            isPrimary: true,
            isGreen: true
        },
        {
            title: '粉丝支付人数',
            data: "957",
            increase: '+39.91%',
            merit: "1,164",
        },
    ]
    const cardData2 = [
        {
            title: '粉丝观播人数',
            data: "17,101",
            increase: '+0.97%',
            merit: "26,655",
        },
        {
            title: '粉丝观播率',
            data: "11.0%",
            increase: '+0.79%',
            merit: "5.09%",
        }
    ]
    return <div className={"mt-15px pb-100px"}>
        <div>私域转化</div>
        <div className={"flex space-x-40px mt-15px"}>{
            cardData1.map((item, index) => (
                <div key={index}><PrivateCard {...item}/></div>
            ))
        }</div>
        <div className={"mt-19px"}>私域促活</div>
        <div className={"flex space-x-40px mt-15px"}>{
            cardData2.map((item, index) => (
                <div key={index}><PrivateCard {...item}/></div>
            ))
        }</div>
    </div>
}
export default Page;