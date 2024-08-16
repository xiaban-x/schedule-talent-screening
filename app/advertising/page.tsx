import Image from "next/image";

const page = () => {
    return <div className={"w-full"}>
        <Image src={'/投放分析报告样例_00.png'} alt={'png'} width={500} height={500} style={{width:'100%',height:'100%'}}/>
    </div>
}
export default page;