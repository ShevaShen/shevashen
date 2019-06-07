import React from 'react';
import { Link } from 'gatsby';
import PlaceholderImg from '../../../static/img/portfolio-placeholder.jpg';

const PortfolioItem = props => {
  return (
    <div>
      Some quick PortfolioItem text to build on the card title and make up the
      bulk of the card's content.
      <button size="sm" outline className="mb-2">
        Learn More
      </button>
    </div>
  );
};

export default PortfolioItem;
