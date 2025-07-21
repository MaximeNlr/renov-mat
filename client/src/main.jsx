import './index.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile";
import Forum from "./pages/forum/Forum";
import Blog from "./pages/blog/Blog";
import SearchedProduct from './pages/searched-product/SearchedProduct';
import SelectedAd from './pages/selected-ad/SelectedAd';
import Seller from './pages/seller/Seller';
import Card from './pages/card/Card';
import PrivateRoutes from './private-routes/privateRoute';
import CreateAd from './pages/create_ad/CreateAd';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/category",
    element: <Category />
  },
  {
    path: "/profile",
    element: <PrivateRoutes>
      <Profile />
    </PrivateRoutes>
  },
  {
    path: "/forum",
    element: <Forum />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/searched-product",
    element: <SearchedProduct />
  },
  {
    path: "/selected-ad",
    element: <SelectedAd />
  },
  {
    path: "/seller",
    element: <Seller />
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/create_ad",
    element: <PrivateRoutes>
      <CreateAd />
    </PrivateRoutes>
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
