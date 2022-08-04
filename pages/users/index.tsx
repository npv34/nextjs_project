import {ReactElement, useEffect, useState} from "react";
import {NextPageWithLayout} from "../_app";
import Layout from "../layout";
import Page from "../login";

const List: NextPageWithLayout = () => {
    const [data, setData] = useState({
        avatar_url: ""
    })
    const [keyword, setKeyword] = useState("")

    const handlerSearch = (e: any) => {
        fetch('https://api.github.com/search/users?q=' + keyword, {
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.items[0]);
            setData(data.items[0])
        })
    }

    return (
        <>
            <input type="text" onChange={(e) => setKeyword(e.target.value)}/>
            <button onClick={handlerSearch}>Search</button>
            <img src={data.avatar_url} alt=""/>
        </>
    )
}

List.getLayout = function getLayout(page: ReactElement) {
    return (
        // @ts-ignore
        <Layout>
            {page}
        </Layout>
    )
}

export default List
