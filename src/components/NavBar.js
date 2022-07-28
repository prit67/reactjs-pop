import React,{Component} from 'react'
import logo from './img/logo.png'
import { Link } from 'react-scroll/modules'
export default class NavBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        navbar: false
      };
      this.toggleNavbar = this.toggleNavbar.bind(this);
    }
  
    toggleNavbar(){
      this.setState({ menu: !this.state.navbar })
    }
  
    render() {
  
    const show = (this.state.navbar) ? "show" : "" ;
    return (
        <>
            <header className='header'>
                <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-dark navigation-wrap" style={{ backgroundColor: 'black' }}>
                    <div className="container-fluid pop">
                        <Link className="navbar-brand logo" to="/">
                            <img src={logo} alt='logo' width='75px' height='auto' />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={ this.toggleNavbar }>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse " + show}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className='nav-link' to="home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="menu">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="reviews">Testimonials</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to="contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
}