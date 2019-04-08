import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioPageTemplate } from '../../templates/portfolio-page';

const PortfolioPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PortfolioPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default PortfolioPagePreview;
