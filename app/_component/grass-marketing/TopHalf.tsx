import Image from "next/image";

const TopHalf = () => {
    return <div className={"w-full py-20px pl-54px bg-white flex items-center text-neutral rounded-20px"}>
        <Image src={"/grass-marketing/cover.png"} alt={'cover'} width={152} height={154}/>
        <div className={"ml-53px"}>
            <div className={"fw-700"}>刘大梨水彩笔刷组20支+水彩纸纹（包含头发笔）Procreate</div>
            <div className={"mt-18px"}>
                <span>店铺  刘大梨BigPear的店</span>
                <span className={"ml-35px"}>分类 办公文具-学习用品-画具/画材/书法用品-水粉/水彩/油画专用笔</span>
            </div>
            <div className={"mt-45px"}>
                <span>价格</span>
                <span className={"text-primary text-24px fw-500"}>￥19.8</span>
            </div>
        </div>
    </div>
}

export default TopHalf;