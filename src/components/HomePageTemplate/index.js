import React from "react";
import Helmet from "react-helmet";
import Offerings from "../Offerings";
import { Link } from "gatsby";
import { ContactForm } from "../forms";
import PropTypes from "prop-types";

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
                </div>
                <Offerings gridItems={offerings.blurbs} />
                {/* <h2 className='has-text-weight-semibold is-size-2'>Testimonios</h2>
                <Testimonials testimonials={testimonials} /> */}
                <div className="buttons is-centered">
                  <Link className="button is-primary my-4" to="/servicios">
                    Ver todos los servicios
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
                <p>📍Zabala 1379/501</p>
                <p>📍Dr. Elias Regules 5777 </p>
                <p><a href="https://www.facebook.com/sebastianlinaresmayer">Facebook</a></p>
                <p><a href="https://www.linkedin.com/in/sebasti%C3%A1n-linares-mayer-72a965171/">Linkedin</a></p>
                <p><a href="https://www.instagram.com/esclinaresmayer/">Instagram</a></p>
                <p><a href="esclinaresmayer@gmail.com">Email</a></p>
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
