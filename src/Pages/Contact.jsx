import React from 'react'
import card from '../Assests/img//1.jpg'
import banner from '../Assests/img/2.jpg'
import product from '../Assests/img/3.jpg'

const Contact = () => {
  return (
    <div>
        <div className="ltn__breadcrumb-area ltn__breadcrumb-area-3 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---" data-bg="img/bg/9.jpg">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                        <h1 className="section-title white-color">Contact</h1>
                    </div>
                    <div className="ltn__breadcrumb-list">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




    <div className="ltn__contact-message-area mb-120 mb--100 py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__form-box contact-form-box box-shadow white-bg">
                        <h4 className="title-2">Get A Quote</h4>
                        <form id="contact-form" action="mail.php" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-item input-item-name ltn__custom-icon">
                                        <input type="text" name="name" placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-item input-item-email ltn__custom-icon">
                                        <input type="email" name="email" placeholder="Enter email address"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-item">
                                        <select className="nice-select">
                                            <option>Select Service Type</option>
                                            <option>Gardening </option>
                                            <option>Landscaping </option>
                                            <option>Vegetables Growing</option>
                                            <option>Land Preparation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-item input-item-phone ltn__custom-icon">
                                        <input type="text" name="phone" placeholder="Enter phone number"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-item input-item-textarea ltn__custom-icon">
                                <textarea name="message" placeholder="Enter message"></textarea>
                            </div>
                            <p><label className="input-info-save mb-0"><input type="checkbox" name="agree"/> Save my name, email, and website in this browser for the next time I comment.</label></p>
                            <div className="btn-wrapper mt-0">
                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">get an free service</button>
                            </div>
                            <p className="form-messege mb-0 mt-20"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  

   

   
 
    </div>
  )
}

export default Contact