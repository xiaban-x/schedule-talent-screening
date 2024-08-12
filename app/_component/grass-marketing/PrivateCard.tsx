import Image from "next/image";

const PrivateCard = ({title, data, increase, merit, isPrimary, isGreen}: any) => {
    return <div className={`relative w-292px h-157px pl-15px pt-16px pr-22px pb-12px border ${isPrimary ? 'border-primary bg-#FBF7F0' : 'border-#6F6F6F bg-#F8F8F8'}`}>
        <div className={"fw-700"}>{title}</div>
        <div className={"text-18px fw-700 mt-5px"}>{data}</div>
        <div className={"pb-15px border-b border-#ACABAB mt-9px"}>
            <span>较前7日</span>
            <span className={`ml-6px ${isGreen ? 'text-#76D25F' : 'text-primary'}`}>{increase}</span>
        </div>
        <div className={"w-full flex justify-between mt-5px"}>
            <span>同类优秀值</span>
            <span className={"text-14px"}>{merit}</span>
        </div>
        {isPrimary && <div>
            <div className={"absolute z-1 bottom-0 right-0 w-0 h-0 border-t-24px border-t-transparent border-r-42px border-r-primary"}></div>
            <Image className={"absolute bottom-0 right-5px z-2"} src={"/grass-marketing/isPrimary.png"} alt={'go'} width={15} height={15}/>
        </div>}
    </div>
}

export default PrivateCard;