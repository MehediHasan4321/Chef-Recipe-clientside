import { createBrowserRouter } from "react-router-dom"
import Main from "../MainPage/Main/Main"
import Home from "../MainPage/Home/Home"
import Blog from "../MainPage/Blog/Blog"
import ChefRecepis from "../PrivetPage/ChefRecepis/ChefRecepis"
import Login from "../LogReg/Login/Login"
import Regeister from "../LogReg/Regeister/Regeister"
import LogReg from "../LogReg/LogReg"
import Protectedroute from "../ProtectedRoute/Protectedroute"
import FourOFour from "../fourOForePage/FourOFour"

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
                element:<Protectedroute><ChefRecepis/></Protectedroute>,
                loader:({params})=>fetch(`https://chef-recipe-hunting-server-mehedihasan4321.vercel.app/chef/${params.id}`)
            }
        ]
    },
    {
        path:'logReg',
        element:<LogReg/>,
        children:[
            {
                path:'/logReg/login',
                element:<Login/>
            },
            {
                path:'/logReg/regeister',
                element:<Regeister/>
            }

        ]
    },
    {
        path:'*',
        element:<FourOFour/>
    }
])

export default router