# Portfolio V2: Card Game Edition

A portfolio website reimagined as an interactive card game, inspired by card deck builders like Legends of Runeterra and Hearthstone.

## Concept

Each project, skill, or experience is represented as a card in a deck. Visitors can browse the card collection, view detailed information about each card, and build their own view of who I am by adding cards to a personalized deck.

## Features

- Interactive card collection that showcases projects, skills, and experiences
- Card detail view with comprehensive information
- Deck building functionality to create a personalized portfolio view
- Filterable card collection by type (projects, skills, experiences)
- Responsive design that works on all devices
- Smooth animations powered by Framer Motion

## Technologies Used

- React
- TypeScript
- Styled Components
- Framer Motion
- React Router

## Installation and Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Build for production:
   ```
   npm run build
   ```
5. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components for different routes
- `/src/data`: Data models and sample card data
- `/src/styles`: Global styles and theme
- `/src/hooks`: Custom React hooks
- `/src/assets`: Static assets like images

## Customization

To customize this portfolio with your own information:

1. Edit the card data in `src/data/cardData.ts`
2. Add your own images to the `public/images` directory
3. Update the homepage URL in `package.json` to point to your GitHub Pages URL

## Deployment

This project is configured for deployment on GitHub Pages. To deploy:

```
npm run deploy
```

## License

This project is open source and available under the MIT License.

## Acknowledgements

- Inspired by card games like Legends of Runeterra and Hearthstone
- Built with React and modern web technologies
