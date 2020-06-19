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
        <div class="card">
        <div class="media py-6 px-3">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={item.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-6">{item.text}</p>
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
