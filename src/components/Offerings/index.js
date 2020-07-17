import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline mt-3">
    {gridItems.map((item) => (
      <div
        key={item.image}
        className="column is-4"
        style={{ borderRadius: "5px" }}
      >
          <div className="card">
            <div className="media pt-6 px-3">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={item.image} alt={item.text} />
                </figure>
              </div>
              <div className="media-content">
                <h3 className="title is-6 pt-1">{item.text}</h3>
              </div>
            </div>
            <footer class="card-footer">
            
              <a href={item.link} target="_blank" className="card-footer-item">Consultar</a>
            </footer>
          </div>
      </div>
    ))}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Offerings;
