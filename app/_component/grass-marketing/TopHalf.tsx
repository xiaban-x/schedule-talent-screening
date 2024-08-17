import Image from "next/image";

const TopHalf = () => {
    return <div className={"w-full py-20px pl-54px bg-white flex items-center text-neutral rounded-20px"}>
        <Image src={"/grass-marketing/costa吨吨杯陶三潜.jpg"} alt={'cover'} width={130} height={120}/>
        <div className={"ml-53px"}>
            <div className={"fw-700"}>costa吨吨杯</div>
            <div className={"mt-18px"}>
                <span>店铺  陶三潜的店</span>
                <span className={"ml-35px"}>分类 生活用品 运动水具/水杯</span>
            </div>
            <div className={"mt-45px"}>
                <span>价格</span>
                <span className={"text-primary text-24px fw-500"}>￥139.9</span>
            </div>
        </div>
    </div>
}

export default TopHalf;