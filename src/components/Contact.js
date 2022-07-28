import React, { Component } from 'react'

export class Contact extends Component {

    render() {
        return (
            <><h1 className="h1-responsive font-weight-bold text-center">Contact us</h1>
                <section id='contact'>
                    
                    <p className="text-center w-responsive mx-auto">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>

                    <div className="row pb-5">
                    <div className="col-md-3 text-center p-3">
                            <ul className="list-unstyled mb-0">
                                <li><a className="fas fa-map-marker-alt mt-3" href='https://goo.gl/maps/4aTAoR4tPWdSibyM6'></a>
                                    <p>San Francisco, CA 94126, USA</p>
                                </li>

                                <li><i className="fas fa-phone mt-3" href=''></i>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><i className="fas fa-envelope mt-3" href=''></i>
                                    <p>pops2342@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0 mt-3">
                                            <input type="text" id="name" name="name" className="form-control" placeholder='Name'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0 mt-3">
                                            <input type="text" id="email" name="email" className="form-control" placeholder='Email'/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0 mt-3">
                                            <input type="text" id="subject" name="subject" className="form-control" placeholder='Subject'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mt-3">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="5" placeholder='Message' className="form-control md-textarea"></textarea>
                                            
                                        </div>

                                    </div>
                                </div>

                            </form>

                            <div className="text-center text-md-left mt-3">
                                <button className="btn btn-outline-light">Send</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact