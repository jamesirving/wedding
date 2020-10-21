import PropTypes from 'prop-types';
import React from 'react';

const Content = ({ children, className }) => (
  // eslint-disable-next-line react/no-danger
  <div className={className} dangerouslySetInnerHTML={{ __html: children }} />
);

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Content };
