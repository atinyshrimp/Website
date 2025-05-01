import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
	background: rgba(0, 0, 0, 0.6);
	border-radius: var(--border-radius);
	padding: var(--spacing-md);
	box-shadow: 0 4px 8px rgba(112, 23, 129, 0.15);
`;

const Avatar = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background: linear-gradient(135deg, #6e45e2, #88d3ce);
	margin: 0 auto var(--spacing-md);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: white;
	border: 4px solid var(--color-accent);

	object-fit: cover;
`;

const Username = styled.h2`
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: var(--spacing-sm);
	color: var(--color-text-primary);
`;

const Title = styled.div`
	text-align: center;
	font-size: 0.9rem;
	color: var(--color-accent);
	margin-bottom: var(--spacing-md);
	font-style: italic;
`;

const LevelContainer = styled.div`
	margin: var(--spacing-md) 0;
`;

const LevelHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: var(--spacing-xs);
	font-size: 0.9rem;
`;

const ProgressBarContainer = styled.div`
	height: 50px;
	background: var(--color-background-light);
	border-radius: 5px;
	overflow: hidden;
	width: 100%;
	position: relative;
`;

const ProgressBar = styled.div<ProgressBarProps>`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	background: linear-gradient(
		90deg,
		var(--color-accent),
		var(--color-accent-light)
	);
	width: ${(props) => props.progress};
	transition: width 0.3s ease-in-out;
`;

const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: var(--spacing-sm);
	margin: var(--spacing-md) 0;
`;

const StatCard = styled.div`
	background: var(--color-background-light);
	padding: var(--spacing-sm);
	border-radius: var(--border-radius);
	text-align: center;

	.stat-value {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--color-text-primary);
	}

	.stat-label {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}
`;

const SectionTitle = styled.h3`
	font-size: 1.2rem;
	margin: var(--spacing-md) 0 var(--spacing-sm);
	padding-bottom: var(--spacing-xs);
	border-bottom: 1px solid var(--color-border);
	color: var(--color-text-primary);
`;

const AchievementsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
	gap: var(--spacing-sm);
`;

// Fixed with proper prop typing
const Achievement = styled.div<AchievementProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	.achievement-icon {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: ${(props) =>
			props.unlocked ? "var(--color-accent)" : "var(--color-background-light)"};
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--spacing-xs);
		font-size: 1.5rem;
		color: ${(props) =>
			props.unlocked ? "white" : "var(--color-text-secondary)"};
		opacity: ${(props) => (props.unlocked ? "1" : "0.5")};
	}

	.achievement-name {
		font-size: 0.7rem;
		text-align: center;
		color: ${(props) =>
			props.unlocked
				? "var(--color-text-primary)"
				: "var(--color-text-secondary)"};
	}
`;

const DeckPreview = styled.div`
	background: var(--color-background-light);
	border-radius: var(--border-radius);
	padding: var(--spacing-sm);
	margin-bottom: var(--spacing-sm);
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:hover {
		background: var(--color-background-hover);
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
						<Avatar>
							<img src="https://avatars.githubusercontent.com/u/99140907?v=4&size=64" />
						</Avatar>
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
							<StatCard>
								<div className="stat-value">{userData.stats.wins}</div>
								<div className="stat-label">Wins</div>
							</StatCard>
							<StatCard>
								<div className="stat-value">{cards.length}</div>
								<div className="stat-label">Cards</div>
							</StatCard>
							<StatCard>
								<div className="stat-value">{userData.stats.winRate}</div>
								<div className="stat-label">Win Rate</div>
							</StatCard>
							<StatCard>
								<div className="stat-value">{decks.length}</div>
								<div className="stat-label">Decks</div>
							</StatCard>
						</StatsGrid>

						<div
							style={{
								textAlign: "center",
								fontSize: "0.8rem",
								color: "var(--color-text-secondary)",
							}}
						>
							Member since {userData.joinDate}
						</div>
					</ProfileCard>

					<ProfileCard style={{ marginTop: "var(--spacing-md)" }}>
						<SectionTitle>Achievements</SectionTitle>
						<AchievementsList>
							{userData.achievements.map((achievement) => (
								<Achievement
									key={achievement.id}
									unlocked={achievement.unlocked}
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
							<DeckPreview key={deck.id}>
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
						<div
							style={{
								textAlign: "center",
								marginTop: "var(--spacing-md)",
							}}
						>
							<Link to="/collection" style={{ color: "var(--color-accent)" }}>
								View All Decks
							</Link>
						</div>
					</ProfileCard>

					<ProfileCard style={{ marginTop: "var(--spacing-md)" }}>
						<SectionTitle>Recent Activity</SectionTitle>
						<div
							style={{
								fontSize: "0.9rem",
								color: "var(--color-text-secondary)",
							}}
						>
							<p>• Won a match with "Mystic Dragons" deck (3 hours ago)</p>
							<p>• Added 5 new cards to collection (yesterday)</p>
							<p>• Created new deck "Elemental Mages" (2 days ago)</p>
							<p>• Unlocked "Strategist" achievement (3 days ago)</p>
							<p>• Won 5 matches in a row (1 week ago)</p>
						</div>
					</ProfileCard>
				</div>
			</ProfileContainer>
		</MainContent>
	);
};

export default ProfilePage;
