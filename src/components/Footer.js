import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer className="text-center text-white">
                    <div className="container p-4 pb-1">
                        <section className="mb-4">
                            <a className='btn btn-outline btn-floating m-1' role='button'><i className="fab fa-facebook fa-2x"></i></a>
                            <a className='btn btn-outline btn-floating m-1' role='button'><i className="fab fa-instagram fa-2x" href=''></i></a>
                            <a className='btn btn-outline btn-floating m-1' role='button'><i className="fab fa-youtube fa-2x"></i></a>
                            <a className='btn btn-outline btn-floating m-1' role='button'><i className="fab fa-twitter fa-2x"></i></a>
                            <a className='btn btn-outline btn-floating m-1' role='button'><i className="fab fa-linkedin-in fa-2x"></i></a>
                        </section>
                    </div>
                    <div className="text-center p-3">
                        © 2020 Copyright:
                        <a className="text-white" href=""> POP'S.COM</a>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer