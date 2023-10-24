import { Layout } from "@/components/layout";
import { SaveKeywordList } from "@/components/saveKeywordList";
import { NextPage } from "next";

const List:NextPage = () => {
    return <Layout>
        <SaveKeywordList/>
    </Layout>
}

export default List