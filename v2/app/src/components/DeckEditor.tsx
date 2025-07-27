import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardType as CardTypeEnum } from "../data/types";
import { getCards } from "../data/cardData";
import CardGrid from "./CardGrid";
import { media } from "../utils/responsive";

interface DeckEditorProps {
  cards: Card[];
  deckName: string;
  deckDescription: string;
  onRemoveCard: (card: Card) => void;
  onSelectCard: (card: Card) => void;
  onExportDeck: () => void;
  onSaveDeck?: (name: string, description: string) => void;
  onGoBack: () => void;
  onAddToDeck: (card: Card) => void;
  cardsInDeck: string[];
  isCustomDeck: boolean;
}

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: var(--spacing-lg);
  height: 100%;
  min-height: 100vh;
  height: auto;
  overflow: visible;

  ${media.tabletLandscape} {
    grid-template-columns: 150px 1fr;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs);
    height: 100vh;
  }

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }
`;

const DeckPanel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 87svh;
  max-height: 87svh;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  overflow: hidden;
  position: sticky;
  top: var(--spacing-md);
  align-self: flex-start;

  ${media.tabletLandscape} {
    position: sticky;
    top: var(--spacing-xs);
    height: calc(100dvh - 24 * var(--spacing-xs));
    min-height: calc(100dvh - 24 * var(--spacing-xs));
    max-height: calc(100dvh - 24 * var(--spacing-xs));
    margin-bottom: 0;
  }

  ${media.sm} {
    position: relative;
    top: 0;
    min-height: auto;
    max-height: none;
    margin-bottom: var(--spacing-lg);
  }
`;

const DeckHeader = styled.div`
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.2);

  ${media.tabletLandscape} {
    padding: var(--spacing-xs) var(--spacing-xs);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: var(--spacing-md);

  ${media.tabletLandscape} {
    font-size: 0.65rem;
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: var(--color-text-primary);
  }

  &::before {
    content: "‹";
    margin-right: var(--spacing-sm);
    font-weight: bold;
  }
`;

const DeckTitle = styled.h2`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;

  &::before {
    content: "🃏";
    margin-right: var(--spacing-sm);
    font-size: 1.3rem;
  }

  ${media.tabletLandscape} {
    font-size: 0.8rem;
    margin-bottom: var(--spacing-xxs);
    &::before {
      font-size: 0.9rem;
      margin-right: var(--spacing-xs);
    }
  }
`;

const DeckDescription = styled.p`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);

  ${media.tabletLandscape} {
    display: none;
  }
`;

const EditNameButton = styled.button`
  background-color: rgba(86, 204, 242, 0.1);
  border: 1px solid var(--color-accent);
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  cursor: pointer;

  ${media.tabletLandscape} {
    font-size: 0.65rem;
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-top: var(--spacing-xxs);
  }

  &:hover {
    background-color: rgba(86, 204, 242, 0.2);
  }
`;

const DeckStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xs);
  margin: var(--spacing-md) 0;

  ${media.tabletLandscape} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin: var(--spacing-xs) 0;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${media.tabletLandscape} {
    padding: 2px;
  }
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);

  ${media.tabletLandscape} {
    font-size: 0.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);

  ${media.tabletLandscape} {
    font-size: 0.5rem;
    letter-spacing: 0.02em;
  }
`;

const DeckCards = styled.div`
  overflow-y: auto;
  padding: var(--spacing-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  ${media.tabletLandscape} {
    padding: var(--spacing-xs);
    gap: 4px;
  }
`;

const CardItem = styled(motion.div)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-xs);
  border: 1px solid var(--color-border-subtle);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-bottom: 6px;
  cursor: pointer;
  min-height: 40px;

  ${media.tabletLandscape} {
    padding: 3px var(--spacing-xs);
    min-height: 32px;
    margin-bottom: 3px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    border-color: var(--color-accent-light);
  }
`;

const CardCostIndicator = styled.div<{ cardType: CardTypeEnum }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ cardType }) => {
    if (cardType === CardTypeEnum.PROJECT) return "var(--color-project-dark)";
    if (cardType === CardTypeEnum.SKILL) return "var(--color-skill-dark)";
    if (cardType === CardTypeEnum.EXPERIENCE)
      return "var(--color-experience-dark)";
    return "var(--color-grey-dark)";
  }};
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: var(--spacing-sm);
  border: 1px solid var(--color-border);

  ${media.tabletLandscape} {
    width: 22px;
    height: 22px;
    font-size: 0.7rem;
    margin-right: var(--spacing-xs);
  }

  &::before {
    content: "${({ cardType }) => cardType.charAt(0).toUpperCase()}";
  }
`;

const CardName = styled.div`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 500;

  ${media.tabletLandscape} {
    font-size: 0.7rem;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--color-danger);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--spacing-xs);
  margin-left: var(--spacing-sm);
  line-height: 1;

  ${media.tabletLandscape} {
    font-size: 0.8rem;
    padding: 2px;
    margin-left: var(--spacing-xs);
  }

  &:hover {
    color: var(--color-danger-hover);
  }
`;

const EmptyDeckMessage = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-text-secondary);
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${media.tabletLandscape} {
    font-size: 0.75rem;
    padding: var(--spacing-sm);
  }
`;

const CardsPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;

  ${media.tabletLandscape} {
    height: calc(100dvh - 24 * var(--spacing-xs));
    overflow-y: auto;
  }
`;

const InputGroup = styled.div`
  margin-bottom: var(--spacing-md);

  ${media.tabletLandscape} {
    margin-bottom: var(--spacing-xs);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-secondary);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  min-height: 70px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);

  ${media.tabletLandscape} {
    margin-top: var(--spacing-xs);
  }
`;

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  background-color: ${({ variant }) =>
    variant === "primary" ? "rgba(86, 204, 242, 0.2)" : "rgba(0, 0, 0, 0.3)"};
  border: 1px solid
    ${({ variant }) =>
      variant === "primary" ? "var(--color-accent)" : "var(--color-border)"};
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  ${media.tabletLandscape} {
    font-size: 0.7rem;
    padding: var(--spacing-xs) var(--spacing-xs);
  }

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "rgba(86, 204, 242, 0.3)" : "rgba(0, 0, 0, 0.4)"};
  }
`;

const DeckPanelFooter = styled.div`
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: auto;

  ${media.tabletLandscape} {
    padding: var(--spacing-xs);
  }
`;

const DeckEditor: React.FC<DeckEditorProps> = ({
  cards,
  deckName,
  deckDescription,
  onRemoveCard,
  onSelectCard,
  onExportDeck,
  onSaveDeck,
  onGoBack,
  onAddToDeck,
  cardsInDeck,
  isCustomDeck,
}) => {
  const [name, setName] = useState(deckName);
  const [description, setDescription] = useState(deckDescription);
  const [isEditing, setIsEditing] = useState(false);
  const [filterType, setFilterType] = useState<CardTypeEnum | null>(null);

  const aggregatedCards = cards.reduce((acc, card) => {
    const existing = acc.find((c) => c.id === card.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...card, quantity: 1 });
    }
    return acc;
  }, [] as (Card & { quantity: number })[]);

  const projectCount = cards.filter((card) => card.type === "project").length;
  const skillCount = cards.filter((card) => card.type === "skill").length;
  const experienceCount = cards.filter(
    (card) => card.type === "experience"
  ).length;

  const handleSave = () => {
    if (onSaveDeck) {
      onSaveDeck(name, description);
    }
    setIsEditing(false);
  };

  const handleFilterChange = (type: CardTypeEnum | null) => {
    setFilterType(type);
  };

  const filteredCards = filterType
    ? getCards().filter((card) => card.type === filterType)
    : getCards();

  return (
    <EditorContainer>
      <DeckPanel>
        <DeckHeader>
          <BackButton onClick={onGoBack}>Back to Decks</BackButton>
          {(!isCustomDeck || !isEditing) && (
            <>
              <DeckTitle>{name}</DeckTitle>
              <DeckDescription>{description}</DeckDescription>
            </>
          )}
          {isCustomDeck && isEditing && (
            <>
              <InputGroup>
                <Label>Deck Name</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter deck name"
                />
              </InputGroup>
              <InputGroup>
                <Label>Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter deck description"
                />
              </InputGroup>
              <ButtonGroup>
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>
                  Save
                </Button>
              </ButtonGroup>
            </>
          )}
        </DeckHeader>

        <DeckCards>
          <AnimatePresence>
            {aggregatedCards.length > 0 ? (
              aggregatedCards.map((card) => (
                <CardItem
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onSelectCard(card)}
                >
                  <CardCostIndicator cardType={card.type as CardTypeEnum} />
                  <CardName>{card.title}</CardName>
                  {isCustomDeck && (
                    <RemoveButton
                      onClick={(e) => {
                        e.stopPropagation();
                        const originalCard = cards.find(
                          (c) => c.id === card.id
                        );
                        if (originalCard) onRemoveCard(originalCard);
                      }}
                    >
                      ×
                    </RemoveButton>
                  )}
                </CardItem>
              ))
            ) : (
              <EmptyDeckMessage>
                {isCustomDeck
                  ? "Your deck is empty. Add cards from the right panel."
                  : "This deck has no cards."}
              </EmptyDeckMessage>
            )}
          </AnimatePresence>
        </DeckCards>

        {(!isCustomDeck || !isEditing) && (
          <DeckPanelFooter>
            <DeckStats>
              <StatItem>
                <StatValue>{cards.length}</StatValue>
                <StatLabel>Cards</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{projectCount}</StatValue>
                <StatLabel>Projects</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{skillCount}</StatValue>
                <StatLabel>Skills</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{experienceCount}</StatValue>
                <StatLabel>Exp</StatLabel>
              </StatItem>
            </DeckStats>
            <ButtonGroup>
              {isCustomDeck && (
                <EditNameButton
                  onClick={() => setIsEditing(true)}
                  style={{ width: "100%" }}
                >
                  Edit{" "}
                  <span
                    style={{
                      display: `${media.tabletLandscape ? "none" : "inline"}`,
                    }}
                  >
                    Deck Info
                  </span>
                </EditNameButton>
              )}
              <Button
                onClick={onExportDeck}
                variant="primary"
                style={{ width: "100%" }}
              >
                Export{" "}
                <span
                  style={{
                    display: `${media.tabletLandscape ? "none" : "inline"}`,
                  }}
                >
                  Deck
                </span>
              </Button>
            </ButtonGroup>
          </DeckPanelFooter>
        )}
      </DeckPanel>

      <CardsPanel>
        <CardGrid
          cards={filteredCards}
          onSelectCard={onSelectCard}
          onAddToDeck={isCustomDeck ? onAddToDeck : undefined}
          onRemoveFromDeck={isCustomDeck ? onRemoveCard : undefined}
          cardsInDeck={cardsInDeck}
          filterType={filterType}
          onFilterChange={handleFilterChange}
        />
      </CardsPanel>
    </EditorContainer>
  );
};

export default DeckEditor;
