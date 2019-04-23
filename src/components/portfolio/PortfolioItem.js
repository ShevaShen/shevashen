import React from 'react';
import { Link } from 'gatsby';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import PlaceholderImg from '../../../static/img/portfolio-placeholder.jpg';

const PortfolioItem = props => {
  return (
    <div>
      <Card className="mb-5">
        <Link to="#">
          <CardImg top width="100%" src={PlaceholderImg} alt="Card image cap" />
        </Link>
        <CardBody className="p-3">
          <CardTitle className="text-serif text-1000 font-weight-bold mb-2">
            Card title
          </CardTitle>
          <CardText>
            Some quick PortfolioItem text to build on the card title and make up
            the bulk of the card's content.
          </CardText>
          <Link to="#">
            <Button color="dark" size="sm" outline className="mb-2">
              Learn More
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default PortfolioItem;
