import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

import { colors, space } from '../../styles';
import { Container, Flex } from '../grid';
import { Heading } from '../typography';

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
          <NavItem to="/details">Details</NavItem>
          <NavItem to="/travel-and-stay">Travel & Stay</NavItem>
        </Flex>
      </FlexContainer>
    </FooterWrapper>
  );
};

export { Footer };
