import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { media } from "../utils/responsive";

import { Card as CardType, CardType as CardTypeEnum } from "../data/types";
import { stats } from "../data/cardData";

interface CardProps {
  card: CardType;
  onClick?: () => void;
  isShiny?: boolean;
  isSelected?: boolean;
  isInDeck?: boolean;
}

const CardContainer = styled(motion.div)<{
  cardType: CardTypeEnum;
  isSelected?: boolean;
  isInDeck?: boolean;
}>`
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  min-height: 200px;
  border-radius: calc(var(--card-border-radius) / 2);
  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-bg-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: ${({ cardType }) => {
      const secondaryColor = (() => {
        switch (cardType) {
          case CardTypeEnum.PROJECT:
            return "var(--color-project)";
          case CardTypeEnum.SKILL:
            return "var(--color-skill)";
          case CardTypeEnum.EXPERIENCE:
            return "var(--color-experience)";
          default:
            return "#3498db";
        }
      })();

      return `linear-gradient(135deg, #3498db, ${secondaryColor}) 1`;
    }};
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
      rgba(32, 202, 255, 0.06) 2px,
      rgba(32, 202, 255, 0.06) 3px
    );
    pointer-events: none;
    z-index: 7;
    opacity: 0.3;
  }

  /* Apply different highlight effect when the card is selected or in deck */
  ${({ isSelected, isInDeck }) =>
    (isSelected || isInDeck) &&
    `
    box-shadow: 0 0 35px var(--color-highlight);
    transform: translateY(-5px) scale(1.02);
  `}
`;

const CardImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 55%;
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "linear-gradient(135deg, #1A1E2D, #0A0E19)"};
  background-size: cover;
  background-position: center;
  position: relative;

  /* Cyberpunk overlay gradient */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(148, 49, 38, 0.5),
      rgba(58, 136, 162, 0.5)
    );
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to top, var(--color-bg-primary), transparent);
    z-index: 3;
  }
`;

const CardContent = styled.div`
  padding: var(--spacing-sm);
  height: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, #121824 100%);
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
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${media.md} {
    font-size: 0.85rem;
  }

  ${media.sm} {
    font-size: 0.8rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${media.sm} {
    font-size: 0.65rem;
    -webkit-line-clamp: 1;
  }
`;

const CardTypeTag = styled.div<{ cardType: CardTypeEnum }>`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 8px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

  ${media.sm} {
    font-size: 0.6rem;
    padding: 2px 6px;
  }
`;

const CardStats = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: auto;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(46, 204, 113, 0.3);
  border-bottom: 1px solid rgba(86, 204, 242, 0.3);

  ${media.md} {
    gap: var(--spacing-sm);
  }
`;

const StatItem = styled.div<{ type: string }>`
	display: flex;
	align-items: center;
	gap: 3px;
	font-size: 0.7rem;
	color: var(--color-text-secondary)";
	font-weight: 600;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);

	${media.sm} {
		font-size: 0.65rem;
		gap: 2px;
	}
`;

const StatIcon = styled.span`
  font-size: 0.75rem;
`;

// Glitch line elements like in profile page
const GlitchLine1 = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(86, 204, 242, 0.5);
  z-index: 6;
  opacity: 0.3;
`;

const GlitchLine2 = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 2px;
  width: 30%;
  background: rgba(86, 204, 242, 0.6);
  z-index: 6;
  opacity: 0.4;
`;

const CardComponent: React.FC<CardProps> = ({
  card,
  onClick,
  isSelected,
  isInDeck,
  isShiny,
}) => {
  return (
    <>
      <CardContainer
        cardType={card.type}
        isSelected={isSelected}
        isInDeck={isInDeck}
        onClick={onClick}
        whileHover={{
          y: -5,
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={isShiny ? "foil" : ""}
      >
        <CardTypeTag cardType={card.type}>{card.type}</CardTypeTag>
        <CardImage imageUrl={card.imageUrl} />
        {/* Glitch lines */}
        <GlitchLine1 />
        <GlitchLine2 />
        <CardContent>
          <CardTitle>
            {card.isFeatured && "✦ "}
            {card.title}
          </CardTitle>
          <CardDescription>{card.description}</CardDescription>
          <CardStats>
            {Object.entries(card.stats).map(([key, value]) => (
              <StatItem
                key={key}
                data-tooltip-id={`stats-${card._id}`}
                data-tooltip-content={
                  stats[key as keyof typeof stats].description
                }
                type={key}
              >
                <StatIcon>{stats[key as keyof typeof stats].icon}</StatIcon>{" "}
                {value}
              </StatItem>
            ))}
          </CardStats>
        </CardContent>{" "}
      </CardContainer>
      {/* Tooltip for stats */}
      <Tooltip id={`stats-${card._id}`} place="top" style={{ zIndex: 9999 }} />
    </>
  );
};

export default CardComponent;
