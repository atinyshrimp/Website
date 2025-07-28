import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "./utils/responsive";

// import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import EditorPage from "./pages/EditorPage";

const OrientationWarning = () => (
  <div className="orientation-warning">
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    </div>
    <h2>Please Rotate Your Device</h2>
    <p>
      This experience is optimized for landscape mode to maintain game immersion
      consistency.
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router basename="/">
      <GlobalStyle />
      <OrientationWarning />
      <div className="app-content">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<GameLayout />}>
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/editor" element={<EditorPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main-content";
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  ${media.lg} {
    grid-template-columns: 180px 1fr;
  }

  ${media.md} {
    grid-template-columns: 160px 1fr;
    grid-template-rows: 50px 1fr;
  }

  ${media.sm} {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main-content";
  }
`;

const Header = styled.header`
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  z-index: 10;
  margin-top: 10px;

  ${media.lg} {
    padding: 0 var(--spacing-xxl);
  }

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

  ${media.sm} {
    padding: var(--spacing-sm) var(--spacing-md);
    margin-top: 5px;
    flex-wrap: wrap;
    justify-content: center;
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

  ${media.md} {
    font-size: 1.2rem;
  }

  ${media.sm} {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-xs);
  }
`;

const NavTabs = styled.div`
  display: flex;
  margin-left: var(--spacing-xl);
  gap: var(--spacing-md);
  height: 100%;

  ${media.md} {
    margin-left: var(--spacing-lg);
    gap: var(--spacing-sm);
  }

  ${media.sm} {
    margin-left: 0;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }
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

  ${media.md} {
    padding: 0 var(--spacing-md);
    font-size: 0.8rem;
  }

  ${media.sm} {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.75rem;
  }
`;

const GameLayout = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <LayoutContainer>
      <Header>
        <Logo to="/">
          Card<span>Portfolio</span>
        </Logo>
        <NavTabs>
          <NavTab to="/" active={false}>
            Home
          </NavTab>
          <NavTab to="/collection" active={isActive("/collection")}>
            Collection
          </NavTab>
          <NavTab to="/profile" active={isActive("/profile")}>
            Profile
          </NavTab>
          <NavTab to="/about" active={false}>
            About
          </NavTab>
        </NavTabs>
      </Header>

      <Outlet />
    </LayoutContainer>
  );
};

export default App;
