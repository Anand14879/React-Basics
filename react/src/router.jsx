import { Navigate, createBrowserRouter } from "react-router-dom";
//import App from "./App";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/dashboard' />
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: "/surveys",
                element: <Surveys />
            }
        ]

    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }


]
)

export default router;