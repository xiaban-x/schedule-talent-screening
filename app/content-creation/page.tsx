import ConditionalScreening from "@/app/_component/content-creation/ConditionalScreening";
import SearchResult from "@/app/_component/content-creation/SearchResult";

const page = () => {
    return <div className={"w-full pt-24px pl-17px pr-14px space-y-15px"}>
        {/*条件筛选*/}
        <ConditionalScreening/>
        <SearchResult/>
    </div>
}
export default page;