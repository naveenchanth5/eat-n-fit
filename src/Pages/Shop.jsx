import React from 'react'

import product from '../Assests/img/3.jpg'
const Shop = () => {
  return (
    <div>


<div className="ltn__breadcrumb-area ltn__breadcrumb-area-3 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---" data-bg="img/bg/9.jpg">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                        <h1 className="section-title white-color">Shop</h1>
                    </div>
                    <div className="ltn__breadcrumb-list">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="ltn__shop-options">
                        <ul>
                            <li>
                                <div className="ltn__grid-list-tab-menu ">
                                    <div className="nav">
                                        <a className="active show" data-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large"></i></a>
                                        <a data-toggle="tab" href="#liton_product_list"><i className="fas fa-list"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                               <div className="showing-product-number text-right">
                                    <span>Showing 1–12 of 18 results</span>
                                </div> 
                            </li>
                            <li>
                               <div className="short-by text-center">
                                    <select className="nice-select">
                                        <option>Default Sorting</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by new arrivals</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="liton_product_grid">
                            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="ProductDetails"><img src={product} alt="#"/></a>
                                                {/* <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div> */}
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
                                                <h2 className="product-title"><a href="ProductDetails">Red Hot Tomato</a></h2>
                                                {/* <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
  
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__pagination-area text-center">
                        <div className="ltn__pagination">
                            <ul>
                                <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">10</a></li>
                                <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">

                        <div className="widget ltn__menu-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product categories</h4>
                            <ul>
                                <li><a href="#">Body <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Interior <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Lights <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Parts <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Tires <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Uncategorized <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Wheel <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                            </ul>
                        </div>
                      
                        <div className="widget ltn__price-filter-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Filter by price</h4>
                            <div className="price_filter">
                                <div className="price_slider_amount">
                                    <input type="submit"  value="Your range:"/> 
                                    <input type="text" className="amount" name="price"  placeholder="Add Your Price" /> 
                                </div>
                                <div className="slider-range"></div>
                            </div>
                        </div>
                       
                        <div className="widget ltn__top-rated-product-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
                            <ul>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="ProductDetails"><img src="img/product/1.png" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href="ProductDetails">Mixel Solid Seat Cover</a></h6>
                                            <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="ProductDetails"><img src="img/product/2.png" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href="ProductDetails">Vegetables Juices</a></h6>
                                            <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="ProductDetails"><img src="img/product/3.png" alt="#"/></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            
                                            <h6><a href="ProductDetails">Coil Spring Conversion</a></h6>
                                            {/* <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="widget ltn__search-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Search Objects</h4>
                            <form action="#">
                                <input type="text" name="search" placeholder="Search your keyword..."/>
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                        
                        <div className="widget ltn__tagcloud-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Popular Tags</h4>
                            <ul>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">desgin</a></li>
                                <li><a href="#">ux</a></li>
                                <li><a href="#">usability</a></li>
                                <li><a href="#">develop</a></li>
                                <li><a href="#">icon</a></li>
                                <li><a href="#">Car</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Repairs</a></li>
                                <li><a href="#">Auto Parts</a></li>
                                <li><a href="#">Oil</a></li>
                                <li><a href="#">Dealer</a></li>
                                <li><a href="#">Oil Change</a></li>
                                <li><a href="#">Body Color</a></li>
                            </ul>
                        </div>
                      
                        <div className="widget ltn__tagcloud-widget ltn__size-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product Size</h4>
                            <ul>
                                <li><a href="#">S</a></li>
                                <li><a href="#">M</a></li>
                                <li><a href="#">L</a></li>
                                <li><a href="#">XL</a></li>
                                <li><a href="#">XXL</a></li>
                            </ul>
                        </div>
                       
                        <div className="widget ltn__color-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product Color</h4>
                            <ul>
                                <li className="black"><a href="#"></a></li>
                                <li className="white"><a href="#"></a></li>
                                <li className="red"><a href="#"></a></li>
                                <li className="silver"><a href="#"></a></li>
                                <li className="gray"><a href="#"></a></li>
                                <li className="maroon"><a href="#"></a></li>
                                <li className="yellow"><a href="#"></a></li>
                                <li className="olive"><a href="#"></a></li>
                                <li className="lime"><a href="#"></a></li>
                                <li className="green"><a href="#"></a></li>
                                <li className="aqua"><a href="#"></a></li>
                                <li className="teal"><a href="#"></a></li>
                                <li className="blue"><a href="#"></a></li>
                                <li className="navy"><a href="#"></a></li>
                                <li className="fuchsia"><a href="#"></a></li>
                                <li className="purple"><a href="#"></a></li>
                                <li className="pink"><a href="#"></a></li>
                                <li className="nude"><a href="#"></a></li>
                                <li className="orange"><a href="#"></a></li>

                                <li><a href="#" className="orange"></a></li>
                                <li><a href="#" className="orange"></a></li>
                            </ul>
                        </div>
                    
                        <div className="widget ltn__banner-widget">
                            <a href="shop.html"><img src="img/banner/banner-2.jpg" alt="#"/></a>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    </div>









    </div>
  )
}

export default Shop