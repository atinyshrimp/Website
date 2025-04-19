import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  cardDetail?: React.ReactNode;
  deckPanel?: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 300px 1fr 350px;
  grid-template-areas:
    "header header header"
    "left-panel main-content right-panel";
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border);
`;

const Header = styled.header`
  grid-area: header;
  background-color: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  background-image: linear-gradient(
    to right,
    rgba(22, 28, 36, 0.8),
    rgba(13, 17, 23, 0.8)
  );
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  span {
    color: var(--color-accent);
  }
`;

const NavTabs = styled.div`
  display: flex;
  margin-left: var(--spacing-xl);
  gap: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  height: 100%;
`;

const NavTab = styled(Link)<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  color: ${(props) =>
    props.active ? "var(--color-accent)" : "var(--color-text-secondary)"};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) =>
      props.active ? "var(--color-accent)" : "transparent"};
  }

  &:hover {
    color: var(--color-text-primary);

    &::after {
      background-color: ${(props) =>
        props.active ? "var(--color-accent)" : "var(--color-text-secondary)"};
    }
  }
`;

const LeftPanel = styled.div`
  grid-area: left-panel;
  background-color: var(--color-panel-bg);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  padding: var(--spacing-md);
`;

const MainContent = styled.main`
  grid-area: main-content;
  overflow-y: auto;
  padding: var(--spacing-md);
  background-color: var(--color-bg-primary);
`;

const RightPanel = styled.div`
  grid-area: right-panel;
  background-color: var(--color-panel-bg);
  border-left: 1px solid var(--color-border);
  overflow-y: auto;
  padding: var(--spacing-md);
`;

const EmptyCardDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text-secondary);
  text-align: center;
  padding: var(--spacing-xl);

  h3 {
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  p {
    font-size: 0.9rem;
    max-width: 250px;
  }
`;

const CardIcon = styled.span`
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  display: inline-block;
  transform: rotate(-10deg);
`;

const Layout: React.FC<LayoutProps> = ({ children, cardDetail, deckPanel }) => {
  const location = useLocation();

  return (
    <LayoutContainer>
      <Header>
        <Logo to="/">
          Card<span>Portfolio</span>
        </Logo>
        <NavTabs>
          <NavTab to="/" active={location.pathname === "/"}>
            Home
          </NavTab>
          <NavTab to="/collection" active={location.pathname === "/collection"}>
            Collection
          </NavTab>
          <NavTab to="/about" active={location.pathname === "/about"}>
            About
          </NavTab>
        </NavTabs>
      </Header>

      <LeftPanel>
        {cardDetail || (
          <EmptyCardDetail>
            <CardIcon>🃏</CardIcon>
            <h3>Card Details</h3>
            <p>Select a card from the collection to view its details.</p>
          </EmptyCardDetail>
        )}
      </LeftPanel>

      <MainContent>{children}</MainContent>

      <RightPanel>{deckPanel}</RightPanel>
    </LayoutContainer>
  );
};

export default Layout;
