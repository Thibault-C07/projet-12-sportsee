import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
