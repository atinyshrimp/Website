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
	border-radius: calc(var(--card-border-radius) / 2);
	overflow: hidden;
	cursor: pointer;
	background-color: #0d1117;
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
		border-image: ${({ rarity, cardType }) => {
			const primaryColor = (() => {
				switch (rarity) {
					case CardRarity.LEGENDARY:
						return "#f1c40f";
					case CardRarity.EPIC:
						return "#9b59b6";
					case CardRarity.RARE:
						return "#3498db";
					default:
						return "#6e7271";
				}
			})();

			const secondaryColor = (() => {
				switch (cardType) {
					case CardTypeEnum.PROJECT:
						return "#2ecc71";
					case CardTypeEnum.SKILL:
						return "#e74c3c";
					case CardTypeEnum.EXPERIENCE:
						return "#56ccf2";
					default:
						return "#3498db";
				}
			})();

			return `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) 1`;
		}};
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
			rgba(32, 202, 255, 0.06) 2px,
			rgba(32, 202, 255, 0.06) 3px
		);
		pointer-events: none;
		z-index: 7;
		opacity: 0.3;
	}

	/* Apply different highlight effect when the card is selected or in deck */
	${({ isSelected, isInDeck, cardType }) =>
		(isSelected || isInDeck) &&
		`
    box-shadow: 0 0 25px ${
			isInDeck
				? "rgba(86, 204, 242, 0.6)"
				: cardType === CardTypeEnum.PROJECT
				? "rgba(46, 204, 113, 0.6)"
				: cardType === CardTypeEnum.SKILL
				? "rgba(231, 76, 60, 0.6)"
				: "rgba(52, 152, 219, 0.6)"
		};
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
			rgba(231, 76, 60, 0.2),
			rgba(86, 204, 242, 0.2)
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
		background: linear-gradient(to top, #0d1117, transparent);
		z-index: 3;
	}
`;

const CardContent = styled.div`
	padding: var(--spacing-sm);
	height: 45%;
	display: flex;
	flex-direction: column;
	position: relative;
	background: linear-gradient(180deg, #0d1117 0%, #121824 100%);
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
`;

const CardRarityBadge = styled.div<{ rarity: CardRarity }>`
	position: absolute;
	top: 10px;
	left: 10px;
	width: 24px;
	height: 24px;
	clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.7rem;
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
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const CardStats = styled.div`
	display: flex;
	justify-content: center;
	gap: var(--spacing-xs);
	margin-top: auto;
	padding: 5px;
	background: rgba(0, 0, 0, 0.3);
	border-top: 1px solid rgba(46, 204, 113, 0.3);
	border-bottom: 1px solid rgba(86, 204, 242, 0.3);
`;

const StatItem = styled.div<{ type: string }>`
	display: flex;
	align-items: center;
	gap: 3px;
	font-size: 0.7rem;
	color: ${({ type }) => {
		switch (type) {
			case "power":
				return "#e74c3c";
			case "value":
				return "#2ecc71";
			case "time":
				return "#56ccf2";
			default:
				return "var(--color-text-secondary)";
		}
	}};
	font-weight: 600;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
`;

const StatIcon = styled.span`
	font-size: 0.75rem;
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
