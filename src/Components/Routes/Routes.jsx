import { createBrowserRouter } from "react-router-dom"
import Main from "../MainPage/Main/Main"
import Home from "../MainPage/Home/Home"
import Blog from "../MainPage/Blog/Blog"
import ChefRecepis from "../PrivetPage/ChefRecepis/ChefRecepis"

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
            },
            {
                path:'/chef/:id',
                element:<ChefRecepis/>,
                loader:({params})=>fetch(`http://localhost:3000/chef/${params.id}`)
            }
        ]
    }
])

export default router