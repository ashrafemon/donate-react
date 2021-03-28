import React from "react";

const Home = React.lazy(() => import('../pages/Home'))
const Starter = React.lazy(() => import('../components/Starter'))

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Starter',
        component: Starter
    },
    {
        path: '/login',
        exact: true,
        name: 'Login',
        component: React.lazy(() => import('../components/Auth/Login'))
    },
    {
        path: '/register',
        exact: true,
        name: 'Register',
        component: React.lazy(() => import('../components/Auth/Register'))
    },
    {
        path: '/home',
        exact: true,
        name: 'Home',
        component: Home
    },
]

export default routes