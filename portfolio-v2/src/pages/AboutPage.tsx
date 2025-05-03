import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { stats } from "../data/cardData";

const PageContainer = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: var(--spacing-xl);
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const PageTitle = styled(motion.h1)`
	font-size: 2.5rem;
	margin-bottom: var(--spacing-lg);
	text-align: center;
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

const Section = styled.section`
	margin-bottom: var(--spacing-xl);
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

const SectionTitle = styled.h2`
	font-size: 1.8rem;
	margin-bottom: var(--spacing-md);
	color: var(--color-text-primary);
	position: relative;
	display: inline-block;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	z-index: 2;

	&::before {
		content: ">>";
		color: var(--color-accent);
		margin-right: var(--spacing-xs);
		font-size: 1.2rem;
		opacity: 0.8;
	}

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 3px;
		background: linear-gradient(to right, var(--color-accent), transparent);
		margin-top: var(--spacing-sm);
	}
`;

const Paragraph = styled.p`
	font-size: 1.1rem;
	color: var(--color-text-secondary);
	line-height: 1.8;
	margin-bottom: var(--spacing-md);
	position: relative;
	z-index: 2;
`;

const CardExplanation = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-xl);
	margin: var(--spacing-lg) 0;
	position: relative;
	z-index: 2;
`;

const CardType = styled.div`
	flex: 1;
	min-width: 220px;
	background-color: rgba(0, 0, 0, 0.3);
	padding: var(--spacing-lg);
	position: relative;
	overflow: hidden;
	border: 1px solid transparent;
	border-image: linear-gradient(to bottom, ${({ color }) => color}, transparent)
		1;
	border-top: 3px solid ${({ color }) => color};

	/* Cyberpunk angular corner */
	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - 15px),
		calc(100% - 15px) 100%,
		0 100%
	);

	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ color }) => color};
		opacity: 0.05;
		z-index: -1;
	}
`;

const CardTypeTitle = styled.h3`
	font-size: 1.3rem;
	margin-bottom: var(--spacing-sm);
	color: var(--color-text-primary);
	text-transform: uppercase;
	letter-spacing: 0.05em;
`;

const CardTypeDescription = styled.p`
	font-size: 1rem;
	color: var(--color-text-secondary);
	line-height: 1.6;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: var(--spacing-lg);
	margin-top: var(--spacing-xxl);
	margin-bottom: var(--spacing-xxl);
	position: relative;
	z-index: 2;
`;

const CTAButton = styled(Link)`
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

const FeatureList = styled.ul`
	list-style: none;
	padding: 0;
	margin: var(--spacing-md) 0;
	position: relative;
	z-index: 2;
`;

const FeatureItem = styled.li<{ icon?: string }>`
	margin-bottom: var(--spacing-sm);
	padding-left: var(--spacing-lg);
	position: relative;
	font-size: 1.05rem;
	color: var(--color-text-secondary);
	line-height: 1.6;

	&::before {
		content: "${(props) => props.icon ?? ">"}";
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-weight: bold;
	}

	strong {
		color: var(--color-text-primary);
	}
`;

const AboutPage: React.FC = () => {
	return (
		<>
			<PageContainer>
				<PageTitle
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					About the <span className="highlight">Card Portfolio</span>
				</PageTitle>

				<Section>
					<SectionTitle>The Concept</SectionTitle>
					<Paragraph>
						Welcome to the portfolio card game! This project reimagines the
						traditional portfolio website as an interactive card collection,
						inspired by popular card games like Hearthstone and Legends of
						Runeterra.
					</Paragraph>
					<Paragraph>
						Instead of scrolling through static pages, you can explore my
						skills, projects, and experiences as collectible cards that you can
						browse, filter, and add to your own personal deck. This approach
						creates a more engaging and personalized way to learn about my work
						and background.
					</Paragraph>
				</Section>

				<Section>
					<SectionTitle>How It Works</SectionTitle>
					<Paragraph>
						Each card represents a different aspect of my professional profile.
						Browse through the collection, click on cards to view detailed
						information, and add your favorites to your deck to create your own
						personalized view of my portfolio.
					</Paragraph>

					<CardExplanation>
						<CardType color="var(--color-project)">
							<CardTypeTitle>Project Cards</CardTypeTitle>
							<CardTypeDescription>
								These cards showcase the notable projects I've worked on,
								including technologies used, my role, and key outcomes.
							</CardTypeDescription>
						</CardType>

						<CardType color="var(--color-skill)">
							<CardTypeTitle>Skill Cards</CardTypeTitle>
							<CardTypeDescription>
								These cards represent my technical and professional skills,
								including proficiency levels and years of experience.
							</CardTypeDescription>
						</CardType>

						<CardType color="var(--color-experience)">
							<CardTypeTitle>Experience Cards</CardTypeTitle>
							<CardTypeDescription>
								These cards highlight my professional experience, including
								positions held, companies, and key achievements.
							</CardTypeDescription>
						</CardType>
					</CardExplanation>

					<Paragraph>
						Moreover, each card type has its own unique stats and attributes,
						allowing you to evaluate my skills and experiences in a fun and
						interactive way. You can filter cards by type, tag, or even
						combination, making it easy to find what you're looking for.
					</Paragraph>

					<CardExplanation>
						<CardType color="var(--color-project)">
							<CardTypeTitle>Project Stats</CardTypeTitle>
							<CardTypeDescription>
								<FeatureList>
									{Object.entries(stats).map(
										([key, value]) =>
											["creativity", "impact", "difficulty"].includes(key) && (
												<FeatureItem key={key} icon={value.icon}>
													<strong>{value.label}</strong>: {value.description}
												</FeatureItem>
											)
									)}
								</FeatureList>
							</CardTypeDescription>
						</CardType>

						<CardType color="var(--color-skill)">
							<CardTypeTitle>Skill Stats</CardTypeTitle>
							<CardTypeDescription>
								<FeatureList>
									{Object.entries(stats).map(
										([key, value]) =>
											["mastery", "usageFrequency", "comboPower"].includes(
												key
											) && (
												<FeatureItem key={key} icon={value.icon}>
													<strong>{value.label}</strong>: {value.description}
												</FeatureItem>
											)
									)}
								</FeatureList>
							</CardTypeDescription>
						</CardType>

						<CardType color="var(--color-experience)">
							<CardTypeTitle>Experience Stats</CardTypeTitle>
							<CardTypeDescription>
								<FeatureList>
									{Object.entries(stats).map(
										([key, value]) =>
											["collaboration", "impact", "growth"].includes(key) && (
												<FeatureItem key={key} icon={value.icon}>
													<strong>{value.label}</strong>: {value.description}
												</FeatureItem>
											)
									)}
								</FeatureList>
							</CardTypeDescription>
						</CardType>
					</CardExplanation>
				</Section>

				<Section>
					<SectionTitle>Why a Card Game?</SectionTitle>
					<Paragraph>
						I created this portfolio format because I wanted to offer a more
						interactive and engaging way to present my work. The card game
						metaphor allows you to actively explore and discover different
						aspects of my skills and experience, rather than simply reading a
						chronological resume or portfolio.
					</Paragraph>
					<Paragraph>
						Just as in card games where players build decks that reflect their
						play style and strategy, you can build a "deck" of my skills and
						experiences that resonates with what you're looking for. It
						transforms the portfolio viewing experience from passive consumption
						to active exploration.
					</Paragraph>
				</Section>

				<Section>
					<SectionTitle>The Technology</SectionTitle>
					<Paragraph>
						This portfolio is built with React, TypeScript, Styled Components,
						and Framer Motion. I focused on creating smooth animations and
						transitions to enhance the card game feel while maintaining
						accessibility and performance.
					</Paragraph>
					<Paragraph>
						The cyberpunk styling is achieved through carefully crafted CSS
						using features like clip-path, linear-gradients, and
						pseudo-elements. The carousel component leverages Framer Motion's
						powerful animation capabilities to provide a seamless browsing
						experience.
					</Paragraph>
				</Section>

				<ButtonContainer>
					<CTAButton to="/collection">Explore the Collection</CTAButton>
					<SecondaryButton to="/">Back to Home</SecondaryButton>
				</ButtonContainer>
			</PageContainer>
			<Footer />
		</>
	);
};

export default AboutPage;
