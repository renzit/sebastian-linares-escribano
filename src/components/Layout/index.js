import React, { Component } from "react";
import Helmet from "react-helmet";
import "../../assets/sass/styles.sass";
import config from "../../../config";
import NavBar from "../NavBar";
import Footer from "../Footer";
import FA from 'react-fontawesome';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div id="layout-wrapper">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
          <script async={true} defer={true} crossOrigin="anonymous" nonce="NjSrdKsg" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v7.0&appId=691458164299766&autoLogAppEvents=1" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <NavBar
          isActive={this.state.isActive}
          toggleNavbar={() => this.toggleNavbar()}
        />
        <div id="content-wrapper">{this.props.children}</div>
        <a
          href="https://api.whatsapp.com/send?phone=59899300738&text=Hola%20Escribano%21%20Quisiera%20consultar%20sobre...%20"
          className="float"
          target="_blank"
        >
          <FA name='whatsapp' />
        </a>
        <Footer />
      </div>
    );
  }
}

export default Layout;
