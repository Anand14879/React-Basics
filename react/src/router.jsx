import { createBrowserRouter } from "react-router-dom";
//import App from "./App";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";


const router = createBrowserRouter([
    {

        path: '/',
        element: <Dashboard/>

    },
   {
        path:"/",
        element: <GuestLayout/>,
        children: [
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
   },
    {

        path: '/surveys',
        element: <Surveys/>

    }

]
    )

    export default router;