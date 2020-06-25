import React from 'react'
import PropTypes from 'prop-types'
import ServicePageTemplate from '../../components/ServicePageTemplate'

const ServicePagePreivew = ({ entry, getAsset }) => {
  const entryServicePlans = entry.getIn(['data', 'service', 'plans'])
  const servicePlans = entryServicePlans ? entryServicePlans.toJS() : []

  return (
    <ServicePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      service={{
        heading: entry.getIn(['data', 'service', 'heading']),
        description: entry.getIn(['data', 'service', 'description']),
        plans: servicePlans,
      }}
    />
  )
}

ServicePagePreivew.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicePagePreivew
