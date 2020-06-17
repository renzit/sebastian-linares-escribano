import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div
        key={item.image}
        className="column is-4"
        style={{ borderRadius: "5px" }}
      >
        <section className="section">
          <div className="card bm--card-equal-height">
            <div className="card-content">
              <div className="media">
                <div class="media-left">
                  <figure className="image is-48x48">
                    <img src={item.image} alt="Placeholder image" />
                  </figure>
                </div>

                <div className="media-content">
                  <p className="title is-6">{item.text}</p>
                  <p className="subtitle is-6">{item.text}</p>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <a href="#">Saber más</a>
                </span>
              </p>
            </footer>
          </div>
          {/* <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <p>{item.text}</p> */}
        </section>
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
