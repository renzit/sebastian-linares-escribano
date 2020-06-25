import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ServicePageTemplate from '../components/ServicePageTemplate'
import Layout from '../components/Layout'

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        service={frontmatter.service}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        service {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
