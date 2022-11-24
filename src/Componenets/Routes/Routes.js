import Main from "../Layot/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Registared/sing-up/Register";
import Login from "../Pages/Registared/Singin/Login";

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
,

{
    path:"/login",
    element:<Login></Login>
},
{
    path:'/register',
    element:<Register></Register>
}

])

export default  Routes