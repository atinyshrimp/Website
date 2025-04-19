import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Card as CardType,
  CardRarity,
  CardType as CardTypeEnum,
} from "../data/types";

interface CardProps {
  card: CardType;
  onClick?: () => void;
  isSelected?: boolean;
  isInDeck?: boolean;
}

const CardContainer = styled(motion.div)<{
  rarity: CardRarity;
  cardType: CardTypeEnum;
  isSelected?: boolean;
  isInDeck?: boolean;
}>`
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-bg-secondary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  /* Fantasy-style border based on rarity */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid
      ${({ rarity }) => {
        switch (rarity) {
          case CardRarity.COMMON:
            return "var(--color-common)";
          case CardRarity.RARE:
            return "var(--color-rare)";
          case CardRarity.EPIC:
            return "var(--color-epic)";
          case CardRarity.LEGENDARY:
            return "var(--color-legendary)";
          default:
            return "var(--color-common)";
        }
      }};
    border-radius: var(--card-border-radius);
    z-index: 5;
    box-shadow: 0 0 15px
      ${({ rarity }) => {
        switch (rarity) {
          case CardRarity.COMMON:
            return "rgba(110, 114, 113, 0)";
          case CardRarity.RARE:
            return "rgba(52, 152, 219, 0.3)";
          case CardRarity.EPIC:
            return "rgba(155, 89, 182, 0.4)";
          case CardRarity.LEGENDARY:
            return "rgba(241, 196, 15, 0.5)";
          default:
            return "rgba(110, 114, 113, 0)";
        }
      }};
    pointer-events: none;
  }

  /* Apply different highlight effect when the card is selected or in deck */
  ${({ isSelected, isInDeck, rarity }) =>
    (isSelected || isInDeck) &&
    `
    box-shadow: 0 0 20px ${
      isInDeck
        ? "rgba(86, 204, 242, 0.5)"
        : rarity === CardRarity.LEGENDARY
        ? "rgba(241, 196, 15, 0.5)"
        : rarity === CardRarity.EPIC
        ? "rgba(155, 89, 182, 0.5)"
        : rarity === CardRarity.RARE
        ? "rgba(52, 152, 219, 0.4)"
        : "rgba(255, 255, 255, 0.3)"
    };
    transform: translateY(-5px) scale(1.02);
    
    &::before {
      border-width: 2px;
      box-shadow: 0 0 20px ${
        isInDeck
          ? "rgba(86, 204, 242, 0.8)"
          : rarity === CardRarity.LEGENDARY
          ? "rgba(241, 196, 15, 0.8)"
          : rarity === CardRarity.EPIC
          ? "rgba(155, 89, 182, 0.8)"
          : rarity === CardRarity.RARE
          ? "rgba(52, 152, 219, 0.7)"
          : "rgba(255, 255, 255, 0.5)"
      };
    }
  `}
`;

const CardImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 55%;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "linear-gradient(to bottom, #2C3E50, #1A2530)"};
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: linear-gradient(to top, var(--color-bg-secondary), transparent);
  }
`;

const CardContent = styled.div`
  padding: var(--spacing-sm);
  height: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: none;
  letter-spacing: 0.02em;
`;

const CardDescription = styled.p`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardTypeTag = styled.div<{ cardType: CardTypeEnum }>`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: ${({ cardType }) => {
    switch (cardType) {
      case CardTypeEnum.PROJECT:
        return "var(--color-project)";
      case CardTypeEnum.SKILL:
        return "var(--color-skill)";
      case CardTypeEnum.EXPERIENCE:
        return "var(--color-experience)";
      default:
        return "var(--color-project)";
    }
  }};
  color: white;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardRarityBadge = styled.div<{ rarity: CardRarity }>`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
  color: white;
  z-index: 10;
  background-color: ${({ rarity }) => {
    switch (rarity) {
      case CardRarity.COMMON:
        return "var(--color-common)";
      case CardRarity.RARE:
        return "var(--color-rare)";
      case CardRarity.EPIC:
        return "var(--color-epic)";
      case CardRarity.LEGENDARY:
        return "var(--color-legendary)";
      default:
        return "var(--color-common)";
    }
  }};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CardStats = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  margin-top: auto;
`;

const StatItem = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.65rem;
  color: ${({ type }) => {
    switch (type) {
      case "power":
        return "var(--color-skill)";
      case "value":
        return "var(--color-project)";
      case "time":
        return "var(--color-experience)";
      default:
        return "var(--color-text-secondary)";
    }
  }};
  font-weight: 600;
`;

const StatIcon = styled.span`
  font-size: 0.7rem;
`;

const CardComponent: React.FC<CardProps> = ({
  card,
  onClick,
  isSelected,
  isInDeck,
}) => {
  // Get the first letter of rarity for the badge
  const getRarityLetter = (rarity: CardRarity): string => {
    return rarity.charAt(0).toUpperCase();
  };

  // Calculate mock stats based on card properties
  const getPowerStat = (): number => {
    if (card.type === CardTypeEnum.SKILL && card.skillDetails) {
      return card.skillDetails.proficiency * 15; // Scale proficiency to 0-75
    } else if (card.type === CardTypeEnum.PROJECT) {
      return 40 + Math.floor(Math.random() * 40); // Random value between 40-80
    } else {
      return 30 + Math.floor(Math.random() * 50); // Random value between 30-80
    }
  };

  const getTimeStat = (): number => {
    if (card.type === CardTypeEnum.SKILL && card.skillDetails) {
      return card.skillDetails.yearsOfExperience * 10; // 10 points per year
    } else if (
      card.type === CardTypeEnum.EXPERIENCE &&
      card.experienceDetails
    ) {
      // Approximate duration in years and multiply by 15
      const duration = card.experienceDetails.endDate === "Present" ? 2 : 1;
      return duration * 15;
    } else {
      return 10 + Math.floor(Math.random() * 50); // Random value between 10-60
    }
  };

  const getValueStat = (): number => {
    if (card.type === CardTypeEnum.PROJECT) {
      return 50 + Math.floor(Math.random() * 30); // Random value between 50-80
    } else if (card.type === CardTypeEnum.EXPERIENCE) {
      return 40 + Math.floor(Math.random() * 40); // Random value between 40-80
    } else {
      return 30 + Math.floor(Math.random() * 50); // Random value between 30-80
    }
  };

  // Calculate stats based on card properties to create the RPG feel
  const powerStat = getPowerStat();
  const timeStat = getTimeStat();
  const valueStat = getValueStat();

  return (
    <CardContainer
      rarity={card.rarity}
      cardType={card.type}
      isSelected={isSelected}
      isInDeck={isInDeck}
      onClick={onClick}
      whileHover={{
        translateY: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardRarityBadge rarity={card.rarity}>
        {getRarityLetter(card.rarity)}
      </CardRarityBadge>
      <CardTypeTag cardType={card.type}>{card.type}</CardTypeTag>
      <CardImage imageUrl={card.imageUrl} />
      <CardContent>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
        <CardStats>
          <StatItem type="power">
            <StatIcon>⚔️</StatIcon> {powerStat}
          </StatItem>
          <StatItem type="value">
            <StatIcon>💎</StatIcon> {valueStat}
          </StatItem>
          <StatItem type="time">
            <StatIcon>⏳</StatIcon> {timeStat}
          </StatItem>
        </CardStats>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;
