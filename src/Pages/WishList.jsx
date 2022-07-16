import React from 'react'
import product from '../Assests/img/product/1.png'

const Wishlist = () => {
  return (
    <div>

<div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bg="img/bg/9.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">Wishlist</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Wishlist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 

  
    <div className="liton__wishlist-area mb-105">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping-cart-inner">
                        <div className="shoping-cart-table table-responsive">
                            <table className="table">
                                {/* <!-- <thead>
                                    <th className="cart-product-remove">X</th>
                                    <th className="cart-product-image">Image</th>
                                    <th className="cart-product-info">Title</th>
                                    <th className="cart-product-price">Price</th>
                                    <th className="cart-product-quantity">Quantity</th>
                                    <th className="cart-product-subtotal">Subtotal</th>
                                </thead> --> */}
                                <tbody>
                                    <tr>
                                        <td className="cart-product-remove">x</td>
                                        <td className="cart-product-image">
                                            <a href="product-details.html"><img src={product} alt="#"/></a>
                                        </td>
                                        <td className="cart-product-info">
                                            <h4><a href="product-details.html">Vegetables Juices</a></h4>
                                        </td>
                                        <td className="cart-product-price">$85.00</td>
                                        <td className="cart-product-stock">In Stock</td>
                                        <td className="cart-product-add-cart">
                                            <a className="submit-button-1" href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">Add to Cart</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart-product-remove">x</td>
                                        <td className="cart-product-image">
                                            <a href="product-details.html"><img src={product} alt="#"/></a>
                                        </td>
                                        <td className="cart-product-info">
                                            <h4><a href="product-details.html">Orange Fresh Juice</a></h4>
                                        </td>
                                        <td className="cart-product-price">$89.00</td>
                                        <td className="cart-product-stock">In Stock</td>
                                        <td className="cart-product-add-cart">
                                            <a className="submit-button-1" href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">Add to Cart</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cart-product-remove">x</td>
                                        <td className="cart-product-image">
                                            <a href="product-details.html"><img src={product} alt="#"/></a>
                                        </td>
                                        <td className="cart-product-info">
                                            <h4><a href="product-details.html">Poltry Farm Meat</a></h4>
                                        </td>
                                        <td className="cart-product-price">$149.00</td>
                                        <td className="cart-product-stock">In Stock</td>
                                        <td className="cart-product-add-cart">
                                            <a className="submit-button-1" href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">Add to Cart</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Wishlist