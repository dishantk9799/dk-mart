import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ProtectedAuth from './ProtectedAuth';
import Home from '../pages/Home';
import ProtectedHome from './ProtectedHome';
import DkMart from '../layout/DkMart';
import Shop from '../pages/Shop';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/login" />
        },
        {
            path: '/login',
            element: (
                <ProtectedAuth>
                    <SignIn />
                </ProtectedAuth>
            )
        },
        {
            path: '/register',
            element: (
                <ProtectedAuth>
                    <SignUp />
                </ProtectedAuth>
            )
        },
        {
            path: '/home',
            element: (
                <ProtectedHome>
                    <DkMart />
                </ProtectedHome>
            ),
            children: [
                { index: true, element: <Home /> },
                { path: 'shop', element: <Shop /> },
                { path: 'about', element: <About /> },
                { path: 'product/:id', element: <ProductDetails /> },
            ]
        },
    ]);
    return <RouterProvider router={router} />
}

export default AppRoutes
