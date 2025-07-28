import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils/responsive";
import { Card, Deck, CardType, Stats } from "../types";
import CardComponent from "../components/Card";
import API from "../services/api";

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--spacing-xl);
  height: 100%;
  padding: var(--spacing-lg);
  overflow: hidden;
  grid-area: main-content;

  ${media.lg} {
    grid-template-columns: 1fr 350px;
    gap: var(--spacing-lg);
  }

  ${media.md} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: auto;
    overflow: auto;
  }
`;

const EditorPanel = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  overflow-y: auto;
  backdrop-filter: blur(10px);

  ${media.md} {
    order: 2;
    max-height: 600px;
  }
`;

const PreviewPanel = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  ${media.md} {
    order: 1;
    min-height: 400px;
  }
`;

const Section = styled.div`
  margin-bottom: var(--spacing-xl);

  h3 {
    color: var(--color-text-primary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);

  label {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: var(--spacing-xs);
  }

  label.required::after {
    content: " *";
    color: #e74c3c;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: var(--spacing-sm);
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text-primary);
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 2px rgba(86, 204, 242, 0.2);
    }

    &::placeholder {
      color: var(--color-text-secondary);
      opacity: 0.7;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

const StatInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);

  label {
    font-size: 0.8rem;
    text-align: center;
  }

  input {
    width: 60px;
    text-align: center;
    padding: var(--spacing-xs);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
`;

const Tag = styled.span`
  background: var(--color-accent);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.7rem;
    padding: 0;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const TagDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const TagOption = styled.div`
  padding: var(--spacing-sm);
  cursor: pointer;
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border);

  &:hover {
    background: var(--color-accent);
    color: white;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TagInputContainer = styled.div`
  position: relative;
  display: flex;
  gap: var(--spacing-sm);
`;

const ErrorDisplay = styled.div`
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  color: #e74c3c;
  font-size: 0.9rem;

  ul {
    margin: 0;
    padding-left: var(--spacing-md);
  }

  li {
    margin-bottom: var(--spacing-xs);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  ${media.sm} {
    flex-direction: column;
  }
`;

const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>`
  padding: var(--spacing-sm) var(--spacing-lg);
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          background: var(--color-accent);
          color: white;
          &:hover {
            background: var(--color-accent-hover);
            transform: translateY(-2px);
          }
        `;
      case "secondary":
        return `
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
          &:hover {
            border-color: var(--color-accent);
            color: var(--color-accent);
          }
        `;
      case "danger":
        return `
          background: #e74c3c;
          color: white;
          &:hover {
            background: #c0392b;
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: var(--color-accent);
          color: white;
          &:hover {
            background: var(--color-accent-hover);
            transform: translateY(-2px);
          }
        `;
    }
  }}
`;

const DeckSelector = styled.div`
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  h4 {
    color: var(--color-text-primary);
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
  }

  select {
    width: 100%;
    margin-bottom: var(--spacing-sm);
  }
`;

const PreviewCard = styled.div`
  transform: scale(0.8);
  transform-origin: center;

  ${media.md} {
    transform: scale(0.7);
  }

  ${media.sm} {
    transform: scale(0.6);
  }
`;

const EmptyPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-secondary);
  text-align: center;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
  }

  h3 {
    margin-bottom: var(--spacing-sm);
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const DetailsPreview = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  max-height: 300px;
  overflow-y: auto;

  h4 {
    color: var(--color-accent);
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .detail-item {
    margin-bottom: var(--spacing-sm);

    .label {
      color: var(--color-text-secondary);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .value {
      color: var(--color-text-primary);
      font-size: 0.9rem;
      margin-top: 2px;
    }
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .link-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xs);
    background: rgba(0, 0, 0, 0.2);
    border-radius: var(--radius-sm);

    .link-label {
      color: var(--color-accent);
      font-weight: 600;
    }

    .link-url {
      color: var(--color-text-secondary);
      font-size: 0.8rem;
    }
  }

  .achievements-list {
    list-style: none;
    padding: 0;

    li {
      color: var(--color-text-primary);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-xs);
      padding-left: var(--spacing-sm);
      position: relative;

      &::before {
        content: "•";
        color: var(--color-accent);
        position: absolute;
        left: 0;
      }
    }
  }
`;

const EditorPage: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<string>("");
  const [card, setCard] = useState<Partial<Card>>({
    title: "",
    description: "",
    type: CardType.PROJECT,
    tags: [],
    imageUrl: "",
    isFeatured: false,
    stats: {
      [Stats.CREATIVITY]: 3,
      [Stats.IMPACT]: 3,
      [Stats.DIFFICULTY]: 3,
    },
    projectDetails: {
      duration: "",
      technologies: [],
      role: "",
      outcomes: [],
    },
  });

  const [newTag, setNewTag] = useState("");
  const [newTechnology, setNewTechnology] = useState("");
  const [newOutcome, setNewOutcome] = useState("");
  const [existingTags, setExistingTags] = useState<string[]>([]);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [newLinkLabel, setNewLinkLabel] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [allCards, setAllCards] = useState<Card[]>([]);
  const [showRelatedProjectsDropdown, setShowRelatedProjectsDropdown] =
    useState(false);
  const [newRelatedProject, setNewRelatedProject] = useState("");

  useEffect(() => {
    loadDecks();
    loadExistingTags();
    loadAllCards();
  }, []);

  const loadDecks = async () => {
    try {
      const response = await API.get<Deck[]>("/decks");
      if (response.ok) {
        setDecks(response.data);
      }
    } catch (error) {
      console.error("Failed to load decks:", error);
    }
  };

  const loadExistingTags = async () => {
    try {
      const response = await API.get<Card[]>("/cards");
      if (response.ok) {
        const allTags = response.data.flatMap((card) => card.tags || []);
        const uniqueTags = Array.from(new Set(allTags)).sort();
        setExistingTags(uniqueTags);
      }
    } catch (error) {
      console.error("Failed to load existing tags:", error);
    }
  };

  const loadAllCards = async () => {
    try {
      const response = await API.get<Card[]>("/cards");
      if (response.ok) {
        setAllCards(response.data);
      }
    } catch (error) {
      console.error("Failed to load all cards:", error);
    }
  };

  const handleCardChange = (field: string, value: any) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStatsChange = (stat: string, value: number) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      stats: {
        ...prev.stats,
        [stat]: Math.max(1, Math.min(5, value)),
      } as any,
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !card.tags?.includes(newTag.trim())) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()],
      }));
      setNewTag("");
      setShowTagDropdown(false);
    }
  };

  const selectExistingTag = (tag: string) => {
    if (!card.tags?.includes(tag)) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        tags: [...(prev.tags || []), tag],
      }));
    }
    setShowTagDropdown(false);
    setNewTag("");
  };

  const filteredTags = existingTags.filter(
    (tag) =>
      tag.toLowerCase().includes(newTag.toLowerCase()) &&
      !card.tags?.includes(tag)
  );

  const removeTag = (tagToRemove: string) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      tags: prev.tags?.filter((tag: string) => tag !== tagToRemove) || [],
    }));
  };

  const addTechnology = () => {
    if (
      newTechnology.trim() &&
      !card.projectDetails?.technologies.includes(newTechnology.trim())
    ) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        projectDetails: {
          ...prev.projectDetails!,
          technologies: [
            ...(prev.projectDetails?.technologies || []),
            newTechnology.trim(),
          ],
        },
      }));
      setNewTechnology("");
    }
  };

  const removeTechnology = (techToRemove: string) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      projectDetails: {
        ...prev.projectDetails!,
        technologies:
          prev.projectDetails?.technologies.filter(
            (tech: string) => tech !== techToRemove
          ) || [],
      },
    }));
  };

  const addOutcome = () => {
    if (newOutcome.trim()) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        projectDetails: {
          ...prev.projectDetails!,
          outcomes: [
            ...(prev.projectDetails?.outcomes || []),
            newOutcome.trim(),
          ],
        },
      }));
      setNewOutcome("");
    }
  };

  const removeOutcome = (index: number) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      projectDetails: {
        ...prev.projectDetails!,
        outcomes:
          prev.projectDetails?.outcomes.filter(
            (_: any, i: number) => i !== index
          ) || [],
      },
    }));
  };

  const [newAchievement, setNewAchievement] = useState("");

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        experienceDetails: {
          ...prev.experienceDetails!,
          achievements: [
            ...(prev.experienceDetails?.achievements || []),
            newAchievement.trim(),
          ],
        },
      }));
      setNewAchievement("");
    }
  };

  const removeAchievement = (index: number) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      experienceDetails: {
        ...prev.experienceDetails!,
        achievements:
          prev.experienceDetails?.achievements.filter((_, i) => i !== index) ||
          [],
      },
    }));
  };

  const addLink = () => {
    if (newLinkLabel.trim() && newLinkUrl.trim()) {
      setCard((prev: Partial<Card>) => ({
        ...prev,
        links: [
          ...(prev.links || []),
          { label: newLinkLabel.trim(), url: newLinkUrl.trim() },
        ],
      }));
      setNewLinkLabel("");
      setNewLinkUrl("");
    }
  };

  const removeLink = (index: number) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      links: prev.links?.filter((_, i) => i !== index) || [],
    }));
  };

  const addRelatedProject = () => {
    if (newRelatedProject.trim()) {
      const selectedCard = allCards.find((c) => c._id === newRelatedProject);
      if (selectedCard) {
        setCard((prev: Partial<Card>) => ({
          ...prev,
          skillDetails: {
            ...prev.skillDetails!,
            relatedProjects: [
              ...(prev.skillDetails?.relatedProjects || []),
              selectedCard,
            ],
          },
        }));
        setNewRelatedProject("");
        setShowRelatedProjectsDropdown(false);
      }
    }
  };

  const removeRelatedProject = (projectId: string) => {
    setCard((prev: Partial<Card>) => ({
      ...prev,
      skillDetails: {
        ...prev.skillDetails!,
        relatedProjects:
          prev.skillDetails?.relatedProjects.filter(
            (p) => p._id !== projectId
          ) || [],
      },
    }));
  };

  const filteredProjectCards = allCards.filter(
    (card) =>
      card.type === CardType.PROJECT &&
      !card.skillDetails?.relatedProjects?.some((p) => p._id === card._id)
  );

  const validateCard = (): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Basic required fields
    if (!card.title?.trim()) errors.push("Title is required");
    if (!card.description?.trim()) errors.push("Description is required");
    if (!card.tags || card.tags.length === 0)
      errors.push("At least one tag is required");

    // Type-specific validation
    if (card.type === CardType.PROJECT) {
      if (!card.projectDetails?.duration?.trim())
        errors.push("Project duration is required");
      if (
        !card.projectDetails?.technologies ||
        card.projectDetails.technologies.length === 0
      ) {
        errors.push("At least one technology is required");
      }
      if (
        !card.projectDetails?.outcomes ||
        card.projectDetails.outcomes.length === 0
      ) {
        errors.push("At least one outcome is required");
      }
    }

    if (card.type === CardType.SKILL) {
      if (!card.skillDetails?.proficiency)
        errors.push("Proficiency level is required");
      if (!card.skillDetails?.yearsOfExperience)
        errors.push("Years of experience is required");
    }

    if (card.type === CardType.EXPERIENCE) {
      if (!card.experienceDetails?.company?.trim())
        errors.push("Company is required");
      if (!card.experienceDetails?.position?.trim())
        errors.push("Position is required");
      if (!card.experienceDetails?.location?.trim())
        errors.push("Location is required");
      if (
        !card.experienceDetails?.achievements ||
        card.experienceDetails.achievements.length === 0
      ) {
        errors.push("At least one achievement is required");
      }
    }

    return { isValid: errors.length === 0, errors };
  };

  const saveCard = async () => {
    const validation = validateCard();
    setErrors(validation.errors);

    if (!validation.isValid) {
      return;
    }

    try {
      const cardData = {
        ...card,
      };

      const response = await API.post<Card>("/cards", cardData);
      if (response.ok) {
        // Add to selected deck if one is selected
        if (selectedDeck) {
          const deckResponse = await API.put<Deck>(`/decks/${selectedDeck}`, {
            cards: [
              ...(decks.find((d: Deck) => d._id === selectedDeck)?.cards || []),
              response.data,
            ],
          });
          if (deckResponse.ok) {
            await loadDecks();
          }
        }

        // Reset form
        setCard({
          title: "",
          description: "",
          type: CardType.PROJECT,
          tags: [],
          imageUrl: "",
          isFeatured: false,
          stats: {
            [Stats.CREATIVITY]: 3,
            [Stats.IMPACT]: 3,
            [Stats.DIFFICULTY]: 3,
          },
          projectDetails: {
            duration: "",
            technologies: [],
            role: "",
            outcomes: [],
          },
        });
      }
    } catch (error) {
      console.error("Failed to save card:", error);
    }
  };

  const createNewDeck = async () => {
    const deckName = prompt("Enter deck name:");
    if (deckName) {
      try {
        const response = await API.post<Deck>("/decks", {
          title: deckName,
          description: "",
          cards: [],
        });
        if (response.ok) {
          await loadDecks();
          setSelectedDeck(response.data._id);
        }
      } catch (error) {
        console.error("Failed to create deck:", error);
      }
    }
  };

  const getStatsForType = (type: CardType) => {
    switch (type) {
      case CardType.PROJECT:
        return [Stats.CREATIVITY, Stats.IMPACT, Stats.DIFFICULTY];
      case CardType.SKILL:
        return [Stats.MASTERY, Stats.USAGE, Stats.COMBO];
      case CardType.EXPERIENCE:
        return [Stats.COLLABORATION, Stats.IMPACT, Stats.GROWTH];
      default:
        return [Stats.CREATIVITY, Stats.IMPACT, Stats.DIFFICULTY];
    }
  };

  const previewCard: Card = {
    _id: "preview",
    title: card.title || "Card Title",
    description: card.description || "Card description goes here...",
    type: card.type || CardType.PROJECT,
    tags: card.tags || [],
    imageUrl: card.imageUrl,
    isFeatured: card.isFeatured || false,
    stats: card.stats || {
      [Stats.CREATIVITY]: 3,
      [Stats.IMPACT]: 3,
      [Stats.DIFFICULTY]: 3,
    },
    projectDetails: card.projectDetails,
    skillDetails: card.skillDetails,
    experienceDetails: card.experienceDetails,
  };

  return (
    <EditorContainer>
      <EditorPanel>
        <Section>
          <h3>Card Editor</h3>

          {errors.length > 0 && (
            <ErrorDisplay>
              <strong>Please fix the following errors:</strong>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </ErrorDisplay>
          )}

          <FormGroup>
            <label className="required">Title</label>
            <input
              type="text"
              value={card.title || ""}
              onChange={(e) => handleCardChange("title", e.target.value)}
              placeholder="Enter card title"
            />
          </FormGroup>

          <FormGroup>
            <label className="required">Description</label>
            <textarea
              value={card.description || ""}
              onChange={(e) => handleCardChange("description", e.target.value)}
              placeholder="Enter card description"
            />
          </FormGroup>

          <FormGroup>
            <label>Card Type</label>
            <select
              value={card.type || CardType.PROJECT}
              onChange={(e) => {
                const newType = e.target.value as CardType;
                handleCardChange("type", newType);
                // Reset stats for new type
                const newStats: any = {};
                getStatsForType(newType).forEach((stat) => {
                  newStats[stat] = 3;
                });

                // Reset details based on card type
                setCard((prev) => ({
                  ...prev,
                  stats: newStats,
                  projectDetails:
                    newType === CardType.PROJECT
                      ? {
                          duration: "",
                          technologies: [],
                          role: "",
                          outcomes: [],
                        }
                      : undefined,
                  skillDetails:
                    newType === CardType.SKILL
                      ? {
                          proficiency: 3,
                          yearsOfExperience: 1,
                          relatedProjects: [],
                        }
                      : undefined,
                  experienceDetails:
                    newType === CardType.EXPERIENCE
                      ? {
                          company: "",
                          position: "",
                          startDate: new Date(),
                          endDate: "Present",
                          location: "",
                          achievements: [],
                        }
                      : undefined,
                }));
              }}
            >
              <option value={CardType.PROJECT}>Project</option>
              <option value={CardType.SKILL}>Skill</option>
              <option value={CardType.EXPERIENCE}>Experience</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label>Image URL</label>
            <input
              type="text"
              value={card.imageUrl || ""}
              onChange={(e) => handleCardChange("imageUrl", e.target.value)}
              placeholder="Enter image URL"
            />
          </FormGroup>

          <FormGroup>
            <label>Featured</label>
            <input
              type="checkbox"
              checked={card.isFeatured || false}
              onChange={(e) => handleCardChange("isFeatured", e.target.checked)}
            />
          </FormGroup>

          <FormGroup>
            <label className="required">Tags</label>
            <TagInputContainer>
              <input
                type="text"
                value={newTag}
                onChange={(e) => {
                  setNewTag(e.target.value);
                  setShowTagDropdown(e.target.value.length > 0);
                }}
                onKeyPress={(e) => e.key === "Enter" && addTag()}
                onFocus={() => setShowTagDropdown(newTag.length > 0)}
                onBlur={() => setTimeout(() => setShowTagDropdown(false), 200)}
                placeholder="Type to search existing tags or create new"
                style={{ flex: 1 }}
              />
              <Button onClick={addTag}>Add</Button>
            </TagInputContainer>

            {showTagDropdown && filteredTags.length > 0 && (
              <TagDropdown>
                {filteredTags.map((tag) => (
                  <TagOption key={tag} onClick={() => selectExistingTag(tag)}>
                    {tag}
                  </TagOption>
                ))}
              </TagDropdown>
            )}

            <TagsContainer>
              {card.tags?.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                  <button onClick={() => removeTag(tag)}>×</button>
                </Tag>
              ))}
            </TagsContainer>
          </FormGroup>

          <FormGroup>
            <label>Links</label>
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-sm)",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <input
                type="text"
                value={newLinkLabel}
                onChange={(e) => setNewLinkLabel(e.target.value)}
                placeholder="Link label"
                style={{ flex: 1 }}
              />
              <input
                type="text"
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
                placeholder="URL"
                style={{ flex: 1 }}
              />
              <Button onClick={addLink}>Add</Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-xs)",
              }}
            >
              {card.links?.map((link, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "var(--spacing-xs)",
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <span
                    style={{ color: "var(--color-accent)", fontWeight: "600" }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.8rem",
                    }}
                  >
                    {link.url}
                  </span>
                  <button
                    onClick={() => removeLink(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#e74c3c",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </FormGroup>

          <FormGroup>
            <label>Stats</label>
            <StatsGrid>
              {getStatsForType(card.type || CardType.PROJECT).map((stat) => (
                <StatInput key={stat}>
                  <label>{stat}</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={(card.stats as any)?.[stat] || 3}
                    onChange={(e) =>
                      handleStatsChange(stat, parseInt(e.target.value))
                    }
                  />
                </StatInput>
              ))}
            </StatsGrid>
          </FormGroup>

          {card.type === CardType.PROJECT && (
            <Section>
              <h3>Project Details</h3>

              <FormGroup>
                <label className="required">Duration</label>
                <input
                  type="text"
                  value={card.projectDetails?.duration || ""}
                  onChange={(e) =>
                    handleCardChange("projectDetails", {
                      ...card.projectDetails,
                      duration: e.target.value,
                    })
                  }
                  placeholder="e.g., 3 months"
                />
              </FormGroup>

              <FormGroup>
                <label>Role</label>
                <input
                  type="text"
                  value={card.projectDetails?.role || ""}
                  onChange={(e) =>
                    handleCardChange("projectDetails", {
                      ...card.projectDetails,
                      role: e.target.value,
                    })
                  }
                  placeholder="e.g., Lead Developer"
                />
              </FormGroup>

              <FormGroup>
                <label className="required">Technologies</label>
                <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                  <input
                    type="text"
                    value={newTechnology}
                    onChange={(e) => setNewTechnology(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTechnology()}
                    placeholder="Add technology"
                  />
                  <Button onClick={addTechnology}>Add</Button>
                </div>
                <TagsContainer>
                  {card.projectDetails?.technologies.map((tech, index) => (
                    <Tag key={index}>
                      {tech}
                      <button onClick={() => removeTechnology(tech)}>×</button>
                    </Tag>
                  ))}
                </TagsContainer>
              </FormGroup>

              <FormGroup>
                <label className="required">Outcomes</label>
                <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                  <input
                    type="text"
                    value={newOutcome}
                    onChange={(e) => setNewOutcome(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addOutcome()}
                    placeholder="Add outcome"
                  />
                  <Button onClick={addOutcome}>Add</Button>
                </div>
                <TagsContainer>
                  {card.projectDetails?.outcomes.map((outcome, index) => (
                    <Tag key={index}>
                      {typeof outcome === "string" ? outcome : outcome.label}
                      <button onClick={() => removeOutcome(index)}>×</button>
                    </Tag>
                  ))}
                </TagsContainer>
              </FormGroup>
            </Section>
          )}

          {card.type === CardType.SKILL && (
            <Section>
              <h3>Skill Details</h3>

              <FormGroup>
                <label className="required">Proficiency Level (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={card.skillDetails?.proficiency || 3}
                  onChange={(e) =>
                    handleCardChange("skillDetails", {
                      ...card.skillDetails,
                      proficiency: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>

              <FormGroup>
                <label className="required">Years of Experience</label>
                <input
                  type="number"
                  min="0"
                  value={card.skillDetails?.yearsOfExperience || 1}
                  onChange={(e) =>
                    handleCardChange("skillDetails", {
                      ...card.skillDetails,
                      yearsOfExperience: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>

              <FormGroup>
                <label>Related Projects</label>
                <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                  <select
                    value={newRelatedProject}
                    onChange={(e) => {
                      setNewRelatedProject(e.target.value);
                      setShowRelatedProjectsDropdown(e.target.value.length > 0);
                    }}
                    onFocus={() => setShowRelatedProjectsDropdown(true)}
                    onBlur={() =>
                      setTimeout(
                        () => setShowRelatedProjectsDropdown(false),
                        200
                      )
                    }
                    style={{ flex: 1 }}
                  >
                    <option value="">Select a project...</option>
                    {filteredProjectCards.map((projectCard) => (
                      <option key={projectCard._id} value={projectCard._id}>
                        {projectCard.title}
                      </option>
                    ))}
                  </select>
                  <Button onClick={addRelatedProject}>Add</Button>
                </div>
                <TagsContainer>
                  {card.skillDetails?.relatedProjects.map((project, index) => (
                    <Tag key={index}>
                      {project.title}
                      <button onClick={() => removeRelatedProject(project._id)}>
                        ×
                      </button>
                    </Tag>
                  ))}
                </TagsContainer>
              </FormGroup>
            </Section>
          )}

          {card.type === CardType.EXPERIENCE && (
            <Section>
              <h3>Experience Details</h3>

              <FormGroup>
                <label className="required">Company</label>
                <input
                  type="text"
                  value={card.experienceDetails?.company || ""}
                  onChange={(e) =>
                    handleCardChange("experienceDetails", {
                      ...card.experienceDetails,
                      company: e.target.value,
                    })
                  }
                  placeholder="Enter company name"
                />
              </FormGroup>

              <FormGroup>
                <label className="required">Position</label>
                <input
                  type="text"
                  value={card.experienceDetails?.position || ""}
                  onChange={(e) =>
                    handleCardChange("experienceDetails", {
                      ...card.experienceDetails,
                      position: e.target.value,
                    })
                  }
                  placeholder="Enter job title"
                />
              </FormGroup>

              <FormGroup>
                <label>Start Date</label>
                <input
                  type="date"
                  value={
                    card.experienceDetails?.startDate
                      ? new Date(card.experienceDetails.startDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    handleCardChange("experienceDetails", {
                      ...card.experienceDetails,
                      startDate: new Date(e.target.value),
                    })
                  }
                />
              </FormGroup>

              <FormGroup>
                <label>End Date</label>
                <div
                  style={{
                    display: "flex",
                    gap: "var(--spacing-sm)",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="date"
                    value={
                      card.experienceDetails?.endDate &&
                      card.experienceDetails.endDate !== "Present"
                        ? new Date(card.experienceDetails.endDate)
                            .toISOString()
                            .split("T")[0]
                        : ""
                    }
                    onChange={(e) =>
                      handleCardChange("experienceDetails", {
                        ...card.experienceDetails,
                        endDate: new Date(e.target.value),
                      })
                    }
                    disabled={card.experienceDetails?.endDate === "Present"}
                  />
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--spacing-xs)",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={card.experienceDetails?.endDate === "Present"}
                      onChange={(e) =>
                        handleCardChange("experienceDetails", {
                          ...card.experienceDetails,
                          endDate: e.target.checked ? "Present" : new Date(),
                        })
                      }
                    />
                    Present
                  </label>
                </div>
              </FormGroup>

              <FormGroup>
                <label className="required">Location</label>
                <input
                  type="text"
                  value={card.experienceDetails?.location || ""}
                  onChange={(e) =>
                    handleCardChange("experienceDetails", {
                      ...card.experienceDetails,
                      location: e.target.value,
                    })
                  }
                  placeholder="Enter location"
                />
              </FormGroup>

              <FormGroup>
                <label className="required">Achievements</label>
                <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                  <input
                    type="text"
                    value={newAchievement}
                    onChange={(e) => setNewAchievement(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addAchievement()}
                    placeholder="Add achievement"
                    style={{ flex: 1 }}
                  />
                  <Button onClick={addAchievement}>Add</Button>
                </div>
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "var(--radius-sm)",
                    padding: "var(--spacing-sm)",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {card.experienceDetails?.achievements.length === 0 ? (
                    <div
                      style={{
                        color: "var(--color-text-secondary)",
                        fontStyle: "italic",
                      }}
                    >
                      No achievements added yet
                    </div>
                  ) : (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {card.experienceDetails?.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "var(--spacing-xs) 0",
                              borderBottom:
                                index <
                                (card.experienceDetails?.achievements.length ||
                                  0) -
                                  1
                                  ? "1px solid rgba(255, 255, 255, 0.1)"
                                  : "none",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--color-text-primary)",
                                fontSize: "0.9rem",
                                paddingLeft: "var(--spacing-sm)",
                                position: "relative",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--color-accent)",
                                  position: "absolute",
                                  left: 0,
                                }}
                              >
                                •
                              </span>
                              {achievement}
                            </span>
                            <button
                              onClick={() => removeAchievement(index)}
                              style={{
                                background: "none",
                                border: "none",
                                color: "#e74c3c",
                                cursor: "pointer",
                                fontSize: "0.8rem",
                                padding: "2px 6px",
                              }}
                            >
                              ×
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </FormGroup>
            </Section>
          )}

          <ButtonGroup>
            <Button onClick={saveCard}>Save Card</Button>
            <Button
              variant="secondary"
              onClick={() => window.location.reload()}
            >
              Reset
            </Button>
          </ButtonGroup>
        </Section>

        <DeckSelector>
          <h4>Add to Deck</h4>
          <select
            value={selectedDeck}
            onChange={(e) => setSelectedDeck(e.target.value)}
          >
            <option value="">Select a deck...</option>
            {decks.map((deck) => (
              <option key={deck._id} value={deck._id}>
                {deck.title}
              </option>
            ))}
          </select>
          <Button variant="secondary" onClick={createNewDeck}>
            Create New Deck
          </Button>
        </DeckSelector>
      </EditorPanel>

      <PreviewPanel>
        {card.title || card.description ? (
          <>
            <PreviewCard>
              <CardComponent card={previewCard} />
            </PreviewCard>

            <DetailsPreview>
              <h4>Card Details</h4>

              {card.links && card.links.length > 0 && (
                <div className="detail-item">
                  <div className="label">Links</div>
                  <div className="links-list">
                    {card.links.map((link, index) => (
                      <div key={index} className="link-item">
                        <span className="link-label">{link.label}</span>
                        <span className="link-url">{link.url}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {card.type === CardType.PROJECT && card.projectDetails && (
                <>
                  <div className="detail-item">
                    <div className="label">Duration</div>
                    <div className="value">
                      {card.projectDetails.duration || "Not specified"}
                    </div>
                  </div>
                  {card.projectDetails.role && (
                    <div className="detail-item">
                      <div className="label">Role</div>
                      <div className="value">{card.projectDetails.role}</div>
                    </div>
                  )}
                  {card.projectDetails.technologies &&
                    card.projectDetails.technologies.length > 0 && (
                      <div className="detail-item">
                        <div className="label">Technologies</div>
                        <div className="value">
                          {card.projectDetails.technologies.join(", ")}
                        </div>
                      </div>
                    )}
                  {card.projectDetails.outcomes &&
                    card.projectDetails.outcomes.length > 0 && (
                      <div className="detail-item">
                        <div className="label">Outcomes</div>
                        <div className="value">
                          {card.projectDetails.outcomes.map(
                            (outcome, index) => (
                              <div key={index}>
                                {typeof outcome === "string"
                                  ? outcome
                                  : outcome.label}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </>
              )}

              {card.type === CardType.SKILL && card.skillDetails && (
                <>
                  <div className="detail-item">
                    <div className="label">Proficiency</div>
                    <div className="value">
                      {card.skillDetails.proficiency}/5
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Years of Experience</div>
                    <div className="value">
                      {card.skillDetails.yearsOfExperience} year
                      {card.skillDetails.yearsOfExperience !== 1 ? "s" : ""}
                    </div>
                  </div>
                  {card.skillDetails.relatedProjects &&
                    card.skillDetails.relatedProjects.length > 0 && (
                      <div className="detail-item">
                        <div className="label">Related Projects</div>
                        <div className="value">
                          {card.skillDetails.relatedProjects.map(
                            (project, index) => (
                              <div key={index}>{project.title}</div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </>
              )}

              {card.type === CardType.EXPERIENCE && card.experienceDetails && (
                <>
                  <div className="detail-item">
                    <div className="label">Company</div>
                    <div className="value">
                      {card.experienceDetails.company || "Not specified"}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Position</div>
                    <div className="value">
                      {card.experienceDetails.position || "Not specified"}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Location</div>
                    <div className="value">
                      {card.experienceDetails.location || "Not specified"}
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="label">Duration</div>
                    <div className="value">
                      {card.experienceDetails.startDate
                        ? new Date(
                            card.experienceDetails.startDate
                          ).toLocaleDateString()
                        : "Not specified"}{" "}
                      -
                      {card.experienceDetails.endDate === "Present"
                        ? " Present"
                        : card.experienceDetails.endDate
                        ? new Date(
                            card.experienceDetails.endDate
                          ).toLocaleDateString()
                        : "Not specified"}
                    </div>
                  </div>
                  {card.experienceDetails.achievements &&
                    card.experienceDetails.achievements.length > 0 && (
                      <div className="detail-item">
                        <div className="label">Achievements</div>
                        <ul className="achievements-list">
                          {card.experienceDetails.achievements.map(
                            (achievement, index) => (
                              <li key={index}>{achievement}</li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </>
              )}
            </DetailsPreview>
          </>
        ) : (
          <EmptyPreview>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3>Card Preview</h3>
            <p>Start editing to see your card preview here</p>
          </EmptyPreview>
        )}
      </PreviewPanel>
    </EditorContainer>
  );
};

export default EditorPage;
