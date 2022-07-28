import React from 'react'
import ab from './img/ab1.jpg'
import place from './img/place.jpeg'

export default function About() {
    return (
        <><h1 align='center' style={{
            fontWeight:'bolder'
        }}>About Us</h1>
                <div className="container food" id="about">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 mb-5">
                            <div className="card border-3">
                                <img src={ab} className="img-fluid" alt='ab' />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 text-sec mb-lg-0">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>We will provide you best and healthy food. You should try our place for Brunch and all. We have best food in city.</p>
                            <button className="btn btn-outline-light mt-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="For more info Click">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="container food-place">
                    <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                            <h2>Here is Our Place when You'll feel free.</h2>
                            <p>Our Regular Customers are enjoying their life at our place. Our place is so neat and clean and anyone can feel comfertable at our Place. We will provide you our best services. Anyone can do their work at our place.We will provide
                                you work-atmosphere.</p>
                            <ul className="list-unstyled py-3">
                                <li><i className='fas fa-check'></i> Friendly, personalized service.</li>
                                <li><i className='fas fa-check'></i> A memorable atmosphere.</li>
                                <li><i className='fas fa-check'></i> Consistently great food.</li>
                            </ul>
                            <button className="btn btn-outline-light" data-bs-toggle="tooltip" data-bs-placement="bottom" title="For more info Click">Learn More</button>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="card border-3">
                                <img src={place} alt='place' className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}


