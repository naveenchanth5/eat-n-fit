import React from 'react'

const Register = () => {
  return (
    <div>

<div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bg="img/bg/9.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">Cart</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="ltn__login-area pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Register <br/>Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="firstname" placeholder="First Name"/>
                            <input type="text" name="lastname" placeholder="Last Name"/>
                            <input type="text" name="email" placeholder="Email*"/>
                            <input type="password" name="password" placeholder="Password*"/>
                            <input type="password" name="confirmpassword" placeholder="Confirm Password*"/>
                            <label className="checkbox-inline">
                                <input type="checkbox" value=""/>
                                I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                            </label>
                            <label className="checkbox-inline">
                                <input type="checkbox" value=""/>
                                By clicking "create account", I consent to the privacy policy.
                            </label>
                            <div className="btn-wrapper">
                                <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                            </div>
                        </form>
                        <div className="by-agree text-center">
                            <p>By creating an account, you agree to our:</p>
                            <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
                            <div className="go-to-btn mt-50">
                                <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    </div>
  )
}

export default Register