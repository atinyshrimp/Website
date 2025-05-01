import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FuturisticFrame from "../assets/avatar-frame.svg";
import { cards, decks } from "../data/cardData";
import { getCurrentLevel, getCurrentXP, getXPToNextLevel } from "../utils";

// Define prop types for styled components
interface ProgressBarProps {
	progress: string;
}

interface AchievementProps {
	unlocked: boolean;
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
	}

	.stat-label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-secondary);
		position: relative;
		z-index: 2;
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

const DeckPreview = styled(motion.div)`
	background: rgba(0, 0, 0, 0.3);
	border-radius: var(--radius-sm);
	padding: var(--spacing-sm);
	margin-bottom: var(--spacing-sm);
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--color-border);
	position: relative;
	overflow: hidden;

	&:hover {
		background: rgba(0, 0, 0, 0.4);
		border-color: var(--color-accent);
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
			rgba(86, 204, 242, 0.1),
			transparent
		);
		transition: left 0.5s ease;
	}

	&:hover::before {
		left: 100%;
	}

	.deck-info {
		flex: 1;
	}

	.deck-title {
		font-weight: bold;
		margin-bottom: 4px;
	}

	.deck-stats {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}

	.deck-action {
		color: var(--color-accent);
		font-size: 0.9rem;
		position: relative;

		&::after {
			content: "";
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 0;
			height: 1px;
			background: var(--color-accent);
			transition: width 0.3s ease;
		}

		&:hover::after {
			width: 100%;
		}
	}
`;

const ViewAllButton = styled(Link)`
	display: block;
	text-align: center;
	margin-top: var(--spacing-md);
	color: var(--color-accent);
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	position: relative;
	width: fit-content;
	margin: var(--spacing-md) auto 0;
	padding: var(--spacing-xs) var(--spacing-md);
	border: 1px solid rgba(86, 204, 242, 0.3);
	border-radius: var(--radius-sm);
	overflow: hidden;

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
		transition: left 0.5s ease;
	}

	&:hover {
		border-color: var(--color-accent);

		&::before {
			left: 100%;
		}
	}
`;

const RecentActivity = styled.div`
	font-size: 0.9rem;
	color: var(--color-text-secondary);

	p {
		margin-bottom: var(--spacing-xs);
		display: flex;
		align-items: center;
		line-height: 1.5;

		&::before {
			content: "•";
			margin-right: var(--spacing-xs);
			color: var(--color-accent);
		}
	}

	span {
		color: var(--color-text-primary);
		margin-right: var(--spacing-xs);
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

const ProfilePage: React.FC = () => {
	// Mock data - in a real app this would come from API/state
	const userData = {
		username: "CardMaster42",
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
		achievements: [
			{ id: 1, name: "First Win", icon: "🏆", unlocked: true },
			{ id: 2, name: "Collector", icon: "📚", unlocked: true },
			{ id: 3, name: "Strategist", icon: "🧠", unlocked: true },
			{ id: 4, name: "Deckbuilder", icon: "🛠️", unlocked: true },
			{ id: 5, name: "Champion", icon: "👑", unlocked: false },
			{ id: 6, name: "Legend", icon: "⭐", unlocked: false },
		],
		favoriteDecks: [
			{ id: 1, name: "Mystic Dragons", cards: 42, winRate: "78%" },
			{ id: 2, name: "Forest Spirits", cards: 40, winRate: "65%" },
			{ id: 3, name: "Elemental Mages", cards: 38, winRate: "59%" },
		],
	};

	return (
		<MainContent fullWidth>
			<PageTitle>
				Player <span className="highlight">Profile</span>
			</PageTitle>
			<PageDescription>
				View player stats, achievements, and favorite decks.
			</PageDescription>

			<ProfileContainer>
				<div>
					<ProfileCard>
						<AvatarFrame>
							<Avatar>
								<img src="https://avatars.githubusercontent.com/u/99140907?v=4&size=64" />
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
								whileHover={{
									y: -5,
									boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
								}}
								transition={{ duration: 0.2 }}
							>
								<div className="stat-value">{userData.stats.wins}</div>
								<div className="stat-label">Wins</div>
							</StatCard>
							<StatCard
								whileHover={{
									y: -5,
									boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
								}}
								transition={{ duration: 0.2 }}
							>
								<div className="stat-value">{cards.length}</div>
								<div className="stat-label">Cards</div>
							</StatCard>
							<StatCard
								whileHover={{
									y: -5,
									boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
								}}
								transition={{ duration: 0.2 }}
							>
								<div className="stat-value">{userData.stats.winRate}</div>
								<div className="stat-label">Win Rate</div>
							</StatCard>
							<StatCard
								whileHover={{
									y: -5,
									boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
								}}
								transition={{ duration: 0.2 }}
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
									key={achievement.id}
									unlocked={achievement.unlocked}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
								>
									<div className="achievement-icon">{achievement.icon}</div>
									<div className="achievement-name">{achievement.name}</div>
								</Achievement>
							))}
						</AchievementsList>
					</ProfileCard>
				</div>

				<div>
					<ProfileCard>
						<SectionTitle>Favorite Decks</SectionTitle>
						{userData.favoriteDecks.map((deck) => (
							<DeckPreview
								key={deck.id}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3 }}
							>
								<div className="deck-info">
									<div className="deck-title">{deck.name}</div>
									<div className="deck-stats">
										{deck.cards} cards • {deck.winRate} win rate
									</div>
								</div>
								<Link to={`/decks/${deck.id}`} className="deck-action">
									View →
								</Link>
							</DeckPreview>
						))}
						<ViewAllButton to="/collection">View All Decks</ViewAllButton>
					</ProfileCard>

					{/* Recent Activity Section */}
					<ProfileCard style={{ marginTop: "var(--spacing-md)" }}>
						<SectionTitle>Recent Activity</SectionTitle>
						<RecentActivity>
							<p>
								<span>Won a match</span> with "Mystic Dragons" deck&nbsp;
								<span className="time"> (3 hours ago)</span>
							</p>
							<p>
								<span>Added 5 new cards</span> to collection&nbsp;
								<span className="time"> (yesterday)</span>
							</p>
							<p>
								<span>Created new deck</span> "Elemental Mages"&nbsp;
								<span className="time"> (2 days ago)</span>
							</p>
							<p>
								<span>Unlocked "Strategist"</span> achievement&nbsp;
								<span className="time"> (3 days ago)</span>
							</p>
							<p>
								<span>Won 5 matches</span> in a row&nbsp;
								<span className="time"> (1 week ago)</span>
							</p>
						</RecentActivity>
					</ProfileCard>
				</div>
			</ProfileContainer>
		</MainContent>
	);
};

export default ProfilePage;
