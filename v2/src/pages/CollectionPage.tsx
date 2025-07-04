import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Deck as DeckType } from "../data/types";
import { getCards, getCardById, decks } from "../data/cardData";
import CardGrid from "../components/CardGrid";
import CardDetail from "../components/CardDetail";
import useLocalStorage from "../hooks/useLocalStorage";
import {
	CollectionLayout,
	ModalDrawer,
	TabType,
} from "../components/CollectionLayout";
import DeckList from "../components/DeckList";
import DeckEditor from "../components/DeckEditor";
import Footer from "../components/Footer";

const PageHeader = styled.div`
	margin-bottom: var(--spacing-lg);
`;

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

const CollectionPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType>("decks");
	const [userDeck, setUserDeck] = useLocalStorage<string[]>("userDeck", []);
	const [selectedCard, setSelectedCard] = useState<Card | null>(null);
	const [activeDeckId, setActiveDeckId] = useLocalStorage<string>(
		"activeDeckId",
		"custom"
	);
	const [customDeckName, setCustomDeckName] = useLocalStorage<string>(
		"customDeckName",
		"Your Custom Collection"
	);
	const [customDeckDesc, setCustomDeckDesc] = useLocalStorage<string>(
		"customDeckDesc",
		"Added/Deleted cards will only affect this collection."
	);
	const [isCardDetailOpen, setIsCardDetailOpen] = useState(false);
	const [viewMode, setViewMode] = useState<"list" | "editor">("list");
	const [viewingDeckCards, setViewingDeckCards] = useState<string[]>([]);

	// Define a custom deck with the user's cards
	const customDeck: DeckType = {
		id: "custom",
		name: customDeckName,
		coverImage:
			"https://images.unsplash.com/photo-1699275303988-4f266a7f119a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNob2ljZSUyMGRlc2t0b3AlMjBjdXJzb3J8ZW58MHx8MHx8fDI%3D",
		description: customDeckDesc,
		cards: userDeck,
	};

	// Combine predefined decks with the custom deck
	const allDecks = [customDeck, ...decks];

	// Get the active deck
	const activeDeck =
		allDecks.find((deck) => deck.id === activeDeckId) || customDeck;

	// Update viewing deck cards when active deck changes
	useEffect(() => {
		if (activeDeckId !== "custom") {
			const deck = allDecks.find((d) => d.id === activeDeckId);
			if (deck) {
				setViewingDeckCards(deck.cards);
			}
		} else {
			setViewingDeckCards(userDeck);
		}
	}, [activeDeckId, userDeck, allDecks]);

	const handleAddToDeck = (card: Card) => {
		if (!userDeck.includes(card.id)) {
			setUserDeck([...userDeck, card.id]);
		}
		setIsCardDetailOpen(false);
	};

	const handleRemoveFromDeck = (card: Card) => {
		setUserDeck(userDeck.filter((id) => id !== card.id));
	};

	const handleExportDeck = () => {
		const deckData = {
			name: activeDeck.id === "custom" ? customDeckName : activeDeck.name,
			description:
				activeDeck.id === "custom" ? customDeckDesc : activeDeck.description,
			cards: activeDeck.id === "custom" ? userDeck : activeDeck.cards,
		};

		// Create downloadable JSON file
		const dataStr = JSON.stringify(deckData, null, 2);
		const dataUri =
			"data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
		const exportName = `${deckData.name
			.toLowerCase()
			.replace(/\s+/g, "-")}.json`;

		const linkElement = document.createElement("a");
		linkElement.setAttribute("href", dataUri);
		linkElement.setAttribute("download", exportName);
		linkElement.click();
	};

	const handleCardSelect = (card: Card) => {
		setSelectedCard(card);
		setIsCardDetailOpen(true);
	};

	const handleDeckSelect = (deckId: string) => {
		setActiveDeckId(deckId);

		// Switch to editor view
		setViewMode("editor");
	};

	const handleSaveDeck = (name: string, description: string) => {
		if (activeDeckId === "custom") {
			setCustomDeckName(name);
			setCustomDeckDesc(description);
		}
	};

	// Get full card objects for the active deck cards
	const getActiveDeckCards = (): Card[] => {
		const cardIds = activeDeckId === "custom" ? userDeck : viewingDeckCards;
		return cardIds
			.map((id) => getCardById(id))
			.filter((card): card is Card => card !== undefined);
	};

	// Render content based on active tab
	const renderTabContent = () => {
		if (activeTab === "decks") {
			if (viewMode === "editor") {
				return (
					<DeckEditor
						cards={getActiveDeckCards()}
						deckName={activeDeck.name}
						deckDescription={activeDeck.description}
						onRemoveCard={handleRemoveFromDeck}
						onSelectCard={handleCardSelect}
						onExportDeck={handleExportDeck}
						onSaveDeck={handleSaveDeck}
						onGoBack={() => setViewMode("list")}
						onAddToDeck={handleAddToDeck}
						cardsInDeck={getActiveDeckCards().map((card) => card.id)}
						isCustomDeck={activeDeckId === "custom"}
					/>
				);
			} else {
				return (
					<DeckList
						decks={allDecks}
						activeDeckId={activeDeckId}
						onSelectDeck={handleDeckSelect}
					/>
				);
			}
		} else {
			return (
				<>
					<PageHeader>
						<PageTitle>
							Card <span className="highlight">Collection</span>
						</PageTitle>
						<PageDescription>
							Browse through all my projects, skills, and experiences. Add cards
							to your collection to build your own view of my portfolio.
						</PageDescription>
					</PageHeader>

					<CardGrid
						cards={getCards()}
						onSelectCard={handleCardSelect}
						cardsInDeck={userDeck}
						onAddToDeck={handleAddToDeck}
						onRemoveFromDeck={handleRemoveFromDeck}
					/>
				</>
			);
		}
	};

	return (
		<>
			<CollectionLayout
				activeTab={activeTab}
				onTabChange={setActiveTab}
				hideSidebar={activeTab === "decks" && viewMode === "editor"}
			>
				{renderTabContent()}

				<Footer />
			</CollectionLayout>

			<ModalDrawer
				isOpen={isCardDetailOpen}
				onClose={() => setIsCardDetailOpen(false)}
			>
				{selectedCard && (
					<CardDetail
						card={selectedCard}
						onAddToDeck={() => handleAddToDeck(selectedCard)}
						onRemoveFromDeck={() => handleRemoveFromDeck(selectedCard)}
						isInDeck={userDeck.includes(selectedCard.id)}
						onRelationClick={(projectCard) => {
							setSelectedCard(projectCard);
						}}
					/>
				)}
			</ModalDrawer>
		</>
	);
};

export default CollectionPage;
