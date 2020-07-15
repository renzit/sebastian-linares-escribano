import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import { Link } from "gatsby";
import { ContactForm } from "../forms";
import PropTypes from "prop-types";
import FA from 'react-fontawesome';
import './styles.sass';

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-bold is-medium header-image">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title has-text-white">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-light">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div>
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                  <br/>
                  <p>Los trabajos más solicitados suelen ser los siguientes:</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                {/* <h2 className='has-text-weight-semibold is-size-2'>Testimonios</h2>
                <Testimonials testimonials={testimonials} /> */}
                <div className="buttons is-centered">
                  <Link className="button is-primary my-4" to="/servicios">
                    Saber más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section contact-image">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  ¿ Tenés una consulta ?
                </h3>
                <ContactForm />
              </div>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">Contacto</h3>
                <a className="contact-social-icons label" href="https://goo.gl/maps/qcHXBdduCkg5zrzJ6" target="_blank">📍Zabala 1379/501</a>
                <a className="contact-social-icons label" href="https://goo.gl/maps/SStaP5671dV8NLqF8" target="_blank">📍Dr. Elias Regules 5077 </a>
                <a className="contact-social-icons label" href="https://www.facebook.com/sebastianlinaresmayer" target="_blank">
                    <FA name='check-circle' className="pr-1 fa fa-facebook"/>Facebook
                </a>
                <a className="contact-social-icons label" href="https://www.linkedin.com/in/sebasti%C3%A1n-linares-mayer-72a965171/" target="_blank">
                <FA name='check-circle' className="pr-1 fa fa-linkedin"/>Linkedin
                </a>
                <a className="contact-social-icons label" href="https://www.instagram.com/esclinaresmayer/" target="_blank">
                <FA name='check-circle' className="pr-1 fa fa-instagram"/>Instagram
                  </a>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

export default HomePageTemplate;
