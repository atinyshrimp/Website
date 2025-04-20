import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
    return (
        <Router basename="/">
            <GlobalStyle />
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<GameLayout />}>
                    <Route path="/collection" element={<CollectionPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

const GameLayout = () => {
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
        height: 100%;
    `;

    const NavTab = styled(Link)<{ active: boolean }>`
        display: flex;
        align-items: center;
        padding: 0 var(--spacing-lg);
        color: ${(props) =>
            props.active
                ? "var(--color-accent)"
                : "var(--color-text-secondary)"};
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
                    props.active
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)"};
            }
        }
    `;

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
