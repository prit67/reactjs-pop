import React, { Component } from 'react'

export class Reviews extends Component {
    render() {
        return (
            <><h1 className="mb-4">Testimonials</h1>
                <section id='reviews'>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Here is some reviews of Our Customers.And you will see that customers like our food and place.You will also visit,enjoy and review us on our site.
                            </p>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    className="rounded-circle shadow-1-strong" alt='' width="150" height="150" />
                            </div>
                            <h3 className="mb-3">Maria Smantha</h3>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                                tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    className="rounded-circle shadow-1-strong" alt='' width="150" height="150" />
                            </div>
                            <h3 className="mb-3">Lisa Cudrow</h3>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-0">
                            <div className="d-flex justify-content-center mb-4">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    className="rounded-circle shadow-1-strong" alt='' width="150" height="150" />
                            </div>
                            <h3 className="mb-3">John Smith</h3>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                    <i className="far fa-star fa-sm text-warning"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Reviews