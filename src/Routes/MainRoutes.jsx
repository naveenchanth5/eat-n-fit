import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import Contact from "../Pages/Contact"
import Category from "../Pages/Category"
import Cart from "../Pages/Cart"
import CheckOut from "../Pages/CheckOut"
import WishList from "../Pages/WishList"
import Blog from "../Pages/Blog"
import Login from "../Pages/Login"
import BlogDetails from "../Pages/BlogDetails"
import ProductDetails from "../Pages/ProductDetails"
import Header from "../Common/Header"
import Footer from "../Common/Footer"
import ForgotPassword from '../Pages/ForgotPassword';
import VerifyPassword from '../Pages/VerifyPassword';
import TermsCondition from '../Pages/TermsCondition';
import Register from '../Pages/Register';

const MainRoutes = () => {
    return (
        <div>
        <Router>
        <Header />
        <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route  path={"Shop"} element={<Shop />} />
            <Route  path={"Category"} element={<Category />} />
            <Route  path={"Cart"} element={<Cart />} />
            <Route  path={"WishList"} element={<WishList />} />
            <Route  path={"CheckOut"} element={<CheckOut />} />
            <Route  path={"Register"} element={<Register />} />
            <Route  path={"Blog"} element={<Blog />} />
            <Route  path={"BlogDetails"} element={<BlogDetails />} />
            <Route  path={"ProductDetails"} element={<ProductDetails />} />
            <Route  path={"Login"} element={<Login />} />
            <Route  path={"ForgotPassword"} element={<ForgotPassword />} />
            <Route  path={"VerifyPassword"} element={<VerifyPassword />} />
            <Route  path={"TermsCondition"} element={<TermsCondition />} />

            <Route  path={"Contact"} element={<Contact />} />

        </Routes>
        <Footer />
    </Router>

        </div>
    )
}

export default MainRoutes
