import React from "react";
import PropTypes from "prop-types";

const Service = ({ data }) => (
  <div className="columns is-multiline">
    {data.map((service) => (
      <div className="column is-half">
        <article className="panel is-primary">
          <p className="panel-heading">{service.plan}</p>
          {service.items.map((item) => (
          <a className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            {item}
          </a>
          ))}
         
        </article>
      </div>
    ))}
  </div>
);

Service.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Service;
