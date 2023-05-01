import { createBrowserRouter } from "react-router-dom"
import Main from "../MainPage/Main/Main"
import Home from "../MainPage/Home/Home"
import Blog from "../MainPage/Blog/Blog"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/',
                element:<Main/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
])

export default router