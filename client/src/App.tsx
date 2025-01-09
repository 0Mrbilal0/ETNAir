import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import { Component } from 'react';
import Home from './Components/Home/Content.tsx';
import Rental from './Components/Rental/Content.tsx';
import Register from './Components/Authentification/Register.tsx';

class App extends Component {
    render() {
        const router = createBrowserRouter([
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    },
                    {
                        path: 'login',
                    },
                    {
                        path: '/register',
                        element: <Register />
                    },
                    {
                        path: '/annonces/:id',
                        element: <Rental />
                    }
                ]
            },
            {
                path: '/*',
                errorElement: '404'
            }
        ])
        return (
            <RouterProvider router={router} />
        )
    }
}

export default App
