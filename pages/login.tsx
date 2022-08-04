import {NextPage} from "next";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Login: NextPage = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        data: {
            email: '',
            password: ''
        },
        error: {
            message: ''
        }
    })

    const handlerChange = (e: any, field: any) => {
        // @ts-ignore
        form.data[field] = e.target.value
        setForm({...form})
    }

   const handlerSubmitted = (e: any) => {
        e.preventDefault()
        let data = form.data
        axios.post('http://eshop-ecommert.herokuapp.com/api/login', data).then(response => {

            let result = response.data;
            console.log(result)

            let token = result.authorisation.token
            localStorage.setItem('token', JSON.stringify(token));
            router.push('/products')
            //setForm({...form})
        } ).catch(err => {
            form.error.message = err.response.data.message
            setForm({...form})
        })
    }

    return (
        <>
            <p style={{color: "red"}}>{form.error.message}</p>
            <form onSubmit={handlerSubmitted}>
                email:
                <input type="text" onChange={(e) => handlerChange(e, "email")} name="email"/>
                password:
                <input type="text" name="password" onChange={(e) => handlerChange(e, "password")}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}



export default Login

