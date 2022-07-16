import React from 'react'
import product from '../Assests/img/product/1.png'

const Category = () => {
  return (
    <div>
<div className="ltn__breadcrumb-area ltn__breadcrumb-area-3 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---" data-bg="img/bg/9.jpg">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                        <h1 className="section-title white-color">Category</h1>
                    </div>
                    <div className="ltn__breadcrumb-list">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Category</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  cars</h6>
                        <h1 className="section-title">Related Products<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__related-product-slider-one-active slick-arrow-1">
              
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Red Hot Tomato</a></h2>
                            {/* <div className="product-price">
                                <span>$149.00</span>
                                <del>$162.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Vegetables Juices</a></h2>
                            {/* <div className="product-price">
                                <span>$62.00</span>
                                <del>$85.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Orange Fresh Juice</a></h2>
                            {/* <div className="product-price">
                                <span>$75.00</span>
                                <del>$92.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Poltry Farm Meat</a></h2>
                            {/* <div className="product-price">
                                <span>$78.00</span>
                                <del>$85.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Fresh Butter Cake</a></h2>
                            {/* <div className="product-price">
                                <span>$150.00</span>
                                <del>$180.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- ltn__product-item --> */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src={product} alt="#"/></a>
                            <div className="product-badge">
                                <ul>
                                    <li className="sale-badge">New</li>
                                </ul>
                            </div>
                            {/* <div className="product-hover-action">
                                <ul>
                                    <li>
                                        <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                            <i className="fas fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                            <i className="far fa-heart"></i></a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="product-info">
                            {/* <div className="product-ratting">
                                <ul>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                </ul>
                            </div> */}
                            <h2 className="product-title"><a href="product-details.html">Orange Sliced Mix</a></h2>
                            {/* <div className="product-price">
                                <span>$150.00</span>
                                <del>$180.00</del>
                            </div> */}
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>




    </div>
  )
}

export default Category