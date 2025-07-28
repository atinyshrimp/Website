import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Define the tabs available in the sidebar
type TabType = "decks" | "cards";

interface CollectionLayoutProps {
	children: React.ReactNode;
	activeTab: TabType;
	onTabChange: (tab: TabType) => void;
	hideSidebar?: boolean;
}

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
		active ? "rgba(193, 86, 242, 0.2)" : "transparent"};
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
		background-color: rgba(193, 86, 242, 0.1);
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
	background-color: #0d1117;
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
						transition={{
							type: "spring",
							damping: 25,
							stiffness: 300,
						}}
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
		<>
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
		</>
	);
};

export { CollectionLayout, ModalDrawer };
export type { TabType };
