"use client"
import ConditionalScreening from "@/app/_component/content-creation/ConditionalScreening";
import SearchResult from "@/app/_component/talent-screening/SearchResult";

const page = () => {
    return <div className={"w-full pt-24px pl-17px pr-14px space-y-15px"}>
        <ConditionalScreening/>
        <SearchResult/>
    </div>
}
export default page;