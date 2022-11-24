import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");


const Routes=createBrowserRouter([
{
    path: "/",
    element:<Main></Main>,
    children:[
        {
         path:"/",
         element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>

        }
    ]
}

])

export default  Routes