import React, { Component } from "react";
import Helmet from "react-helmet";
import "../../assets/sass/styles.sass";
import config from "../../../config";
import NavBar from "../NavBar";
import Footer from "../Footer";

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
        </Helmet>
        <NavBar
          isActive={this.state.isActive}
          toggleNavbar={() => this.toggleNavbar()}
        />
        <div id="content-wrapper">{this.props.children}</div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://api.whatsapp.com/send?phone=59899300738&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...%20"
          className="float"
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
        <Footer />
      </div>
    );
  }
}

export default Layout;
