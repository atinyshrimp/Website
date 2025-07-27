import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils/responsive"; // Import media queries

import Card from "./Card";
import { Card as CardType, CardType as CardTypeEnum } from "../data/types";

interface CardGridProps {
  cards: CardType[];
  onSelectCard?: (card: CardType) => void;
  onAddToDeck?: (card: CardType) => void;
  onRemoveFromDeck?: (card: CardType) => void;
  cardsInDeck?: string[];
  filterType?: CardTypeEnum | null;
  onFilterChange?: (type: CardTypeEnum | null) => void;
}

const GridContainer = styled.div`
  padding: var(--spacing-md) 0;
  ${media.tabletLandscape} {
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${media.tabletLandscape} {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
    flex-direction: column; /* Stack header items */
    align-items: stretch; /* Make items full width */
    gap: var(--spacing-sm);
  }

  ${media.phoneLandscape} {
    padding: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-xs);
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;

  ${media.tabletLandscape} {
    font-size: 1.1rem;
    text-align: center; /* Center title when stacked */
  }
  ${media.phoneLandscape} {
    font-size: 0.9rem; /* Smaller */
    text-align: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center; /* Align items vertically */

  ${media.tabletLandscape} {
    flex-direction: column; /* Stack search and filters */
    gap: var(--spacing-sm);
  }
  ${media.phoneLandscape} {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`;

// New wrapper for filter buttons for better layout on mobile
const FilterButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap */
  justify-content: center; /* Center buttons when wrapped */
  gap: var(--spacing-xs);
`;

const FilterButton = styled.button<{
  active: boolean;
  cardType?: CardTypeEnum;
}>`
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;

  ${media.tabletLandscape} {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
  ${media.phoneLandscape} {
    font-size: 0.65rem; /* Smaller */
    padding: 3px 6px; /* Smaller padding */
    flex-grow: 1; /* Allow buttons to take available space if wrapping */
  }

  background-color: ${({ active, cardType }) => {
    if (!active) return "rgba(0, 0, 0, 0.2)";
    if (!cardType) return "rgba(86, 204, 242, 0.2)";

    switch (cardType) {
      case CardTypeEnum.PROJECT:
        return "rgba(46, 204, 113, 0.2)";
      case CardTypeEnum.SKILL:
        return "rgba(231, 76, 60, 0.2)";
      case CardTypeEnum.EXPERIENCE:
        return "rgba(243, 156, 18, 0.2)";
      default:
        return "rgba(86, 204, 242, 0.2)";
    }
  }};
  border: 1px solid
    ${({ active, cardType }) => {
      if (!active) return "var(--color-border)";
      if (!cardType) return "var(--color-accent)";

      switch (cardType) {
        case CardTypeEnum.PROJECT:
          return "var(--color-project)";
        case CardTypeEnum.SKILL:
          return "var(--color-skill)";
        case CardTypeEnum.EXPERIENCE:
          return "var(--color-experience)";
        default:
          return "var(--color-accent)";
      }
    }};
  color: ${({ active, cardType }) => {
    if (!active) return "var(--color-text-secondary)";
    if (!cardType) return "var(--color-accent)";

    switch (cardType) {
      case CardTypeEnum.PROJECT:
        return "var(--color-project)";
      case CardTypeEnum.SKILL:
        return "var(--color-skill)";
      case CardTypeEnum.EXPERIENCE:
        return "var(--color-experience)";
      default:
        return "var(--color-accent)";
    }
  }};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ cardType }) => {
      if (!cardType) return "rgba(86, 204, 242, 0.3)";

      switch (cardType) {
        case CardTypeEnum.PROJECT:
          return "rgba(46, 204, 113, 0.3)";
        case CardTypeEnum.SKILL:
          return "rgba(231, 76, 60, 0.3)";
        case CardTypeEnum.EXPERIENCE:
          return "rgba(243, 156, 18, 0.3)";
        default:
          return "rgba(86, 204, 242, 0.3)";
      }
    }};
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--card-width, 250px), 1fr)
  );
  gap: var(--spacing-md);

  ${media.tabletLandscape} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-sm);
  }

  ${media.phoneLandscape} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-xs);
    /* Explicitly set minmax with a smaller min if needed, though --card-width should handle it */
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--card-width, 160px), 1fr)
    );
  }
`;

const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  width: 200px;
  font-size: 0.8rem;

  ${media.tabletLandscape} {
    width: 100%; /* Full width when stacked */
    font-size: 0.75rem;
  }
  ${media.phoneLandscape} {
    width: 100%;
    font-size: 0.65rem; /* Smaller */
    padding: 4px 8px; /* Smaller padding */
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: var(--color-text-secondary);
  padding: var(--spacing-xl);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  font-style: italic;

  ${media.tabletLandscape} {
    padding: var(--spacing-lg);
    font-size: 0.9rem;
  }
  ${media.phoneLandscape} {
    padding: var(--spacing-md);
    font-size: 0.8rem;
  }
`;

const CardGrid: React.FC<CardGridProps> = ({
  cards,
  onSelectCard,
  cardsInDeck = [],
  filterType,
  onFilterChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<CardTypeEnum | null>(
    filterType || null
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Update local filter state when prop changes
  useEffect(() => {
    setActiveFilter(filterType || null);
  }, [filterType]);

  const handleFilterClick = (type: CardTypeEnum | null) => {
    setActiveFilter(type);
    if (onFilterChange) {
      onFilterChange(type);
    }
  };

  // Filter cards by type and search term
  const filteredCards = cards.filter((card) => {
    // Apply type filter
    if (activeFilter && card.type !== activeFilter) {
      return false;
    }

    // Apply search filter if there's a search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.description.toLowerCase().includes(searchLower) ||
        card.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
        (card.type === CardTypeEnum.PROJECT &&
          card.projectDetails!.technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          ))
      );
    }

    return true;
  });

  const isCardInDeck = (cardId: string) => cardsInDeck.includes(cardId);

  return (
    <GridContainer>
      <Header>
        <Title>Card Collection</Title>

        <FilterContainer>
          <SearchInput
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <FilterButtonRow>
            {" "}
            {/* Wrap filter buttons */}
            <FilterButton
              active={activeFilter === null}
              onClick={() => handleFilterClick(null)}
            >
              All
            </FilterButton>
            <FilterButton
              active={activeFilter === CardTypeEnum.PROJECT}
              cardType={CardTypeEnum.PROJECT}
              onClick={() => handleFilterClick(CardTypeEnum.PROJECT)}
            >
              Projects
            </FilterButton>
            <FilterButton
              active={activeFilter === CardTypeEnum.SKILL}
              cardType={CardTypeEnum.SKILL}
              onClick={() => handleFilterClick(CardTypeEnum.SKILL)}
            >
              Skills
            </FilterButton>
            <FilterButton
              active={activeFilter === CardTypeEnum.EXPERIENCE}
              cardType={CardTypeEnum.EXPERIENCE}
              onClick={() => handleFilterClick(CardTypeEnum.EXPERIENCE)}
            >
              Experience
            </FilterButton>
          </FilterButtonRow>
        </FilterContainer>
      </Header>

      {filteredCards.length > 0 ? (
        <CardsWrapper>
          {" "}
          {filteredCards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={() => onSelectCard?.(card)}
              isShiny={card.isFeatured}
              isInDeck={isCardInDeck(card._id)}
            />
          ))}
        </CardsWrapper>
      ) : (
        <EmptyMessage>
          No cards found. Try changing the filter or search term.
        </EmptyMessage>
      )}
    </GridContainer>
  );
};

export default CardGrid;
