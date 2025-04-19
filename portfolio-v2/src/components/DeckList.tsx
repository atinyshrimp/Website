import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Deck } from "../data/types";
import { getCardById } from "../data/cardData";

interface DeckListProps {
  decks: Deck[];
  activeDeckId: string;
  onSelectDeck: (deckId: string) => void;
  onNewDeck: () => void;
  onImportDeck: () => void;
}

const DeckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const ToolbarContainer = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const ToolbarButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) =>
    active ? "rgba(86, 204, 242, 0.2)" : "rgba(0, 0, 0, 0.4)"};
  color: ${({ active }) =>
    active ? "var(--color-text-primary)" : "var(--color-text-secondary)"};
  border: 1px solid
    ${({ active }) => (active ? "var(--color-accent)" : "var(--color-border)")};
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(86, 204, 242, 0.1);
    color: var(--color-text-primary);
  }
`;

const DecksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const DeckCard = styled(motion.div)<{ active: boolean }>`
  position: relative;
  height: 400px;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active
      ? "0 0 20px rgba(86, 204, 242, 0.5)"
      : "0 8px 16px rgba(0, 0, 0, 0.2)"};
  border: 2px solid
    ${({ active }) => (active ? "var(--color-accent)" : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ active }) =>
      active
        ? "0 0 25px rgba(86, 204, 242, 0.6)"
        : "0 12px 20px rgba(0, 0, 0, 0.3)"};
  }
`;

const DeckBackground = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  }
`;

const DeckInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-lg);
  z-index: 1;
`;

const DeckTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
`;

const DeckDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
`;

const DeckStats = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`;

const DeckStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
`;

const StatValue = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

const StatLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
`;

const DeckList: React.FC<DeckListProps> = ({
  decks,
  activeDeckId,
  onSelectDeck,
  onNewDeck,
  onImportDeck,
}) => {
  // Get the first card image for each deck to use as background
  const getDeckBackgroundImage = (deck: Deck): string => {
    if (deck.cards.length === 0) {
      return "/images/deck-placeholder.jpg";
    }

    const firstCard = getCardById(deck.cards[0]);
    return firstCard?.imageUrl || "/images/deck-placeholder.jpg";
  };

  // Count card types in each deck
  const getCardTypeCounts = (deck: Deck) => {
    const counts = {
      projects: 0,
      skills: 0,
      experiences: 0,
    };

    deck.cards.forEach((cardId) => {
      const card = getCardById(cardId);
      if (!card) return;

      if (card.type === "project") counts.projects++;
      else if (card.type === "skill") counts.skills++;
      else if (card.type === "experience") counts.experiences++;
    });

    return counts;
  };

  return (
    <DeckListContainer>
      <ToolbarContainer>
        <ToolbarButton onClick={onNewDeck}>New Deck</ToolbarButton>
        <ToolbarButton onClick={onImportDeck}>Import Deck</ToolbarButton>
        <ToolbarButton active={true}>All Decks</ToolbarButton>
      </ToolbarContainer>

      <DecksGrid>
        {decks.map((deck) => {
          const counts = getCardTypeCounts(deck);
          return (
            <DeckCard
              key={deck.id}
              active={deck.id === activeDeckId}
              onClick={() => onSelectDeck(deck.id)}
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <DeckBackground imageUrl={getDeckBackgroundImage(deck)} />
              <DeckInfo>
                <DeckTitle>{deck.name}</DeckTitle>
                <DeckDescription>{deck.description}</DeckDescription>
                <DeckStats>
                  <DeckStat>
                    <StatValue>{deck.cards.length}</StatValue>
                    <StatLabel>Cards</StatLabel>
                  </DeckStat>
                  <DeckStat>
                    <StatValue>{counts.projects}</StatValue>
                    <StatLabel>Projects</StatLabel>
                  </DeckStat>
                  <DeckStat>
                    <StatValue>{counts.skills}</StatValue>
                    <StatLabel>Skills</StatLabel>
                  </DeckStat>
                  <DeckStat>
                    <StatValue>{counts.experiences}</StatValue>
                    <StatLabel>Exp</StatLabel>
                  </DeckStat>
                </DeckStats>
              </DeckInfo>
            </DeckCard>
          );
        })}
      </DecksGrid>
    </DeckListContainer>
  );
};

export default DeckList;
