import { createBrowserRouter } from "react-router-dom"
import Main from "../MainPage/Main/Main"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            
        ]
    }
])

export default router