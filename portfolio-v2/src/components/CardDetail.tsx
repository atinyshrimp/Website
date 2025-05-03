import React from "react";
import styled from "styled-components";
import { getStringFromDate } from "../utils";

import { stats, getCardById, getCards } from "../data/cardData";
import { Card, CardType as CardTypeEnum } from "../data/types";

interface CardDetailProps {
	card: Card;
	onAddToDeck?: () => void;
	onRemoveFromDeck?: () => void;
	isInDeck?: boolean;
	onRelationClick?: (card: Card) => void;
}

const DetailContainer = styled.div<{
	cardType: CardTypeEnum;
}>`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
	color: var(--color-text-primary);

	/* Cyberpunk angular frame */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
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
`;

const CardHeader = styled.div`
	position: relative;
	padding-top: 56.25%; /* 16:9 aspect ratio */
	overflow: hidden;
`;

const CardImage = styled.div<{ imageUrl?: string }>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: ${({ imageUrl }) =>
		imageUrl
			? `url(${imageUrl})`
			: "linear-gradient(135deg, #1A1E2D, #0A0E19)"};
	background-size: cover;
	background-position: center;

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
		height: 80px;
		background: linear-gradient(to top, #0d1117, transparent);
		z-index: 3;
	}
`;

const CardInfo = styled.div`
	padding: var(--spacing-md);
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: var(--spacing-md);
`;

const CardTitle = styled.h2`
	font-size: 1.5rem;
	margin-bottom: var(--spacing-xs);
	color: var(--color-text-primary);
	padding-bottom: var(--spacing-xs);
	position: relative;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	display: inline-block;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(to right, #e74c3c, #56ccf2);
	}
`;

const CardType = styled.div<{ cardType: CardTypeEnum }>`
	display: inline-block;
	padding: 4px 10px;
	font-size: 0.7rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	margin-bottom: var(--spacing-sm);
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
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const CardDescription = styled.p`
	font-size: 0.9rem;
	color: var(--color-text-secondary);
	line-height: 1.6;
`;

const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-xs);
	margin-bottom: var(--spacing-md);
`;

const Tag = styled.span`
	font-size: 0.8rem;
	padding: 3px 8px;
	background-color: rgba(0, 0, 0, 0.3);
	color: var(--color-text-secondary);
	position: relative;
	border-left: 2px solid rgba(86, 204, 242, 0.5);
	border-right: 2px solid rgba(231, 76, 60, 0.5);
`;

const StatsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: var(--spacing-md);
	margin-bottom: var(--spacing-md);
	padding: var(--spacing-md);
	background: rgba(0, 0, 0, 0.2);
	position: relative;
	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - 15px),
		calc(100% - 15px) 100%,
		0 100%
	);

	/* Horizontal line */
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 10px;
		right: 10px;
		height: 1px;
		background: linear-gradient(
			to right,
			rgba(231, 76, 60, 0.3),
			rgba(86, 204, 242, 0.3)
		);
	}

	/* Vertical line */
	&::before {
		content: "";
		position: absolute;
		top: 10px;
		bottom: 10px;
		left: 50%;
		width: 1px;
		background: linear-gradient(
			to bottom,
			rgba(231, 76, 60, 0.3),
			rgba(86, 204, 242, 0.3)
		);
	}
`;

const StatItem = styled.div<{ highlight?: boolean }>`
	display: flex;
	flex-direction: column;
	padding: 8px 5px;
	position: relative;
	z-index: 1;
	${({ highlight }) =>
		highlight &&
		`
        color: var(--color-accent);
        text-shadow: 0 0 5px rgba(86, 204, 242, 0.5);
    `}
`;

const StatLabel = styled.span`
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--color-text-secondary);
	margin-bottom: 4px;
`;

const StatValue = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
`;

const ButtonsContainer = styled.div`
	display: flex;
	gap: var(--spacing-md);
	margin-top: auto;
`;

const ActionButton = styled.button<{
	isRemove?: boolean;
	isExternal?: boolean;
}>`
	width: 100%;
	padding: var(--spacing-sm);
	background-color: rgba(13, 17, 23, 0.8);
	color: ${({ isRemove, isExternal }) =>
		isRemove ? "#e74c3c" : isExternal ? "#56ccf2" : "#2ecc71"};
	border: 1px solid
		${({ isRemove, isExternal }) =>
			isRemove ? "#e74c3c" : isExternal ? "#56ccf2" : "#2ecc71"};
	position: relative;
	overflow: hidden;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-weight: 600;

	/* Clip path for cyberpunk button style */
	clip-path: polygon(
		0 0,
		100% 0,
		100% calc(100% - 8px),
		calc(100% - 8px) 100%,
		0 100%
	);

	/* Glowing effect on hover */
	&:hover {
		background-color: rgba(20, 26, 35, 0.9);
		box-shadow: 0 0 10px
			${({ isRemove, isExternal }) =>
				isRemove
					? "rgba(231, 76, 60, 0.5)"
					: isExternal
					? "rgba(86, 204, 242, 0.5)"
					: "rgba(46, 204, 113, 0.5)"};
	}

	/* Scanline effect */
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			${({ isRemove, isExternal }) =>
				isRemove
					? "rgba(231, 76, 60, 0.8)"
					: isExternal
					? "rgba(86, 204, 242, 0.8)"
					: "rgba(46, 204, 113, 0.8)"},
			transparent
		);
		box-shadow: 0 0 8px
			${({ isRemove, isExternal }) =>
				isRemove
					? "rgba(231, 76, 60, 0.5)"
					: isExternal
					? "rgba(86, 204, 242, 0.5)"
					: "rgba(46, 204, 113, 0.5)"};
	}
`;

const DetailSection = styled.div`
	margin-bottom: var(--spacing-md);
`;

const SectionTitle = styled.h3`
	font-size: 1rem;
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: var(--spacing-sm);
	color: #56ccf2;
	text-transform: uppercase;
	letter-spacing: 0.05em;

	&::before {
		content: ">";
		margin-right: var(--spacing-xs);
		color: #e74c3c;
		font-weight: bold;
	}
`;

const DetailList = styled.ul`
	list-style: none;
	padding-left: var(--spacing-md);
`;

const DetailItem = styled.li`
	margin-bottom: var(--spacing-xs);
	font-size: 0.85rem;
	color: var(--color-text-secondary);
	position: relative;

	&::before {
		content: "•";
		position: absolute;
		left: -15px;
		color: var(--color-accent);
	}
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-sm);
	margin-top: var(--spacing-lg);
	margin-bottom: var(--spacing-lg);
`;

const ProficiencyBar = styled.div`
	display: flex;
	height: 15px;
	background-color: rgba(0, 0, 0, 0.3);
	margin-top: var(--spacing-xs);
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: repeating-linear-gradient(
			to right,
			rgba(255, 255, 255, 0.05) 0px,
			rgba(255, 255, 255, 0.05) 4px,
			rgba(0, 0, 0, 0.3) 4px,
			rgba(0, 0, 0, 0.3) 8px
		);
		pointer-events: none;
	}
`;

const ProficiencyFill = styled.div<{ level: number }>`
	width: ${(props) => props.level * 20}%;
	background: linear-gradient(to right, #e74c3c, #56ccf2);
	position: relative;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 10px;
		height: 100%;
		background: rgba(255, 255, 255, 0.5);
		filter: blur(5px);
	}
`;

const RelationsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-sm);
	margin-top: var(--spacing-sm);
`;

const RelationItem = styled.div<{ type: CardTypeEnum }>`
	display: flex;
	align-items: center;
	gap: var(--spacing-sm);
	padding: var(--spacing-sm);
	background: rgba(0, 0, 0, 0.3);
	border-left: 2px solid
		var(
			${({ type }) =>
				type === CardTypeEnum.PROJECT
					? "--color-project"
					: "--color-experience"}
		);
	cursor: pointer;
	transition: all 0.2s ease;
	position: relative;
	overflow: hidden;

	/* Cyberpunk hover effect */
	&:hover {
		background: ${({ type }) =>
			type === CardTypeEnum.PROJECT
				? "rgba(46, 204, 113, 0.15)"
				: "rgba(46, 164, 204, 0.15)"};
		transform: translateX(4px);

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				90deg,
				transparent,
				${({ type }) =>
					type === CardTypeEnum.PROJECT
						? "rgba(46, 204, 113, 0.1)"
						: "rgba(46, 164, 204, 0.1)"},
				transparent
			);
			animation: scan-line 1s ease-in-out;
		}
	}

	@keyframes scan-line {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
`;

const RelationThumbnail = styled.div<{ type: CardTypeEnum; imageUrl?: string }>`
	width: 40px;
	height: 40px;
	border-radius: var(--radius-sm);
	background-image: ${({ imageUrl }) =>
		imageUrl
			? `url(${imageUrl})`
			: "linear-gradient(to bottom, #2C3E50, #1A2530)"};
	background-size: cover;
	background-position: center;
	flex-shrink: 0;
	border: 1px solid
		var(
			${({ type }) =>
				type === CardTypeEnum.PROJECT
					? "--color-project"
					: "--color-experience"}
		);
`;

const RelationInfo = styled.div`
	flex: 1;
`;

const RelationTitle = styled.div`
	font-size: 0.85rem;
	font-weight: 600;
	color: var(--color-text-primary);
	margin-bottom: 2px;
`;

const RelationType = styled.div<{ type: CardTypeEnum }>`
	font-size: 0.7rem;

	.chip {
		background: ${({ type }) =>
			type === CardTypeEnum.PROJECT
				? "rgba(46, 204, 113, 0.2)"
				: "rgba(46, 164, 204, 0.2)"};
		color: var(
			${({ type }) =>
				type === CardTypeEnum.PROJECT
					? "--color-project"
					: "--color-experience"}
		);
		padding: 1px 6px;
		border-radius: 2px;
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
`;

const ViewIcon = styled.div<{ type: CardTypeEnum }>`
	color: var(
		${({ type }) =>
			type === CardTypeEnum.PROJECT ? "--color-project" : "--color-experience"}
	);
	font-size: 1rem;
	opacity: 0.7;
`;

const EmptyState = styled.div`
	font-size: 0.85rem;
	color: var(--color-text-secondary);
	font-style: italic;
	padding: var(--spacing-sm);
`;

const getSkillsForRelation = (projectId: string): Card[] => {
	return getCards().filter(
		(card) =>
			card.type === CardTypeEnum.SKILL &&
			card.skillDetails?.relatedProjects?.includes(projectId)
	);
};

// Add these styled components

const SkillTagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-xs);
	margin-top: var(--spacing-sm);
`;

const SkillTag = styled.div`
	background: rgba(231, 76, 60, 0.15);
	color: var(--color-skill);
	border: 1px solid rgba(231, 76, 60, 0.3);
	padding: 4px 10px;
	border-radius: var(--radius-sm);
	font-size: 0.8rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: rgba(231, 76, 60, 0.25);
		transform: translateY(-2px);
		box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
	}
`;

const CardDetail: React.FC<CardDetailProps> = ({
	card,
	onAddToDeck,
	onRemoveFromDeck,
	isInDeck,
	onRelationClick,
}) => {
	return (
		<DetailContainer cardType={card.type}>
			<CardHeader>
				<CardImage imageUrl={card.imageUrl} />
			</CardHeader>

			<CardInfo>
				<div>
					<CardType cardType={card.type}>{card.type}</CardType>
				</div>

				<CardTitle>{card.title}</CardTitle>
				<CardDescription>{card.description}</CardDescription>

				<TagsContainer>
					{card.tags.map((tag, index) => (
						<Tag key={index}>{tag}</Tag>
					))}
				</TagsContainer>

				<StatsContainer>
					{Object.entries(card.stats).map(([key, value]) => {
						const statKey = key as keyof typeof stats;
						return (
							<StatItem key={key}>
								<StatLabel>{stats[statKey].label}</StatLabel>
								<StatValue>{`${stats[statKey].icon} ${value}`}</StatValue>
							</StatItem>
						);
					})}
					<StatItem highlight={true}>
						<StatLabel>Overall</StatLabel>
						<StatValue>
							★{" "}
							{Math.floor(
								Object.values(card.stats).reduce((acc, val) => acc + val, 0) / 3
							)}
						</StatValue>
					</StatItem>
				</StatsContainer>

				{/* Render specific details based on card type */}
				{card.type === CardTypeEnum.PROJECT && card.projectDetails && (
					<>
						{card.projectDetails.role && (
							<DetailSection>
								<SectionTitle>Role</SectionTitle>
								<DetailList>
									<DetailItem>{card.projectDetails.role}</DetailItem>
								</DetailList>
							</DetailSection>
						)}

						<DetailSection>
							<SectionTitle>Duration</SectionTitle>
							<DetailList>
								<DetailItem>{card.projectDetails.duration}</DetailItem>
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Technologies</SectionTitle>
							<DetailList>
								{card.projectDetails.technologies.map((tech, index) => (
									<DetailItem key={index}>{tech}</DetailItem>
								))}
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Outcomes</SectionTitle>
							<DetailList>
								{card.projectDetails.outcomes.map((outcome, index) => (
									<DetailItem key={index}>{outcome}</DetailItem>
								))}
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Skills Applied</SectionTitle>
							{getSkillsForRelation(card.id).length > 0 ? (
								<SkillTagsContainer>
									{getSkillsForRelation(card.id).map((skill) => (
										<SkillTag
											key={skill.id}
											onClick={() => onRelationClick && onRelationClick(skill)}
										>
											{stats["mastery"].icon} {skill.title}
										</SkillTag>
									))}
								</SkillTagsContainer>
							) : (
								<EmptyState>
									No specific skills listed for this project
								</EmptyState>
							)}
						</DetailSection>
					</>
				)}

				{card.type === CardTypeEnum.SKILL && card.skillDetails && (
					<>
						<DetailSection>
							<SectionTitle>Proficiency</SectionTitle>
							<ProficiencyBar>
								<ProficiencyFill level={card.skillDetails.proficiency} />
							</ProficiencyBar>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Years of Experience</SectionTitle>
							<DetailList>
								<DetailItem>
									{card.skillDetails.yearsOfExperience} years
								</DetailItem>
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Related Exp & Projects</SectionTitle>
							{card.skillDetails.relatedProjects.length > 0 ? (
								<RelationsList>
									{card.skillDetails.relatedProjects.map((projectId) => {
										const project = getCardById(projectId);
										return project ? (
											<RelationItem
												key={projectId}
												type={project.type}
												onClick={() =>
													onRelationClick && onRelationClick(project)
												}
											>
												<RelationThumbnail
													type={project.type}
													imageUrl={project.imageUrl}
												/>
												<RelationInfo>
													<RelationTitle>{project.title}</RelationTitle>
													<RelationType type={project.type}>
														<span className="chip">{project.type}</span>
													</RelationType>
												</RelationInfo>
												<ViewIcon type={project.type}>→</ViewIcon>
											</RelationItem>
										) : null;
									})}
								</RelationsList>
							) : (
								<EmptyState>No related projects found</EmptyState>
							)}
						</DetailSection>
					</>
				)}

				{card.type === CardTypeEnum.EXPERIENCE && card.experienceDetails && (
					<>
						<DetailSection>
							<SectionTitle>Company</SectionTitle>
							<DetailList>
								<DetailItem>{card.experienceDetails.company}</DetailItem>
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Position</SectionTitle>
							<DetailList>
								<DetailItem>{card.experienceDetails.position}</DetailItem>
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Duration</SectionTitle>
							<DetailList>
								<DetailItem>
									{`${getStringFromDate(
										card.experienceDetails.startDate
									)} - ${getStringFromDate(card.experienceDetails.endDate)}`}
								</DetailItem>
							</DetailList>
						</DetailSection>

						<DetailSection>
							<SectionTitle>Location</SectionTitle>
							<DetailList>
								<DetailItem>{card.experienceDetails.location}</DetailItem>
							</DetailList>
						</DetailSection>

						{getSkillsForRelation(card.id).length > 0 && (
							<DetailSection>
								<SectionTitle>Skills Applied</SectionTitle>
								{
									<SkillTagsContainer>
										{getSkillsForRelation(card.id).map((skill) => (
											<SkillTag
												key={skill.id}
												onClick={() =>
													onRelationClick && onRelationClick(skill)
												}
											>
												{stats["mastery"].icon} {skill.title}
											</SkillTag>
										))}
									</SkillTagsContainer>
								}
							</DetailSection>
						)}

						<DetailSection>
							<SectionTitle>Key Achievements</SectionTitle>
							<DetailList>
								{card.experienceDetails.achievements.map(
									(achievement, index) => (
										<DetailItem key={index}>{achievement}</DetailItem>
									)
								)}
							</DetailList>
						</DetailSection>
					</>
				)}

				{card.links && card.links.length > 0 && (
					<LinksContainer>
						{card.links.map((link, index) => (
							<ActionButton
								key={index}
								as="a"
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								isExternal={true}
							>
								{link.label}
							</ActionButton>
						))}
					</LinksContainer>
				)}

				{onAddToDeck && onRemoveFromDeck && (
					<ButtonsContainer>
						<ActionButton
							onClick={isInDeck ? onRemoveFromDeck : onAddToDeck}
							isRemove={isInDeck}
						>
							{isInDeck ? "Remove from Deck" : "Add to Deck"}
						</ActionButton>
					</ButtonsContainer>
				)}
			</CardInfo>
		</DetailContainer>
	);
};

export default CardDetail;
