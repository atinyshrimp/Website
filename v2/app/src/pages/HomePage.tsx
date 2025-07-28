import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { breakpoints, media } from "../utils/responsive";
import { Card as CardType } from "../types";
import api from "../services/api";

const HeroSection = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Cyberpunk scanline effect */
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
      rgba(32, 202, 255, 0.02) 2px,
      rgba(32, 202, 255, 0.02) 3px
    );
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }

  ${media.md} {
    padding: var(--spacing-xl) 0;
  }

  ${media.sm} {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.5);

  .highlight {
    color: var(--color-accent);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
      box-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
    }
  }

  ${media.lg} {
    font-size: 3rem;
  }

  ${media.md} {
    font-size: 2.5rem;
  }

  ${media.sm} {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.8;
  position: relative;
  z-index: 2;

  ${media.md} {
    font-size: 1.1rem;
    max-width: 90%;
    margin: 0 auto var(--spacing-lg);
  }

  ${media.sm} {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 2;

  ${media.md} {
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }

  ${media.sm} {
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 80%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(86, 204, 242, 0.2);
  color: var(--color-text-primary);
  border: 1px solid var(--color-accent);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(86, 204, 242, 0.4);
    background-color: rgba(86, 204, 242, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(86, 204, 242, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${media.md} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${media.sm} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SecondaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-text-secondary);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${media.md} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${media.sm} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const FeaturedCardSection = styled.div`
  padding: var(--spacing-xl) 0;
  position: relative;

  ${media.md} {
    padding: var(--spacing-lg) 0;
  }

  ${media.sm} {
    padding: var(--spacing-md) 0;
  }
`;

const FeaturedCardsTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 var(--spacing-md);

  /* Cyberpunk decoration */
  &::before,
  &::after {
    content: "//";
    color: var(--color-accent);
    margin: 0 var(--spacing-sm);
    opacity: 0.6;
  }

  .highlight {
    color: var(--color-accent);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
    }
  }

  ${media.md} {
    font-size: 1.75rem;
    margin-bottom: var(--spacing-md);
  }

  ${media.sm} {
    font-size: 1.5rem;
    width: 90%;

    &::before,
    &::after {
      margin: 0 var(--spacing-xs);
    }
  }
`;

const CardContainer = styled.div`
  position: relative;
  border-radius: var(--radius-md);
  padding: var(--spacing-xl) var(--spacing-lg);

  ${media.md} {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  ${media.sm} {
    padding: var(--spacing-md) var(--spacing-sm);
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  ${media.lg} {
    max-width: 1100px;
    gap: var(--spacing-lg);
  }

  ${media.md} {
    max-width: 100%;
    gap: var(--spacing-md);
  }

  ${media.sm} {
    gap: var(--spacing-sm);
  }
`;

const HomePage: React.FC = () => {
  const [featuredCards, setFeaturedCards] = useState<CardType[]>([]);

  const featuredCardsCount =
    window.innerWidth <= Number(breakpoints["lg"].replace("px", "")) ? 5 : 3;

  async function getFeaturedCards() {
    try {
      const { ok, data, error } = await api.get(
        `/cards/featured?size=${featuredCardsCount}`
      );
      if (!ok) throw new Error(error);
      setFeaturedCards(data as CardType[]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeaturedCards();
  }, []);

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

      <FeaturedCardSection>
        <FeaturedCardsTitle>
          Featured <span className="highlight">Cards</span>
        </FeaturedCardsTitle>

        <CardContainer>
          <CardGrid>
            {featuredCards.map((card) => (
              <Card key={card._id} card={card} />
            ))}
          </CardGrid>
        </CardContainer>
      </FeaturedCardSection>

      <Footer />
    </>
  );
};

export default HomePage;
