import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Button } from './button';
import { Container, Flex, Box } from './grid';
import { breakpoints, colors, space, globalStyles } from '../styles';
import { H3 } from './type';

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
    display: flex;
  }
`;

const NavBarLogo = styled.div`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
  z-index: 2;
`;

const NavBarMenu = styled.div`
  background-color: ${colors.white};
  box-shadow: 0 8px 16px rgba(43, 37, 35, 0.1);
  display: block;
  height: 100vh;
  padding-top: ${space.x0};
  position: absolute;
  transform: translateX(${props => (props.isOpen ? '0' : '-140%')});
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

const NavItem = styled(Link)`
  color: ${colors.grey800};
  cursor: pointer;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  line-height: 1.5;
  margin-top: ${space.x2};
  padding: 0.5rem 0.75rem;
  position: relative;

  &:hover {
    color: ${colors.grey500};
  }

  @media (min-width: ${breakpoints.md}) {
    align-items: center;
    display: flex;
    margin-top: 0;
  }
`;

const StyledButton = styled(Button)`
  justify-content: center;
  margin-top: ${space.x3};
  width: 90%;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 0;
    width: auto;
  }
`;

const Navbar = () => {
  const [NavIsOpen, setNavState] = React.useState(false);

  const toggleHamburger = () => {
    setNavState(!NavIsOpen);
  };

  return (
    <Nav role="navigation" aria-label="main-navigation">
      <Wrapper>
        <NavBarLogo>
          <Link to="/" className="navbar-item" title="home">
            <H3>J&D 26 . 02 . 21</H3>
          </Link>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className={`navbar-burger burger ${NavIsOpen ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </NavBarLogo>
        <NavBarMenu isOpen={NavIsOpen}>
          <NavItems mr="1rem">
            <NavItem to="/details">Details</NavItem>
            <NavItem to="/travel&stay">Travel & Stay</NavItem>
          </NavItems>
          <Flex justifyContent="center">
            <StyledButton url="/rsvp" theme="dark">
              rsvp
            </StyledButton>
          </Flex>
        </NavBarMenu>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
