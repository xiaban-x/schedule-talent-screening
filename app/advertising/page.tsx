import Image from "next/image";

const page = () => {
    return <div className={"w-full"}>
        <Image
            src={'/投放分析报告样例_00.png'}
            alt={'png'}
            width={1920}
            height={0}
            quality={100}
            style={{
                width: '100%',
                height: 'auto', // 确保图片高度自适应
                objectFit: 'contain' // 保持图片比例
            }}
        />
    </div>
}
export default page;