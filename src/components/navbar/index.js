import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

import { breakpoints, colors, space, globalStyles } from '../../styles';
import { Button } from '../button';
import { Container, Flex, Box } from '../grid';
import { Heading } from '../typography';

const Nav = styled.nav`
  background-color: ${colors.white};
  position: relative;
  z-index: 30;

  @media (min-width: ${breakpoints.md}) {
    position: sticky;
    top: 0;
  }
`;

const Wrapper = styled(Container)`
  @media (min-width: ${breakpoints.md}) {
    align-items: center;
    display: flex;
    min-height: 5rem;
  }
`;

const NavBarLogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const NavBarMenu = styled.div`
  background-color: ${colors.white};
  display: block;
  height: 100vh;
  position: absolute;
  transform: translateX(${props => (props.isOpen ? '-1.5rem' : '-140%')});
  transition: all ${globalStyles.transitionSpeed} ${globalStyles.easing};
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    box-shadow: none;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    position: relative;
    transform: translateY(0);
  }
`;

const NavItems = styled(Box)`
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const navItem = css`
  color: ${colors.grey800};
  cursor: pointer;
  display: block;
  position: relative;

  &:hover {
    color: ${colors.grey500};
  }
`;

const NavItem = styled(Link)`
  ${navItem}
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 20px;
  line-height: 1.5;
  margin-top: ${space.x2};
  padding: 0.5rem 0.75rem;

  @media (min-width: ${breakpoints.md}) {
    align-items: center;
    display: flex;
    font-size: 16px;
    margin-top: 0;
  }
`;

const NavBarLogo = styled(Link)`
  ${navItem}
`;

const StyledButton = styled(Button)`
  border-color: ${colors.black};
  justify-content: center;
  margin-top: ${space.x3};
  width: 100%;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    width: auto;
  }
`;

const Navbar = () => {
  const [navIsOpen, setNavState] = React.useState(false);
  const navRef = React.useRef(null);

  const toggleHamburger = () => {
    setNavState(!navIsOpen);
  };

  return (
    <Nav role="navigation" aria-label="main-navigation" ref={navRef}>
      <Wrapper>
        <NavBarLogoWrapper>
          <NavBarLogo to="/" title="home">
            <Heading variant="h3">J&D 26 . 02 . 21</Heading>
          </NavBarLogo>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className={`navbar-burger burger ${navIsOpen ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </NavBarLogoWrapper>
        <NavBarMenu isOpen={navIsOpen}>
          <NavItems mr="1rem">
            <NavItem to="/details">Details</NavItem>
            <NavItem to="/travel-and-stay">Travel & Stay</NavItem>
          </NavItems>
          <Flex px=".75rem" justifyContent="center">
            <StyledButton url="/rsvp">rsvp</StyledButton>
          </Flex>
        </NavBarMenu>
      </Wrapper>
    </Nav>
  );
};

export { Navbar };
