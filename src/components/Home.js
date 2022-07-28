import React from 'react'

export default function Home() {
  return (
    <>
    <div className="container-fluid px-0 top-banner" style={{ paddingTop: '100px' }} id='home'>
                    <div className="container" style={{
                        paddingTop: '150px',
                        boxSizing: 'content-box',
                        paddingBottom: '100px'
                    }}>
                        <div className="row">
                            <div className="col home">
                                <h1>Enjoy All Day Sunrise
                                    With All Day
                                    <span>Breakfast!!</span></h1>
                                <h2>Enjoy Pop's Combo Offer!</h2>
                                <p>Between 9:00 AM to 2:00 PM</p>
                                <div className="mt-4">
                                    <a className="btn btn-outline-light" href='#menu'>Order now  <i className='fas fa-basket-shopping'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
