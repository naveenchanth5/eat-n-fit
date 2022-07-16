import React from 'react'

const VerifyPassword = () => {
  return (
    <div>

<div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bg="img/bg/9.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">Account</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BREADCRUMB AREA END --> */}

    {/* <!-- LOGIN AREA START --> */}
    <div className="ltn__login-area pb-65">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Sign In <br/>To  Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10">
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="email" placeholder="verify code*"/>
                            <input type="text" name="email" placeholder="new password*"/>
                            <input type="text" name="email" placeholder="confirm password*"/>
                    
                            <div className="btn-wrapper mt-0">
                                <button className="theme-btn-1 btn btn-block" type="submit">UPDATE</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

        
    </div>
  )
}

export default VerifyPassword