import React, { Component } from "react";
import {Link} from "react-scroll";
import logo from './img/logo.png'


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "";

    return (
<header className='header'>
      <nav className="navbar fixed-top navbar-inverse navbar-expand-lg navbar-dark navigation-wrap">
        <div className="container-fluid pop">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt='logo' width='70px' height='auto' />
          </Link>
          <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + show}>
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active" to="home">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="about">About</Link>
              <Link className="nav-item nav-link" to="menu">Menu</Link>
              <Link className="nav-item nav-link" to="reviews">Testimonial</Link>
              <Link className="nav-item nav-link" to="contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      </header>
    );
  }
}