import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 50;
  z-index: 10;
`;

const Logo = styled(motion.div)`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  .highlight {
    color: var(--color-accent);
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    gap: var(--spacing-md);
  }
`;

const NavLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  padding: var(--spacing-xs) 0;

  &:hover,
  &.active {
    color: var(--color-text-primary);

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
  }
`;

const CardIcon = styled.span`
  display: inline-block;
  transform: rotate(-10deg);
  font-size: 1.8rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardIcon>🃏</CardIcon> Joyce <span className="highlight">Lapilus</span>
      </Logo>

      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Card Collection</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
