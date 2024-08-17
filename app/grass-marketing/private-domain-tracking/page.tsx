import PrivateCard from "@/app/_component/grass-marketing/PrivateCard";
import {privateDomainTrackingCard} from "@/app/_mock/grassMarketingMock";

const Page = () => {
    return <div className={"mt-15px pb-100px"}>
        <div>私域转化</div>
        <div className={"flex space-x-40px mt-15px"}>{
            privateDomainTrackingCard[0].map((item, index) => (
                <div key={index}><PrivateCard {...item}/></div>
            ))
        }</div>
        <div className={"mt-19px"}>私域促活</div>
        <div className={"flex space-x-40px mt-15px"}>{
            privateDomainTrackingCard[1].map((item, index) => (
                <div key={index}><PrivateCard {...item}/></div>
            ))
        }</div>
    </div>
}
export default Page;