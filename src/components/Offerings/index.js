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
          <div class="card">
            <div class="card-image">
              <figure className="image is-4by3">
                <img src={item.image} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <p>
              {item.text}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
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
