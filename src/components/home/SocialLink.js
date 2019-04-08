import React from 'react';

const SocialLink = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-2 text-dark"
    >
      {props.children}
    </a>
  );
};

export default SocialLink;
