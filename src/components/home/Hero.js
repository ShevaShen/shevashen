import React from 'react';
import SocialLink from './SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const Hero = props => {
  const { title, heading, description } = props;

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <h5 className="text-uppercase font-weight-normal ls text-white bg-dark p-1 rounded d-inline-block">
          {heading}
        </h5>
      </div>
      <div className="overflow-hidden">
        <h1 className="display-3 fs-4 fs-sm-5">
          <span className="text-underline">Sheva</span>
          <br />
          <span className="font-weight-light">Shen</span>
        </h1>
      </div>
      <div className="overflow-hidden w-100 w-md-50">
        <p className="text-900 fs-0 mt-3 mt-md-5">{description}</p>
      </div>
      <div className="overflow-hidden">
        <div className="d-lg-flex align-items-center font-weight-bold ls mt-3 mt-md-5 text-uppercase">
          <h6 className="mb-lg-0 mr-3">Follow Me:</h6>
          <div className="overflow-hidden">
            <SocialLink link="https://www.linkedin.com/in/shevashen/">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>

            <SocialLink link="https://github.com/ShevaShen">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink link="https://www.instagram.com/shevashen/">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
