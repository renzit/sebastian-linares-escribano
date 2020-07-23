import React from "react";
import Content from "../Content";
import PropTypes from "prop-types";
import './styles.sass';

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="hero is-bold is-medium header-image-about">
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
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
