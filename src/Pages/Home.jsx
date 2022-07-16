import React from 'react'
import card from '../Assests/img//1.jpg'
import banner from '../Assests/img/2.jpg'
import product from '../Assests/img/3.jpg'
const Home = () => {
  return (
    <div>
        
    <div className="ltn__utilize-overlay"></div>

{/* <!-- SLIDER AREA START (slider-3) --> */}
<div className="ltn__slider-area ltn__slider-3  section-bg-1">
    <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white">
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 text-color-white bg-image" data-bg={card}>
            <div className="ltn__slide-item-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-self-center">
                            <div className="slide-item-info">
                                <div className="slide-item-info-inner ltn__slide-animation">
                                    <div className="slide-video mb-50 d-none">
                                        <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/ATI7vfCgwXE?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                    <h6 className="slide-sub-title animated">
                                      <img src="img/icons/icon-img/1.png" alt="#"/> 100% genuine Products</h6>
                                    <h1 className="slide-title animated ">Tasty & Healthy <br/>  Organic Food</h1>
                                    <div className="slide-brief animated">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div className="btn-wrapper animated">
                                        <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="slide-item-img">
                                <img src="img/slider/23.png" alt="#">
                            </div> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ltn__slide-item --> */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 text-color-white bg-image" data-bg={card}>
            <div className="ltn__slide-item-inner  text-right">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-self-center">
                            <div className="slide-item-info">
                                <div className="slide-item-info-inner ltn__slide-animation">
                                    <h6 className="slide-sub-title animated">
                                      <img src="img/icons/icon-img/1.png" alt="#"/> 100% genuine Products</h6>
                                    <h1 className="slide-title animated ">Our Garden's  Most <br/>   Favorite Food</h1>
                                    <div className="slide-brief animated">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                    <div className="btn-wrapper animated">
                                        <a href="shop.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Explore Products</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="slide-item-img slide-img-left">
                                <img src="img/slider/21.png" alt="#">
                            </div> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--  --> */}
    </div>
</div>
{/* <!-- SLIDER AREA END --> */}

{/* <!-- BANNER AREA START --> */}
<div className="ltn__banner-area mt-120">
    <div className="container">
        <div className="row ltn__custom-gutter--- justify-content-center">
            <div className="col-lg-4 col-md-6">
                <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                        <a href="shop.html"><img src={banner} alt="Banner Image"/></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                        <a href="shop.html"><img src={banner} alt="Banner Image"/></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="ltn__banner-item">
                    <div className="ltn__banner-img">
                        <a href="shop.html"><img src={banner} alt="Banner Image"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- BANNER AREA END --> */}




    





<div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                    <h1 className="section-title">categories</h1>
                </div>
            </div>
        </div>
        <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
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
                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                        {/* <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
                    <div className="product-img">
                        <a href="product-details.html"><img src={product} alt="#"/></a>
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
                            <span>$25.00</span>
                            <del>$35.00</del>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
       
        </div>
    </div>
</div>


<div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                    <h1 className="section-title">Hot Deals</h1>
                </div>
            </div>
        </div>
        <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
            
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
                    <div className="product-img">
                        <a href="product-details.html"><img src={product} alt="#"/></a>
                        
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
                        <h2 className="product-title"><a href="product-details.html">Carrots Group Scal</a></h2>
                        {/* <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__product-item ltn__product-item-3 text-left">
                    <div className="product-img">
                        <a href="product-details.html"><img src={product} alt="#"/></a>
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
                            <span>$25.00</span>
                            <del>$35.00</del>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
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
            
       
        </div>
    </div>
</div>






        
    </div>
  )
}

export default Home