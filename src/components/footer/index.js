import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { Heading } from '../typography';
import { colors, space } from '../../styles';
import { Container, Flex } from '../grid';

const FooterWrapper = styled.footer`
  background-color: ${colors.black};
  padding-bottom: ${space.x3};
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const navItem = css`
  color: ${colors.grey50};
  cursor: pointer;
  display: block;
  position: relative;

  &:hover {
    color: ${colors.grey500};
  }
`;

const NavItem = styled(Link)`
  ${navItem}
`;

const NavBarLogo = styled(Link)`
  ${navItem}
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FlexContainer>
        <Flex width="100%" justifyContent="center">
          <NavBarLogo to="/" title="home">
            <Heading variant="h3" color={colors.grey50}>
              J&D 26 . 02 . 21
            </Heading>
          </NavBarLogo>
        </Flex>
        <Flex mt="2rem" width={{ _: '80%', sm: '50%' }} justifyContent="space-around">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">Details</NavItem>
          <NavItem to="/products">Travel & Stay</NavItem>
        </Flex>
      </FlexContainer>
    </FooterWrapper>
  );
};

export { Footer };
