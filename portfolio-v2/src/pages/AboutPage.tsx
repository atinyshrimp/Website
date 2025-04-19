import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl);
`;

const PageTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;

  .highlight {
    color: var(--color-accent);
  }
`;

const Section = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--color-accent);
    margin-top: var(--spacing-sm);
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
`;

const CardExplanation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
`;

const CardType = styled.div`
  flex: 1;
  min-width: 220px;
  background-color: var(--color-bg-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-top: 5px solid ${({ color }) => color};
`;

const CardTypeTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
`;

const CardTypeDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xxl);
`;

const CTAButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-accent);
  color: var(--color-bg-primary);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(97, 218, 251, 0.4);
    color: var(--color-bg-primary);
  }
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About the <span className="highlight">Card Portfolio</span>
      </PageTitle>

      <Section>
        <SectionTitle>The Concept</SectionTitle>
        <Paragraph>
          Welcome to the portfolio card game! This project reimagines the
          traditional portfolio website as an interactive card collection,
          inspired by popular card games like Hearthstone and Legends of
          Runeterra.
        </Paragraph>
        <Paragraph>
          Instead of scrolling through static pages, you can explore my skills,
          projects, and experiences as collectible cards that you can browse,
          filter, and add to your own personal deck. This approach creates a
          more engaging and personalized way to learn about my work and
          background.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Paragraph>
          Each card represents a different aspect of my professional profile.
          Browse through the collection, click on cards to view detailed
          information, and add your favorites to your deck to create your own
          personalized view of my portfolio.
        </Paragraph>

        <CardExplanation>
          <CardType color="var(--color-project)">
            <CardTypeTitle>Project Cards</CardTypeTitle>
            <CardTypeDescription>
              These cards showcase the notable projects I've worked on,
              including technologies used, my role, and key outcomes.
            </CardTypeDescription>
          </CardType>

          <CardType color="var(--color-skill)">
            <CardTypeTitle>Skill Cards</CardTypeTitle>
            <CardTypeDescription>
              These cards represent my technical and professional skills,
              including proficiency levels and years of experience.
            </CardTypeDescription>
          </CardType>

          <CardType color="var(--color-experience)">
            <CardTypeTitle>Experience Cards</CardTypeTitle>
            <CardTypeDescription>
              These cards highlight my professional experience, including
              positions held, companies, and key achievements.
            </CardTypeDescription>
          </CardType>
        </CardExplanation>
      </Section>

      <Section>
        <SectionTitle>Why a Card Game?</SectionTitle>
        <Paragraph>
          I created this portfolio format because I wanted to offer a more
          interactive and engaging way to present my work. The card game
          metaphor allows you to actively explore and discover different aspects
          of my skills and experience, rather than simply reading a
          chronological resume or portfolio.
        </Paragraph>
        <Paragraph>
          Just as in card games where players build decks that reflect their
          play style and strategy, you can build a "deck" of my skills and
          experiences that resonates with what you're looking for. It transforms
          the portfolio viewing experience from passive consumption to active
          exploration.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>The Technology</SectionTitle>
        <Paragraph>
          This portfolio is built with React, TypeScript, Styled Components, and
          Framer Motion. I focused on creating smooth animations and transitions
          to enhance the card game feel while maintaining accessibility and
          performance.
        </Paragraph>
        <Paragraph>
          The project is open source, and you can view the code on GitHub. Feel
          free to adapt this concept for your own portfolio if you find it
          inspiring!
        </Paragraph>
      </Section>

      <ButtonContainer>
        <CTAButton to="/collection">Explore the Collection</CTAButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default AboutPage;
