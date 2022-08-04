import {NextPage} from "next";

// @ts-ignore
const Layout: NextPage = ({children}) => {
    return (
        <>
            <h2>Xin chao</h2>
            {children}
        </>
    )
}

export default Layout
