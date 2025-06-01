import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FuturisticFrame from "../assets/avatar-frame.svg";
import AvatarImage from "../assets/avatar.webp";

import { cards, decks } from "../data/cardData";
import {
  achievements,
  getRecentActivities,
  interests,
} from "../data/profileData";
import {
  getCurrentLevel,
  getCurrentXP,
  getXPToNextLevel,
  getTimeSince,
} from "../utils";
import { media } from "../utils/responsive";

// Define prop types for styled components
interface ProgressBarProps {
  progress: string;
}

interface AchievementProps {
  unlocked: boolean;
}

interface FormFieldProps {
  valid?: boolean;
  error?: boolean;
}

const PageTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  color: var(--color-text-primary);

  .highlight {
    color: var(--color-accent);
    margin-left: 8px;
  }

  &::before {
    content: "🃏";
    margin-right: var(--spacing-md);
    font-size: 1.8rem;
  }
`;

const PageDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  max-width: 800px;

  .highlight {
    color: var(--color-accent);
    margin-left: 8px;
  }
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);
  overflow: hidden;

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 20px,
      calc(100% - 20px) 40px,
      100% 60px,
      100% 100%,
      0 100%,
      0 calc(100% - 20px),
      20px calc(100% - 40px),
      0 calc(100% - 60px)
    );
    z-index: 5;
    pointer-events: none;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.03) 2px,
      rgba(32, 202, 255, 0.03) 3px
    );
    pointer-events: none;
    z-index: 7;
    opacity: 0.3;
  }
`;

const AvatarFrame = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto var(--spacing-md);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  animation: glowPulse 3s infinite alternate;
  border-radius: 50%;

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 5px rgba(86, 204, 242, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(86, 204, 242, 0.8);
    }
  }
`;

const Avatar = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(231, 76, 60, 0.2),
      rgba(86, 204, 242, 0.2)
    );
    z-index: 3;
    pointer-events: none;
  }
`;

const Username = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, var(--color-accent), #56ccf2);
    margin: var(--spacing-xs) auto 0;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
  font-style: italic;
  position: relative;
  width: fit-content;
  margin: 0 auto var(--spacing-md);
  padding: 0 var(--spacing-sm);

  &::before,
  &::after {
    content: "//";
    margin: 0 var(--spacing-xs);
    opacity: 0.6;
  }
`;

const LevelContainer = styled.div`
  margin: var(--spacing-md) 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(86, 204, 242, 0.3),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(86, 204, 242, 0.3),
      transparent
    );
  }
`;

const LevelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`;

const ProgressBarContainer = styled.div`
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: var(--radius-sm);
  overflow: hidden;
  width: 100%;
  position: relative;
  border: 1px solid var(--color-border);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.1) 10px,
      rgba(0, 0, 0, 0.1) 20px
    );
    z-index: 1;
  }
`;

const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), #56ccf2);
  width: ${(props) => props.progress};
  transition: width 0.3s ease-in-out;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(3px);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  text-align: center;
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-text-primary);
    position: relative;
    z-index: 2;

    ${media.tabletLandscape} {
      font-size: 1rem;
    }
  }

  .stat-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    position: relative;
    z-index: 2;

    ${media.tabletLandscape} {
      font-size: 0.6rem;
    }
  }
`;

const MemberSince = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  position: relative;
  padding: var(--spacing-sm) 0;
  margin-top: var(--spacing-md);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border),
      transparent
    );
  }

  span {
    color: var(--color-accent);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: var(--spacing-md) 0 var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-primary);
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: ">";
    color: var(--color-accent);
    margin-right: var(--spacing-xs);
  }
`;

const AchievementsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: var(--spacing-sm);
`;

const Achievement = styled(motion.div)<AchievementProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .achievement-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: ${(props) =>
      props.unlocked ? "var(--color-accent)" : "rgba(0, 0, 0, 0.3)"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-xs);
    font-size: 1.5rem;
    color: ${(props) =>
      props.unlocked ? "white" : "var(--color-text-secondary)"};
    opacity: ${(props) => (props.unlocked ? "1" : "0.5")};
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    ${(props) =>
      props.unlocked &&
      `
			&::before {
				content: "";
				position: absolute;
				top: -10px;
				left: -10px;
				width: calc(100% + 20px);
				height: calc(100% + 20px);
				background: radial-gradient(circle, rgba(86, 204, 242, 0.3) 0%, transparent 70%);
				z-index: -1;
				animation: pulse 2s infinite;
			}
			
			@keyframes pulse {
				0% {
					transform: scale(0.8);
					opacity: 0.8;
				}
				50% {
					transform: scale(1.2);
					opacity: 0.3;
				}
				100% {
					transform: scale(0.8);
					opacity: 0.8;
				}
			}
		`}
  }

  .achievement-name {
    font-size: 0.7rem;
    text-align: center;
    color: ${(props) =>
      props.unlocked
        ? "var(--color-text-primary)"
        : "var(--color-text-secondary)"};
  }

  &:hover .achievement-icon {
    transform: ${(props) => (props.unlocked ? "translateY(-3px)" : "none")};
    box-shadow: ${(props) =>
      props.unlocked ? "0 5px 15px rgba(86, 204, 242, 0.4)" : "none"};
  }
`;

const InterestCard = styled(motion.div)<{ image?: string; alt?: string }>`
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-md);
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(86, 204, 242, 0.3);
  width: 15rem;
  height: 25rem;

  ${media.tabletLandscape} {
    width: 15rem;
    height: 15rem;
  }

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    z-index: 4;
    pointer-events: none;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.03) 2px,
      rgba(32, 202, 255, 0.03) 3px
    );
    pointer-events: none;
    z-index: 5;
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(86, 204, 242, 0.4);

    .card-overlay {
      background: rgba(0, 0, 0, 0.65);
    }

    .interest-badge {
      transform: translateY(-3px);
    }
  }

  .interest-icon {
    transition: transform 0.3s ease;
  }

  &:hover .interest-icon {
    transform: scale(1.2);
  }
`;

const RecentActivity = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  ${media.tabletLandscape} {
    font-size: 0.7rem;
  }

  p {
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;
    line-height: 1.5;

    &::before {
      content: "• ";
      margin-right: var(--spacing-xs);
      color: var(--color-accent);
    }
  }

  span {
    color: var(--color-text-primary);
    margin-left: var(--spacing-xs);
  }

  .time {
    font-style: italic;
    opacity: 0.7;
  }
`;

const MainContent = styled.main<{ fullWidth?: boolean }>`
  grid-area: ${({ fullWidth }) =>
    fullWidth ? "sidebar / span 2" : "main-content"};
  overflow-y: auto;
  padding: var(--spacing-xxl);
  position: relative;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(86, 204, 242, 0.3);

    &::after {
      transform: scale(2);
      opacity: 0;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

const ActionButton = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background: ${({ variant }) =>
    variant === "primary"
      ? "rgba(86, 204, 242, 0.2)"
      : "rgba(231, 76, 60, 0.2)"};
  border: 1px solid
    ${({ variant }) =>
      variant === "primary" ? "var(--color-accent)" : "var(--color-skill)"};
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.9rem;

  ${media.tabletLandscape} {
    font-size: 0.7rem;
  }

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );
  transition: all 0.3s ease;
  margin: var(--spacing-sm) 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary"
        ? "rgba(86, 204, 242, 0.3)"
        : "rgba(231, 76, 60, 0.3)"};
    box-shadow: 0 0 10px
      ${({ variant }) =>
        variant === "primary"
          ? "rgba(86, 204, 242, 0.3)"
          : "rgba(231, 76, 60, 0.3)"};
    transform: translateY(-2px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ variant }) =>
        variant === "primary"
          ? "rgba(86, 204, 242, 0.2)"
          : "rgba(231, 76, 60, 0.2)"},
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  background: #0d1117;
  width: 450px;
  max-width: 90%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  box-shadow: 0 0 30px rgba(86, 204, 242, 0.15);
  padding: var(--spacing-lg);
  max-height: 90vh;
  overflow-y: auto;

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 20px,
      calc(100% - 20px) 40px,
      100% 60px,
      100% 100%,
      0 100%,
      0 calc(100% - 20px),
      20px calc(100% - 40px),
      0 calc(100% - 60px)
    );
    pointer-events: none;
  }
`;

const ModalTitle = styled.h3`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding-bottom: var(--spacing-xs);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FormField = styled.div<FormFieldProps>`
  margin-bottom: var(--spacing-sm);
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
  }

  input,
  textarea {
    padding: var(--spacing-sm);
    border: 1px solid
      ${(props) =>
        props.error
          ? "var(--color-skill)"
          : props.valid
          ? "var(--color-project)"
          : "var(--color-border)"};
    border-radius: var(--radius-sm);
    background: rgba(0, 0, 0, 0.3);
    color: var(--color-text-primary);
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }

  .error-message {
    font-size: 0.8rem;
    color: var(--color-skill);
    margin-top: var(--spacing-xs);
  }
`;

const TextArea = styled.textarea<FormFieldProps>`
  min-height: 120px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: var(--spacing-md);
  background-color: rgba(86, 204, 242, 0.2);
  border: 1px solid var(--color-accent);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.9rem;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: var(--spacing-sm);

  &:hover {
    background-color: rgba(86, 204, 242, 0.3);
    box-shadow: 0 0 10px rgba(86, 204, 242, 0.3);
    transform: translateY(-2px);
  }
`;

const SocialPopover = styled(motion.div)`
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%) !important;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
  z-index: 50;
  min-width: 220px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    pointer-events: none;
  }

  /* Arrow pointing to button */
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-500%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: rgba(0, 0, 0, 0.8);
    border-left: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
  }
`;

const ProfilePage: React.FC = () => {
  // Mock data - in a real app this would come from API/state
  const userData = {
    username: "atinyshrimp",
    title: "Legendary Collector",
    avatar: "🧙",
    level: getCurrentLevel(),
    xp: getCurrentXP(),
    xpToNextLevel: getXPToNextLevel(),
    joinDate: "2003",
    stats: {
      wins: 127,
      losses: 187,
      cardsCollected: 481,
      decksCreated: 17,
      favoriteDeck: "Mystic Dragons",
      winRate: "64.7%",
    },
    achievements,
    favoriteDecks: [
      { id: 1, name: "Mystic Dragons", cards: 42, winRate: "78%" },
      { id: 2, name: "Forest Spirits", cards: 40, winRate: "65%" },
      { id: 3, name: "Elemental Mages", cards: 38, winRate: "59%" },
    ],
    recentActivity: [
      {
        id: 1,
        time: "2h ago",
        description: "Added a new card to Mystic Dragons deck",
      },
      {
        id: 2,
        time: "1d ago",
        description: "Won a match against ElitePlayer99",
      },
      {
        id: 3,
        time: "3d ago",
        description: "Unlocked the Collector achievement",
      },
    ],
  };

  const [showSocialPopover, setShowSocialPopover] = useState(false);
  const [showFriendRequestModal, setShowFriendRequestModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const guildButtonRef = useRef<HTMLButtonElement>(null);
  const socialPopoverRef = useRef<HTMLDivElement>(null);

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!contactForm.name.trim()) {
      errors.name = "Name is required";
    }

    if (!contactForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!contactForm.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // In a real application, you'd send this data to your backend
    alert("Message sent! I'll get back to you soon.");
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setShowFriendRequestModal(false);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        socialPopoverRef.current &&
        !socialPopoverRef.current.contains(event.target as Node) &&
        guildButtonRef.current &&
        !guildButtonRef.current.contains(event.target as Node)
      ) {
        setShowSocialPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MainContent fullWidth>
      <PageTitle>
        Player <span className="highlight">Profile</span>
      </PageTitle>
      <PageDescription>
        Server:<span className="highlight">World Z</span> | Region:
        <span className="highlight">Europe/Paris</span>
      </PageDescription>

      <ProfileContainer>
        <div>
          <ProfileCard>
            <AvatarFrame>
              <Avatar>
                <img src={AvatarImage} alt="Github Avatar" />
              </Avatar>
              <img
                src={FuturisticFrame}
                alt="Avatar Frame"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                  zIndex: 3,
                }}
              />
            </AvatarFrame>
            <Username>{userData.username}</Username>
            <Title>{userData.title}</Title>

            <ButtonContainer>
              <ActionButton
                ref={guildButtonRef}
                variant="primary"
                onClick={() => setShowSocialPopover(!showSocialPopover)}
              >
                Join Guild
              </ActionButton>

              {showSocialPopover && (
                <SocialPopover
                  ref={socialPopoverRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", duration: 0.3 }}
                >
                  <SocialButtonsContainer>
                    <SocialButton
                      href="https://www.linkedin.com/in/joyce-lapilus"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </SocialButton>
                    <SocialButton
                      href="https://github.com/atinyshrimp"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </SocialButton>
                    <SocialButton
                      href="https://atinyshrimp.itch.io"
                      target="_blank"
                      aria-label="Itch.io"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z" />
                      </svg>
                    </SocialButton>
                  </SocialButtonsContainer>
                </SocialPopover>
              )}

              <ActionButton
                variant="secondary"
                onClick={() => window.open("mailto:joyce.lapilus@gmail.com")}
              >
                Send Friend Request
              </ActionButton>
            </ButtonContainer>

            <LevelContainer>
              <LevelHeader>
                <span>Level {userData.level}</span>
                <span>
                  {userData.xp}/{userData.xpToNextLevel} XP
                </span>
              </LevelHeader>
              <div style={{ position: "relative" }}>
                <ProgressBarContainer>
                  <ProgressBar
                    progress={
                      (userData.xp / userData.xpToNextLevel) * 100 + "%"
                    }
                  />
                </ProgressBarContainer>
              </div>
            </LevelContainer>

            <StatsGrid>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="stat-value">{userData.stats.wins}</div>
                <div className="stat-label">Wins</div>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="stat-value">{cards.length}</div>
                <div className="stat-label">Cards</div>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="stat-value">{userData.stats.winRate}</div>
                <div className="stat-label">Win Rate</div>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="stat-value">{decks.length}</div>
                <div className="stat-label">Decks</div>
              </StatCard>
            </StatsGrid>

            <MemberSince>
              Member since <span>{userData.joinDate}</span>
            </MemberSince>
          </ProfileCard>

          <ProfileCard style={{ marginTop: "var(--spacing-md)" }}>
            <SectionTitle>Achievements</SectionTitle>
            <AchievementsList>
              {userData.achievements.map((achievement) => (
                <Achievement
                  key={achievement.slug}
                  unlocked={achievement.unlocked}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-tooltip-id="achievement"
                  data-tooltip-content={achievement.description}
                  data-tooltip-hidden={!achievement.unlocked}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-name">{achievement.title}</div>
                </Achievement>
              ))}
            </AchievementsList>
          </ProfileCard>
        </div>

        <div>
          <ProfileCard>
            <SectionTitle>Featured Items</SectionTitle>
            <Carousel
              items={interests.map((interest) => (
                <InterestCard
                  key={interest.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  image={interest.image}
                >
                  <div
                    className="card-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0,0,0,0.2)",
                      backgroundImage:
                        "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div
                    className="interest-badge"
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(86, 204, 242, 0.3)",
                      padding: "4px 12px",
                      borderRadius: "0",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      color: "#fff",
                      zIndex: 3,
                      letterSpacing: "0.5px",
                      clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                      boxShadow: "0 0 10px rgba(86, 204, 242, 0.4)",
                      border: "1px solid rgba(86, 204, 242, 0.7)",
                      backdropFilter: "blur(4px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {interest.highlight}
                  </div>

                  {/* glitch lines for more cyberpunk feel */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "0",
                      height: "1px",
                      width: "100%",
                      background: "rgba(86, 204, 242, 0.5)",
                      zIndex: 2,
                      opacity: 0.3,
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "0",
                      height: "2px",
                      width: "30%",
                      background: "rgba(86, 204, 242, 0.6)",
                      zIndex: 2,
                      opacity: 0.4,
                    }}
                  ></div>

                  {/* Interest details */}
                  <div
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        fontSize: media.tabletLandscape ? "1rem" : "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "0 0 10px rgba(86, 204, 242, 0.8)",
                        letterSpacing: "1px",
                        marginBottom: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      {interest.name}
                    </div>

                    <div
                      style={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: media.tabletLandscape ? "0.75rem" : "0.85rem",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                        borderLeft: "2px solid rgba(86, 204, 242, 0.7)",
                        paddingLeft: "8px",
                      }}
                    >
                      {interest.details}
                    </div>
                  </div>
                </InterestCard>
              ))}
              itemsPerPage={4}
            />
          </ProfileCard>

          <ProfileCard style={{ marginTop: "var(--spacing-md)" }}>
            <SectionTitle>Latest Updates</SectionTitle>
            <RecentActivity>
              {getRecentActivities().map((activity, index) => (
                <p key={index}>
                  {activity.description}
                  <span className="time">{`(${getTimeSince(
                    activity.timestamp
                  )})`}</span>
                </p>
              ))}
            </RecentActivity>
          </ProfileCard>
        </div>
      </ProfileContainer>

      {/* Friend Request Modal */}
      <AnimatePresence>
        {showFriendRequestModal && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFriendRequestModal(false)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <ModalCloseButton
                onClick={() => setShowFriendRequestModal(false)}
              >
                ×
              </ModalCloseButton>
              <ModalTitle>Send Friend Request</ModalTitle>

              <ContactForm onSubmit={handleSubmit}>
                <FormField error={!!formErrors.name}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    placeholder="Enter your name"
                  />
                  {formErrors.name && (
                    <div className="error-message">{formErrors.name}</div>
                  )}
                </FormField>

                <FormField error={!!formErrors.email}>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    placeholder="Enter your email"
                  />
                  {formErrors.email && (
                    <div className="error-message">{formErrors.email}</div>
                  )}
                </FormField>

                <FormField>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    placeholder="Enter subject"
                  />
                </FormField>

                <FormField error={!!formErrors.message}>
                  <label htmlFor="message">Message</label>
                  <TextArea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    placeholder="Enter your message"
                  />
                  {formErrors.message && (
                    <div className="error-message">{formErrors.message}</div>
                  )}
                </FormField>

                <SubmitButton type="submit">Send Request</SubmitButton>
              </ContactForm>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <Tooltip id="achievement" place="top" style={{ zIndex: 9999 }} />
      <Footer />
    </MainContent>
  );
};

export default ProfilePage;
