import React from "react";
import PropTypes from "prop-types";
import FA from 'react-fontawesome';


const Service = ({ data }) => (
  <div className="columns is-multiline">
    {data.map((service) => (
      <div className="column is-half">
        <article className="panel is-primary">
          <p className="panel-heading"><FA name={service.icon} />  {service.plan}</p>
          {service.items.map((item) => (
          <a className="panel-block">
            <span className="panel-icon">
            <FA name='check-circle' /> 
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
      icon: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Service;
