const space = [0, '1rem', '2rem', '3rem', '4rem'];

/**
 * Aliases for space, we need to keep the above structure
 * as well for Styled System's array props
 */
/* eslint-disable prefer-destructuring */

space.x0 = "0.5rem"; // .5rem
space.x1 = space[1]; // 1rem
space.x01 = "1.5rem"; // 1.5rem
space.x2 = space[2]; // 2rem
space.x02 = "2.5rem"; // 2.5rem
space.x3 = space[3]; // 3rem
space.x4 = space[4]; // 4rem

export { space };