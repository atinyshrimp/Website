import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Define the tabs available in the sidebar
type TabType = "decks" | "cards";

interface CollectionLayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  hideSidebar?: boolean;
}

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
  background-color: var(--color-bg-primary);
  background-image: linear-gradient(
    to bottom,
    rgba(22, 28, 36, 0.9),
    rgba(13, 17, 23, 0.9)
  );
`;

const Header = styled.header`
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
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

const Sidebar = styled.div<{ hidden?: boolean }>`
  grid-area: sidebar;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: 1px solid var(--color-border);
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  flex-direction: column;
  padding: var(--spacing-md) 0;
`;

const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--spacing-md);
  background-color: ${({ active }) =>
    active ? "rgba(86, 204, 242, 0.2)" : "transparent"};
  border: none;
  border-left: 4px solid
    ${({ active }) => (active ? "var(--color-accent)" : "transparent")};
  color: ${({ active }) =>
    active ? "var(--color-text-primary)" : "var(--color-text-secondary)"};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(86, 204, 242, 0.1);
    color: var(--color-text-primary);
  }
`;

const MainContent = styled.main<{ fullWidth?: boolean }>`
  grid-area: ${({ fullWidth }) =>
    fullWidth ? "sidebar / span 2" : "main-content"};
  overflow-y: auto;
  padding: var(--spacing-lg);
  position: relative;
`;

const DrawerOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
`;

const DrawerContent = styled(motion.div)`
  position: relative;
  width: 450px;
  height: 100%;
  overflow-y: auto;
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-lg);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
  border-left: 1px solid var(--color-border);
`;

interface ModalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalDrawer: React.FC<ModalDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DrawerOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <DrawerContent
            initial={{ x: 450, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 450, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </DrawerContent>
        </DrawerOverlay>
      )}
    </AnimatePresence>
  );
};

const CollectionLayout: React.FC<CollectionLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
  hideSidebar = false,
}) => {
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
          <NavTab to="/collection" active={true}>
            Collection
          </NavTab>
          <NavTab to="/about" active={false}>
            About
          </NavTab>
        </NavTabs>
      </Header>

      <Sidebar hidden={hideSidebar}>
        <TabButton
          active={activeTab === "decks"}
          onClick={() => onTabChange("decks")}
        >
          Decks
        </TabButton>
        <TabButton
          active={activeTab === "cards"}
          onClick={() => onTabChange("cards")}
        >
          Cards
        </TabButton>
      </Sidebar>

      <MainContent fullWidth={hideSidebar}>{children}</MainContent>
    </LayoutContainer>
  );
};

export { CollectionLayout, ModalDrawer };
export type { TabType };
