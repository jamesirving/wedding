import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Content };
