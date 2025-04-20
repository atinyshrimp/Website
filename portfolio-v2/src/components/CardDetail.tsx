import React from "react";
import styled from "styled-components";
import { Card, CardRarity, CardType as CardTypeEnum } from "../data/types";

interface CardDetailProps {
    card: Card;
    onAddToDeck?: () => void;
    onRemoveFromDeck?: () => void;
    isInDeck?: boolean;
}

const DetailContainer = styled.div<{
    rarity: CardRarity;
    cardType: CardTypeEnum;
}>`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--color-panel-bg);
    position: relative;
    color: var(--color-text-primary);

    /* Card rarity border styling */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
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
            : "linear-gradient(to bottom, #2C3E50, #1A2530)"};
    background-size: cover;
    background-position: center;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: linear-gradient(to top, var(--color-panel-bg), transparent);
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
    border-bottom: 2px solid var(--color-border);
    padding-bottom: var(--spacing-xs);
    position: relative;
`;

const CardType = styled.div<{ cardType: CardTypeEnum }>`
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-sm);
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
`;

const CardRarityText = styled.div<{ rarity: CardRarity }>`
    display: inline-block;
    margin-left: var(--spacing-sm);
    padding: 2px 8px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: var(--radius-sm);
    color: ${({ rarity }) => {
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
    background-color: rgba(0, 0, 0, 0.2);
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
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    background-color: rgba(0, 0, 0, 0.2);
    color: var(--color-text-secondary);
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    border-top: 1px solid var(--color-border);
    padding-top: var(--spacing-md);
`;

const StatItem = styled.div<{ highlight?: boolean }>`
    display: flex;
    flex-direction: column;
    ${({ highlight }) =>
        highlight &&
        `
    color: var(--color-accent);
  `}
`;

const StatLabel = styled.span`
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    margin-bottom: 2px;
`;

const StatValue = styled.span`
    font-size: 1rem;
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
    background-color: ${({ isRemove, isExternal }) =>
        isRemove
            ? "rgba(231, 76, 60, 0.2)"
            : isExternal
            ? "rgba(52, 152, 219, 0.2)"
            : "rgba(46, 204, 113, 0.2)"};
    color: ${({ isRemove, isExternal }) =>
        isRemove
            ? "var(--color-skill)"
            : isExternal
            ? "var(--color-rare)"
            : "var(--color-project)"};
    border: 1px solid
        ${({ isRemove, isExternal }) =>
            isRemove
                ? "var(--color-skill)"
                : isExternal
                ? "var(--color-rare)"
                : "var(--color-project)"};

    &:hover {
        background-color: ${({ isRemove, isExternal }) =>
            isRemove
                ? "rgba(231, 76, 60, 0.3)"
                : isExternal
                ? "rgba(52, 152, 219, 0.3)"
                : "rgba(46, 204, 113, 0.3)"};
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

    &::before {
        content: "▶";
        font-size: 0.7rem;
        margin-right: var(--spacing-xs);
        color: var(--color-accent);
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
    height: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-top: var(--spacing-xs);
    border-radius: var(--radius-sm);
    overflow: hidden;
`;

const ProficiencyFill = styled.div<{ level: number }>`
    width: ${(props) => props.level * 20}%;
    background: linear-gradient(to right, #2ecc71, #56ccf2);
    border-radius: var(--radius-sm);
`;

const CardDetail: React.FC<CardDetailProps> = ({
    card,
    onAddToDeck,
    onRemoveFromDeck,
    isInDeck,
}) => {
    // Generate random RPG-like stat values based on card properties
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
            const duration =
                card.experienceDetails.endDate === "Present" ? 2 : 1;
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

    const powerStat = getPowerStat();
    const timeStat = getTimeStat();
    const valueStat = getValueStat();

    return (
        <DetailContainer rarity={card.rarity} cardType={card.type}>
            <CardHeader>
                <CardImage imageUrl={card.imageUrl} />
            </CardHeader>

            <CardInfo>
                <div>
                    <CardType cardType={card.type}>{card.type}</CardType>
                    <CardRarityText rarity={card.rarity}>
                        {card.rarity}
                    </CardRarityText>
                </div>

                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>

                <TagsContainer>
                    {card.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagsContainer>

                <StatsContainer>
                    <StatItem>
                        <StatLabel>Power</StatLabel>
                        <StatValue>⚔️ {powerStat}</StatValue>
                    </StatItem>
                    <StatItem>
                        <StatLabel>Value</StatLabel>
                        <StatValue>💎 {valueStat}</StatValue>
                    </StatItem>
                    <StatItem>
                        <StatLabel>Time</StatLabel>
                        <StatValue>⏳ {timeStat}</StatValue>
                    </StatItem>
                    <StatItem highlight={true}>
                        <StatLabel>Overall</StatLabel>
                        <StatValue>
                            ★{" "}
                            {Math.floor((powerStat + valueStat + timeStat) / 3)}
                        </StatValue>
                    </StatItem>
                </StatsContainer>

                {/* Render specific details based on card type */}
                {card.type === CardTypeEnum.PROJECT && card.projectDetails && (
                    <>
                        <DetailSection>
                            <SectionTitle>Role</SectionTitle>
                            <DetailList>
                                <DetailItem>
                                    {card.projectDetails.role}
                                </DetailItem>
                            </DetailList>
                        </DetailSection>

                        <DetailSection>
                            <SectionTitle>Duration</SectionTitle>
                            <DetailList>
                                <DetailItem>
                                    {card.projectDetails.duration}
                                </DetailItem>
                            </DetailList>
                        </DetailSection>

                        <DetailSection>
                            <SectionTitle>Technologies</SectionTitle>
                            <DetailList>
                                {card.projectDetails.technologies.map(
                                    (tech, index) => (
                                        <DetailItem key={index}>
                                            {tech}
                                        </DetailItem>
                                    )
                                )}
                            </DetailList>
                        </DetailSection>

                        <DetailSection>
                            <SectionTitle>Outcomes</SectionTitle>
                            <DetailList>
                                {card.projectDetails.outcomes.map(
                                    (outcome, index) => (
                                        <DetailItem key={index}>
                                            {outcome}
                                        </DetailItem>
                                    )
                                )}
                            </DetailList>
                        </DetailSection>
                    </>
                )}

                {card.type === CardTypeEnum.SKILL && card.skillDetails && (
                    <>
                        <DetailSection>
                            <SectionTitle>Proficiency</SectionTitle>
                            <ProficiencyBar>
                                <ProficiencyFill
                                    level={card.skillDetails.proficiency}
                                />
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
                    </>
                )}

                {card.type === CardTypeEnum.EXPERIENCE &&
                    card.experienceDetails && (
                        <>
                            <DetailSection>
                                <SectionTitle>Company</SectionTitle>
                                <DetailList>
                                    <DetailItem>
                                        {card.experienceDetails.company}
                                    </DetailItem>
                                </DetailList>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Position</SectionTitle>
                                <DetailList>
                                    <DetailItem>
                                        {card.experienceDetails.position}
                                    </DetailItem>
                                </DetailList>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Duration</SectionTitle>
                                <DetailList>
                                    <DetailItem>
                                        {`${card.experienceDetails.startDate} - ${card.experienceDetails.endDate}`}
                                    </DetailItem>
                                </DetailList>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Location</SectionTitle>
                                <DetailList>
                                    <DetailItem>
                                        {card.experienceDetails.location}
                                    </DetailItem>
                                </DetailList>
                            </DetailSection>

                            <DetailSection>
                                <SectionTitle>Key Achievements</SectionTitle>
                                <DetailList>
                                    {card.experienceDetails.achievements.map(
                                        (achievement, index) => (
                                            <DetailItem key={index}>
                                                {achievement}
                                            </DetailItem>
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
