import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cards as cardsData } from "../data/cardData";
import Card from "../components/Card";

const HeroSection = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);

  .highlight {
    color: var(--color-accent);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const PrimaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-accent);
  color: var(--color-bg-primary);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(86, 204, 242, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-text-secondary);
  }
`;

const FeaturedCardsTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 1.8rem;

  .highlight {
    color: var(--color-accent);
  }
`;

const HomePage: React.FC = () => {
  // Get featured cards (e.g., first 3 of each type)
  const featuredCards = cardsData.filter((card) => card.isFeatured);

  return (
    <>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to my <span className="highlight">Portfolio</span>
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my skills, projects, and experiences in an interactive
          card-based format inspired by collectible card games.
        </HeroSubtitle>

        <ButtonContainer>
          <PrimaryButton to="/collection">View Card Collection</PrimaryButton>
          <SecondaryButton to="/about">About this Project</SecondaryButton>
        </ButtonContainer>
      </HeroSection>

      <FeaturedCardsTitle>
        Featured <span className="highlight">Cards</span>
      </FeaturedCardsTitle>

      {/* Display just a few featured cards in a grid */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 var(--spacing-lg)",
          backgroundColor: "var(--color-bg-primary)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {featuredCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
