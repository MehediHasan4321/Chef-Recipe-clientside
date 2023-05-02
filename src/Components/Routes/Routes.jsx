import { createBrowserRouter } from "react-router-dom"
import Main from "../MainPage/Main/Main"
import Home from "../MainPage/Home/Home"
import Blog from "../MainPage/Blog/Blog"
import ChefRecepis from "../PrivetPage/ChefRecepis/ChefRecepis"
import Login from "../LogReg/Login/Login"
import Regeister from "../LogReg/Regeister/Regeister"

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
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/regeister',
        element:<Regeister/>
    }
])

export default router