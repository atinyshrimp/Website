import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import type { Card as CardData } from "../data/types";

interface DeckProps {
  cards: CardData[];
  imageUrl?: string;
  onRemoveCard: (card: CardData) => void;
  onSelectCard: (card: CardData) => void;
  onExportDeck?: () => void;
}

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DeckHeader = styled.div`
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-md);
`;

const DeckTitle = styled.h2`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;

  &::before {
    content: "🃏";
    margin-right: var(--spacing-sm);
    font-size: 1.3rem;
  }
`;

const DeckSubtitle = styled.p`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
`;

const EmptyDeckMessage = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-text-secondary);
  font-style: italic;
  font-size: 0.9rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  margin-top: var(--spacing-lg);
`;

const DeckStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  border-radius: var(--radius-sm);
  overflow: hidden;
`;

const StatItem = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm);
  background-color: ${({ type }) => {
    switch (type) {
      case "project":
        return "rgba(46, 204, 113, 0.1)";
      case "skill":
        return "rgba(231, 76, 60, 0.1)";
      case "experience":
        return "rgba(243, 156, 18, 0.1)";
      default:
        return "rgba(0, 0, 0, 0.2)";
    }
  }};
  border: 1px solid
    ${({ type }) => {
      switch (type) {
        case "project":
          return "var(--color-project)";
        case "skill":
          return "var(--color-skill)";
        case "experience":
          return "var(--color-experience)";
        default:
          return "var(--color-border)";
      }
    }};
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  overflow-y: auto;
  flex-grow: 1;
  padding-right: var(--spacing-xs);

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #56ccf2, #2f80ed);
    border-radius: 3px;
  }
`;

const DeckCardWrapper = styled(motion.div)`
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: translateX(3px);
  }
`;

const CardInfo = styled.div`
  margin-left: var(--spacing-sm);
  flex-grow: 1;
`;

const CardTitle = styled.h4`
  font-size: 0.85rem;
  margin-bottom: 2px;
  color: var(--color-text-primary);
`;

const CardTypeLabel = styled.div<{ type: string }>`
  font-size: 0.7rem;
  color: ${({ type }) => {
    switch (type) {
      case "project":
        return "var(--color-project)";
      case "skill":
        return "var(--color-skill)";
      case "experience":
        return "var(--color-experience)";
      default:
        return "var(--color-text-secondary)";
    }
  }};
  display: flex;
  align-items: center;

  &::before {
    content: "•";
    margin-right: 4px;
  }
`;

const CardThumbnail = styled.div<{ imageUrl?: string; type: string }>`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background-image: ${({ imageUrl }) =>
    imageUrl
      ? `url(${imageUrl})`
      : "linear-gradient(to bottom, #2C3E50, #1A2530)"};
  background-size: cover;
  background-position: center;
  position: relative;
  border: 1px solid
    ${({ type }) => {
      switch (type) {
        case "project":
          return "var(--color-project)";
        case "skill":
          return "var(--color-skill)";
        case "experience":
          return "var(--color-experience)";
        default:
          return "var(--color-border)";
      }
    }};
`;

const RemoveButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(231, 76, 60, 0.2);
  color: var(--color-skill);
  border: 1px solid var(--color-skill);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0;

  &:hover {
    background-color: rgba(231, 76, 60, 0.3);
  }
`;

const SaveDeckButton = styled.button`
  width: 100%;
  margin-top: var(--spacing-md);
  background-color: rgba(86, 204, 242, 0.1);
  border: 1px solid var(--color-accent);
  padding: var(--spacing-sm);

  &:hover {
    background-color: rgba(86, 204, 242, 0.2);
  }
`;

const Deck: React.FC<DeckProps> = ({
  cards,
  imageUrl,
  onRemoveCard,
  onSelectCard,
  onExportDeck,
}) => {
  // Count the number of cards by type
  const projectCount = cards.filter((card) => card.type === "project").length;
  const skillCount = cards.filter((card) => card.type === "skill").length;
  const experienceCount = cards.filter(
    (card) => card.type === "experience"
  ).length;

  return (
    <DeckContainer>
      <DeckHeader>
        <DeckTitle>Your Collection</DeckTitle>
        <DeckSubtitle>
          Build your portfolio by adding cards from the collection
        </DeckSubtitle>

        <DeckStats>
          <StatItem type="project">
            <StatLabel>Projects</StatLabel>
            <StatValue>{projectCount}</StatValue>
          </StatItem>
          <StatItem type="skill">
            <StatLabel>Skills</StatLabel>
            <StatValue>{skillCount}</StatValue>
          </StatItem>
          <StatItem type="experience">
            <StatLabel>Exp</StatLabel>
            <StatValue>{experienceCount}</StatValue>
          </StatItem>
        </DeckStats>
      </DeckHeader>

      {cards.length > 0 ? (
        <>
          <CardsContainer>
            <AnimatePresence>
              {cards.map((card) => (
                <DeckCardWrapper
                  key={card._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onSelectCard(card)}
                >
                  <CardThumbnail imageUrl={imageUrl} type={card.type} />
                  <CardInfo>
                    <CardTitle>{card.title}</CardTitle>
                    <CardTypeLabel type={card.type}>{card.type}</CardTypeLabel>
                  </CardInfo>
                  <RemoveButton
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveCard(card);
                    }}
                  >
                    ×
                  </RemoveButton>
                </DeckCardWrapper>
              ))}
            </AnimatePresence>
          </CardsContainer>

          <SaveDeckButton onClick={onExportDeck}>
            Export Collection
          </SaveDeckButton>
        </>
      ) : (
        <EmptyDeckMessage>
          Your collection is empty. Add cards from the collection below to build
          your portfolio.
        </EmptyDeckMessage>
      )}
    </DeckContainer>
  );
};

export default Deck;
