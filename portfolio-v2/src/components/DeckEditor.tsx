import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardType as CardTypeEnum } from "../data/types";
import { cards as allCards } from "../data/cardData";
import CardGrid from "../components/CardGrid";

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
	/* Ensure this container is tall enough for the right panel content */
	height: auto;
	overflow: visible;
`;

const DeckPanel = styled.div`
	display: flex;
	flex-direction: column;
	/* Set a max-height instead of fixed height */
	min-height: 87svh;
	max-height: 87svh;
	height: auto;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: var(--radius-sm);
	border: 1px solid var(--color-border);
	overflow: auto;
	position: sticky;
	top: 0;
	/* Make sure it's aligned to the top */
	align-self: flex-start;
`;

const DeckHeader = styled.div`
	padding: var(--spacing-md);
	border-bottom: 1px solid var(--color-border);
	background-color: rgba(0, 0, 0, 0.2);
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

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
		color: var(--color-text-primary);
	}

	&::before {
		margin-right: var(--spacing-sm);
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
`;

const DeckDescription = styled.p`
	font-size: 0.8rem;
	color: var(--color-text-secondary);
	margin-bottom: var(--spacing-md);
`;

const EditNameButton = styled.button`
	background-color: rgba(86, 204, 242, 0.1);
	border: 1px solid var(--color-accent);
	padding: var(--spacing-xs) var(--spacing-sm);
	color: var(--color-text-primary);
	border-radius: var(--radius-sm);
	font-size: 0.8rem;
	cursor: pointer;
	margin-top: var(--spacing-xs);

	&:hover {
		background-color: rgba(86, 204, 242, 0.2);
	}
`;

const DeckStats = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: var(--spacing-xs);
	margin: var(--spacing-md) 0;
`;

const StatItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	padding: var(--spacing-xs);
	border-radius: var(--radius-sm);
	border: 1px solid var(--color-border);
`;

const StatValue = styled.div`
	font-size: 1.2rem;
	font-weight: 700;
	color: var(--color-text-primary);
`;

const StatLabel = styled.div`
	font-size: 0.7rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--color-text-secondary);
`;

const DeckCards = styled.div`
	overflow-y: auto;
	padding: var(--spacing-md);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: var(--spacing-sm);
`;

const CardItem = styled(motion.div)`
	display: flex;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: var(--radius-sm);
	overflow: hidden;
	border: 1px solid var(--color-border);
	height: 56px;
	min-height: 56px; /* Add this to prevent shrinking */
	flex-shrink: 0; /* Add this to prevent shrinking */
	cursor: pointer;
	padding: 0;
	margin-bottom: 8px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
`;

const CardImage = styled.div<{ imageUrl?: string; type: string }>`
	width: 56px;
	height: 56px;
	background-image: ${({ imageUrl }) =>
		imageUrl
			? `url(${imageUrl})`
			: "linear-gradient(to bottom, #2C3E50, #1A2530)"};
	background-size: cover;
	background-position: center;
	border-right: 1px solid var(--color-border);
`;

const CardInfo = styled.div`
	padding: 0 12px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const CardTitle = styled.h4`
	font-size: 0.9rem;
	margin-bottom: 2px;
	color: var(--color-text-primary);
	font-weight: 600;
`;

const CardType = styled.div<{ type: string }>`
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
	font-size: 0.9rem;
	cursor: pointer;
	margin-right: 10px;

	&:hover {
		background-color: rgba(231, 76, 60, 0.4);
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
`;

const CardsPanel = styled.div`
	display: flex;
	flex-direction: column;
	/* Add this to ensure this panel is as tall as its content */
	height: auto;
	min-height: 100%;
`;

const CardsPanelHeader = styled.div`
	margin-bottom: var(--spacing-md);
`;

const CardsPanelTitle = styled.h2`
	font-size: 1.2rem;
	color: var(--color-text-primary);
	margin-bottom: var(--spacing-xs);
`;

const CardsPanelDescription = styled.p`
	font-size: 0.8rem;
	color: var(--color-text-secondary);
`;

const InputGroup = styled.div`
	margin-bottom: var(--spacing-md);
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

	&:hover {
		background-color: ${({ variant }) =>
			variant === "primary" ? "rgba(86, 204, 242, 0.3)" : "rgba(0, 0, 0, 0.4)"};
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

	// Count the number of cards by type
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
		? allCards.filter((card) => card.type === filterType)
		: allCards;

	return (
		<EditorContainer>
			<DeckPanel>
				<DeckHeader>
					<BackButton onClick={onGoBack}>Back to Decks</BackButton>

					{isCustomDeck && isEditing ? (
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
					) : (
						<>
							<DeckTitle>{name}</DeckTitle>
							<DeckDescription>{description}</DeckDescription>
							{isCustomDeck && (
								<EditNameButton onClick={() => setIsEditing(true)}>
									Edit Deck Info
								</EditNameButton>
							)}
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
							<Button onClick={onExportDeck}>Export Deck</Button>
						</>
					)}
				</DeckHeader>

				<DeckCards>
					<AnimatePresence>
						{cards.length > 0 ? (
							cards.map((card) => (
								<CardItem
									key={card.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ duration: 0.2 }}
									onClick={() => onSelectCard(card)}
								>
									<CardImage imageUrl={card.imageUrl} type={card.type} />
									<CardInfo>
										<CardTitle>{card.title}</CardTitle>
										<CardType type={card.type}>{card.type}</CardType>
									</CardInfo>
									{isCustomDeck && (
										<RemoveButton
											onClick={(e) => {
												e.stopPropagation();
												onRemoveCard(card);
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
			</DeckPanel>

			<CardsPanel>
				<CardsPanelHeader>
					<CardsPanelTitle>
						{isCustomDeck ? "Add Cards to Your Deck" : "Card Collection"}
					</CardsPanelTitle>
					<CardsPanelDescription>
						{isCustomDeck
							? "Browse through available cards and click to add them to your deck."
							: "Browse through the card collection."}
					</CardsPanelDescription>
				</CardsPanelHeader>

				<CardGrid
					cards={filteredCards}
					onSelectCard={onSelectCard}
					onAddToDeck={isCustomDeck ? onAddToDeck : undefined}
					onRemoveFromDeck={isCustomDeck ? onRemoveCard : undefined}
					cardsInDeck={isCustomDeck ? cardsInDeck : []}
					filterType={filterType}
					onFilterChange={handleFilterChange}
				/>
			</CardsPanel>
		</EditorContainer>
	);
};

export default DeckEditor;
