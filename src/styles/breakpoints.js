
/**
 * Styled components breakpoints
 * Breakpoint variables for - https://styled-system.com/responsive-styles
 * https://github.com/styled-system/styled-system
 */

const breakpoints = ['0', '576px', '768px', '992px', '1415px'];

/* eslint-disable prefer-destructuring */
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
/* eslint-enable */

export { breakpoints };