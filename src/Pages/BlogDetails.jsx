import React from 'react'
import card from '../Assests/img//1.jpg'
import banner from '../Assests/img/2.jpg'
import product from '../Assests/img/3.jpg'

const BlogDetails = () => {
  return (
    <div>


<div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <span className="ltn__utilize-menu-title">Cart</span>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/1.png" alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Red Hot Tomato</a></h6>
                        <span className="mini-cart-quantity">1 x $65.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/2.png" alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Vegetables Juices</a></h6>
                        <span className="mini-cart-quantity">1 x $85.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/3.png" alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Orange Sliced Mix</a></h6>
                        <span className="mini-cart-quantity">1 x $92.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/4.png" alt="Image"/></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Orange Fresh Juice</a></h6>
                        <span className="mini-cart-quantity">1 x $68.00</span>
                    </div>
                </div>
            </div>
            <div className="mini-cart-footer">
                <div className="mini-cart-sub-total">
                    <h5>Subtotal: <span>$310.00</span></h5>
                </div>
                <div className="btn-wrapper">
                    <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                    <a href="cart.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                </div>
                <p>Free Shipping on All Orders Over $100!</p>
            </div>

        </div>
    </div>
    {/* <!-- Utilize Cart Menu End --> */}

    {/* <!-- Utilize Mobile Menu Start --> */}
    <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                    <a href="index.html"><img src="img/logo.png" alt="Logo"/></a>
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="ltn__utilize-menu">
                <ul>
                    <li><a href="#">Home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Home Pages 01</a></li>
                            <li><a href="index-2.html">Home Pages 02</a></li>
                            <li><a href="index-3.html">Home Pages 03</a></li>
                            <li><a href="index-4.html">Home Pages 04</a></li>
                            <li><a href="index-5.html">Home Pages 05  <span className="menu-item-badge">video</span></a></li>
                            <li><a href="index-6.html">Home Pages 06</a></li>
                            <li><a href="index-7.html">Home Pages 07</a></li>
                            <li><a href="index-8.html">Home Pages 08</a></li>
                            <li><a href="index-9.html">Home Pages 09</a></li>
                            <li><a href="index-10.html">Home Pages 10</a></li>
                            <li><a href="index-11.html">Home Pages 11 <span className="menu-item-badge">Service</span></a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Shop</a>
                        <ul className="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                            <li><a href="product-details.html">Shop details </a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="order-tracking.html">Order Tracking</a></li>
                            <li><a href="account.html">My Account</a></li>
                            <li><a href="login.html">Sign in</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </li>
                    <li><a href="#">News</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">News</a></li>
                            <li><a href="blog-grid.html">News Grid</a></li>
                            <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                            <li><a href="blog-details.html">News details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="contact.html">Appointment</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                <ul>
                    <li>
                        <a href="account.html" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                            My Account
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html" title="Wishlist">
                            <span className="utilize-btn-icon">
                                <i className="far fa-heart"></i>
                                <sup>3</sup>
                            </span>
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" title="Shoping Cart">
                            <span className="utilize-btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <sup>5</sup>
                            </span>
                            Shoping Cart
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Utilize Mobile Menu End --> */}

    <div className="ltn__utilize-overlay"></div>

    {/* <!-- BREADCRUMB AREA START --> */}
    <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bg="img/bg/9.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">News Details</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>News Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BREADCRUMB AREA END --> */}

    {/* <!-- PAGE DETAILS AREA START (blog-details) --> */}
    <div className="ltn__page-details-area ltn__blog-details-area mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__blog-details-wrap">
                        <div className="ltn__page-details-inner ltn__blog-details-inner">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-category">
                                        <a href="#">Business</a>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="ltn__blog-title">Business contents insurance is a type of
                                business insurance that can protect</h2>
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><img src="img/blog/author.jpg" alt="#"/>By: Ethan</a>
                                    </li>
                                    <li className="ltn__blog-date">
                                        <i className="far fa-calendar-alt"></i>June 22, 2020
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-comments"></i>35 Comments</a>
                                    </li>
                                </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            <img src="img/blog/35.jpg" alt="Image"/>
                            <h2>A cleansing hot shower or bath</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
                            <hr/>
                            <h2>Setting the mood with incense</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
                            <hr/>
                            <h2>Setting the mood with incense</h2>
                            <div className="list-item-with-icon-2">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
                                </ul>
                            </div>
                            <blockquote>
                                <h6 className="ltn__secondary-color mt-0">BY HETMAYAR</h6>
                                Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </p>

                            <img className="alignleft" src="img/blog/blog-details/1.jpg" alt="Image"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.  </p>


                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur expedita velit laboriosam est sint laborum eos assumenda, quam voluptatem adipisci, reprehenderit ut nobis blanditiis perspiciatis!</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src="img/service/31.jpg" alt="Image"/>
                                    <label>Image Caption Here</label>
                                </div>
                                <div className="col-lg-6">
                                    <img src="img/service/32.jpg" alt="Image"/>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, amet, fuga omnis eligendi sed cupiditate molestias enim autem animi est tempore ipsa corporis. Recusandae, quia.</p>
                            
                        </div>
                        {/* <!-- blog-tags-social-media --> */}
                        <div className="ltn__blog-tags-social-media mt-80 row">
                            <div className="ltn__tagcloud-widget col-lg-8">
                                <h4>Releted Tags</h4>
                                <ul>
                                    <li>
                                        <a href="#">Popular</a>
                                    </li>
                                    <li>
                                        <a href="#">Business</a>
                                    </li>
                                    <li>
                                        <a href="#">ux</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ltn__social-media text-right col-lg-4">
                                <h4>Social Share</h4>
                                <ul>
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                    
                                    <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        {/* <!-- prev-next-btn --> */}
                        <div className="ltn__prev-next-btn row mb-50">
                            <div className="blog-prev col-lg-6">
                                <h6>Prev Post</h6>
                                <h3 className="ltn__blog-title"><a href="#">Tips On Minimalist</a></h3>
                            </div>
                            <div className="blog-prev blog-next text-right col-lg-6">
                                <h6>Next Post</h6>
                                <h3 className="ltn__blog-title"><a href="#">Less Is More</a></h3>
                            </div>
                        </div>
                        <hr/>
                        {/* <!-- related-post --> */}
                        <div className="related-post-area mb-50">
                            <h4 className="title-2">Related Post</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <!-- Blog Item --> */}
                                    <div className="ltn__blog-item ltn__blog-item-6">
                                        <div className="ltn__blog-img">
                                            <a href="blog-details.html"><img src="img/blog/blog-details/11.jpg" alt="Image"/></a>
                                        </div>
                                        <div className="ltn__blog-brief">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date ltn__secondary-color">
                                                        <i className="far fa-calendar-alt"></i>June 22, 2020
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="ltn__blog-title"><a href="blog-details.html">A series of iOS 7 inspire
                                                vector icons sense.</a></h3>
                                            <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Blog Item --> */}
                                    <div className="ltn__blog-item ltn__blog-item-6">
                                        <div className="ltn__blog-img">
                                            <a href="blog-details.html"><img src="img/blog/blog-details/12.jpg" alt="Image"/></a>
                                        </div>
                                        <div className="ltn__blog-brief">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date ltn__secondary-color">
                                                        <i className="far fa-calendar-alt"></i>June 22, 2020
                                                    </li>
                                                </ul>
                                            </div>
                                            <h3 className="ltn__blog-title"><a href="blog-details.html">A series of iOS 7 inspire
                                                vector icons sense.</a></h3>
                                            <p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- comment-area --> */}
                        <div className="ltn__comment-area mb-50">
                            <div className="ltn-author-introducing clearfix">
                                <div className="author-img">
                                    <img src="img/blog/author.jpg" alt="Author Image"/>
                                </div>
                                <div className="author-info">
                                    <h6>Written by</h6>
                                    <h1>Rosalina D. William</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.</p>
                                </div>
                            </div>
                            <h4 className="title-2">03 Comments</h4>
                            <div className="ltn__comment-inner">
                                <ul>
                                    <li>
                                        <div className="ltn__comment-item clearfix">
                                            <div className="ltn__commenter-img">
                                                <img src="img/testimonial/1.jpg" alt="Image"/>
                                            </div>
                                            <div className="ltn__commenter-comment">
                                                <h6><a href="#">Adam Smit</a></h6>
                                                <span className="comment-date">20th May 2020</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                <a href="#" className="ltn__comment-reply-btn"><i className="icon-reply-1"></i>Reply</a>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="ltn__comment-item clearfix">
                                                    <div className="ltn__commenter-img">
                                                        <img src="img/testimonial/3.jpg" alt="Image"/>
                                                    </div>
                                                    <div className="ltn__commenter-comment">
                                                        <h6><a href="#">Adam Smit</a></h6>
                                                        <span className="comment-date">21th May 2020</span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                        <a href="#" className="ltn__comment-reply-btn"><i className="icon-reply-1"></i>Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="ltn__comment-item clearfix">
                                            <div className="ltn__commenter-img">
                                                <img src="img/testimonial/4.jpg" alt="Image"/>
                                            </div>
                                            <div className="ltn__commenter-comment">
                                                <h6><a href="#">Adam Smit</a></h6>
                                                <span className="comment-date">25th May 2020</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                <a href="#" className="ltn__comment-reply-btn"><i className="icon-reply-1"></i>Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        {/* <!-- comment-reply --> */}
                        <div className="ltn__comment-reply-area ltn__form-box mb-10">
                            <h4 className="title-2">Post Comment</h4>
                            <form action="#">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                    <textarea placeholder="Type your comments...."></textarea>
                                </div>
                                <div className="input-item input-item-name ltn__custom-icon">
                                    <input type="text" placeholder="Type your name...."/>
                                </div>
                                <div className="input-item input-item-email ltn__custom-icon">
                                    <input type="email" placeholder="Type your email...."/>
                                </div>
                                <div className="input-item input-item-website ltn__custom-icon">
                                    <input type="text" name="website" placeholder="Type your website...."/>
                                </div>
                                <label className="mb-0 input-info-save"><input type="checkbox" name="agree"/> Save my name, email, and website in this browser for the next time I comment.</label>
                                <div className="btn-wrapper">
                                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"><i className="far fa-comments"></i> Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
   
            </div>
        </div>
    </div>
    {/* <!-- PAGE DETAILS AREA END --> */}


</div>
  )
}

export default BlogDetails