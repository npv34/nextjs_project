import type {NextPage} from 'next'
import axios from "axios";
import {useEffect, useState} from "react";

const List: NextPage = () => {
    const [products, setProducts] = useState()

    const getAllProducts = async () => {
        // @ts-ignore
        let token: any = JSON.parse(localStorage.getItem('token'))
        return await axios.get('http://eshop-ecommert.herokuapp.com/api/products',
            {headers: {"Authorization": `Bearer ${token}`}}
        )
    }
    useEffect(() => {
        getAllProducts().then(r => {
            let products = r.data.data
            setProducts(products)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            Danh san pham
        </>
    )
}

export default List
