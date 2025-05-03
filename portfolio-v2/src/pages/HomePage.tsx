import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getFeaturedCards } from "../data/cardData";
import Card from "../components/Card";
import Footer from "../components/Footer";
const HeroSection = styled.div`
	text-align: center;
	padding: var(--spacing-xxl) 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	/* Cyberpunk scanline effect */
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
			rgba(32, 202, 255, 0.02) 2px,
			rgba(32, 202, 255, 0.02) 3px
		);
		pointer-events: none;
		z-index: 1;
		opacity: 0.3;
	}
`;

const HeroTitle = styled(motion.h1)`
	font-size: 4rem;
	margin-bottom: var(--spacing-md);
	position: relative;
	z-index: 2;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	text-shadow: 0 0 10px rgba(86, 204, 242, 0.5);

	.highlight {
		color: var(--color-accent);
		position: relative;

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 2px;
			background: var(--color-accent);
			box-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
		}
	}
`;

const HeroSubtitle = styled(motion.p)`
	font-size: 1.2rem;
	color: var(--color-text-secondary);
	max-width: 600px;
	margin: 0 auto var(--spacing-xl);
	line-height: 1.8;
	position: relative;
	z-index: 2;
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: var(--spacing-lg);
	margin-top: var(--spacing-xl);
	position: relative;
	z-index: 2;
`;

const PrimaryButton = styled(Link)`
	padding: var(--spacing-md) var(--spacing-lg);
	background-color: rgba(86, 204, 242, 0.2);
	color: var(--color-text-primary);
	border: 1px solid var(--color-accent);
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	position: relative;
	overflow: hidden;

	/* Clip path for cyberpunk button style */
	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - 8px),
		calc(100% - 8px) 100%,
		0 100%
	);

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 15px rgba(86, 204, 242, 0.4);
		background-color: rgba(86, 204, 242, 0.3);
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
			rgba(86, 204, 242, 0.2),
			transparent
		);
		transition: left 0.7s ease;
	}

	&:hover::before {
		left: 100%;
	}
`;

const SecondaryButton = styled(Link)`
	padding: var(--spacing-md) var(--spacing-lg);
	background-color: transparent;
	color: var(--color-text-primary);
	border: 1px solid var(--color-border);
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	position: relative;
	overflow: hidden;

	/* Clip path for cyberpunk button style */
	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - 8px),
		calc(100% - 8px) 100%,
		0 100%
	);

	&:hover {
		transform: translateY(-5px);
		border-color: var(--color-text-secondary);
		box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
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
			rgba(255, 255, 255, 0.1),
			transparent
		);
		transition: left 0.7s ease;
	}

	&:hover::before {
		left: 100%;
	}
`;

const FeaturedCardSection = styled.div`
	padding: var(--spacing-xl) 0;
	position: relative;
`;

const FeaturedCardsTitle = styled.h2`
	text-align: center;
	margin-bottom: var(--spacing-lg);
	font-size: 2rem;
	position: relative;
	display: inline-block;
	left: 50%;
	transform: translateX(-50%);
	text-transform: uppercase;
	letter-spacing: 0.05em;
	padding: 0 var(--spacing-md);

	/* Cyberpunk decoration */
	&::before,
	&::after {
		content: "//";
		color: var(--color-accent);
		margin: 0 var(--spacing-sm);
		opacity: 0.6;
	}

	.highlight {
		color: var(--color-accent);
		position: relative;

		&::after {
			content: "";
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			height: 2px;
			background: var(--color-accent);
		}
	}
`;

const CardContainer = styled.div`
	position: relative;
	border-radius: var(--radius-md);
	padding: var(--spacing-xl) var(--spacing-lg);
`;

const CardGrid = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: var(--spacing-xl);
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
`;

const HomePage: React.FC = () => (
	<>
		<HeroSection>
			<HeroTitle
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Welcome to my <span className="highlight">Portfolio</span>
			</HeroTitle>

			<HeroSubtitle
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				Explore my skills, projects, and experiences in an interactive
				card-based format inspired by collectible card games.
			</HeroSubtitle>

			<ButtonContainer>
				<PrimaryButton to="/collection">View Card Collection</PrimaryButton>
				<SecondaryButton to="/about">About this Project</SecondaryButton>
			</ButtonContainer>
		</HeroSection>

		<FeaturedCardSection>
			<FeaturedCardsTitle>
				Featured <span className="highlight">Cards</span>
			</FeaturedCardsTitle>

			<CardContainer>
				<CardGrid>
					{getFeaturedCards().map((card) => (
						<Card key={card.id} card={card} />
					))}
				</CardGrid>
			</CardContainer>
		</FeaturedCardSection>

		<Footer />
	</>
);

export default HomePage;
