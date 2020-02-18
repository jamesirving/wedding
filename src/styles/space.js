const space = [0, '0.5rem', '1rem', '1.5rem', '2rem', '2.5rem', '3rem', '4rem'];

/**
 * Aliases for space, we need to keep the above structure
 * as well for Styled System's array props
 */
/* eslint-disable prefer-destructuring */

space.x0 = space[1]; // .5rem
space.x1 = space[2]; // 1rem
space.x01 = space[3]; // 1.5rem
space.x2 = space[4]; // 2rem
space.x02 = space[5]; // 2.5rem
space.x3 = space[6]; // 3rem
space.x4 = space[7]; // 4rem

export { space };