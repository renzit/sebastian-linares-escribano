import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline mt-3">
    {gridItems.map((item) => (
      <div
        key={item.image}
        className="column is-4  "
        style={{ borderRadius: "5px" }}
      >
        <div className="card">
        <div className="media py-6 px-3">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={item.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-6">{item.text}</p>
      </div>
    </div>
        </div>
      </div>
    ))}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Offerings;
