import React from "react";
import Helmet from "react-helmet";
import Service from "../Service";
import PropTypes from "prop-types";

const ServicePageTemplate = ({
  title,
  meta_title,
  meta_description,
  service,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h2 className="has-text-weight-semibold is-size-2">
                  {service.heading}
                </h2>
                <p className="is-size-5 mb-5">{service.description}</p>
                <Service data={service.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ServicePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  service: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    services: PropTypes.array,
  }),
};

export default ServicePageTemplate;
