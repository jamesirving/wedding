
import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ className, linkType, url, children }) => {
  if (linkType === "internal") {
    return (
      <GatsbyLink className={className} to={url}>
        {children}
      </GatsbyLink>
    );
  } else {
    return (
      <a className={className} href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};

Link.propTypes = {
  linkType: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
};

export { Link };