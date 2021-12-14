import React from 'react';

function Contact() {
    return (
        <div>
            <div className="contact__container">
                <h1>Submit your details</h1>
                    <div className="contact__sub__container">
                        <div className="form">
                            <form id="contact__form">
                              <div>
                                <label>Name</label>
                                <input type="text" class="inputField" id="name"/>
                                <div class="form__error" id="name__error">Please enter your first name</div>
                              </div>
                              <div>
                                <label>Email</label>
                                <input type="email" class="inputField" id="email"/>
                                <div class="form__error" id="email__error">Please enter a valid email address</div>
                              </div>
                              <div>
                                <label>Website</label>
                                <input type="text" class="inputField" id="website"/>
                                    <span className="https">https//</span>
                              </div>
                              <div>
                                <label>Message</label>
                                <input type="text" class="inputField" id="message"/>
                                <div class="form__error" id="message__error">Your message must be at least 20 characters</div>
                              </div>
                              <span className="form__allow">
                              <input type="checkbox"></input>
                                <label>Allow us to sell your personal details to whomever we want</label>
                              </span>
                                <input type="submit" class="submitBtn" value="Send"></input>
                            </form>
                            </div>



                            <div className="contact__info">
                                <span>
                                    <p>hansenfp@gmail.com</p>
                                </span>
                                <span>
                                    <p>123 456 7890</p>
                                </span>
                                <span>
                                    <p>123 Some Street</p>
                                    <p>Somewhere</p>
                                    <p>Some City</p>
                                    <p>10000</p> 
                                </span>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
