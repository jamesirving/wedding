import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { headingStyles, headingVariants, bodyVariants } from '../typography';

const BaseStyles = createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: top;
  }

  svg {
    display: inline-block;
    vertical-align: top;
  }

  ${'' /* Generate the default global text styles using heading/text variants */}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headingStyles};
  }

  h1 {
    ${props => headingVariants({ ...props, variant: 'h1' })}
  }

  h2 {
    ${props => headingVariants({ ...props, variant: 'h2' })}
  }

  h3 {
    ${props => headingVariants({ ...props, variant: 'h3' })}
  }
  h4 {
    ${props => bodyVariants({ ...props, variant: 'Body1' })}
    text-transform: uppercase;
    font-weight: bold;
  }

  body {
    ${props => bodyVariants({ ...props, variant: 'Body1' })}
  }
`;

export { BaseStyles };
