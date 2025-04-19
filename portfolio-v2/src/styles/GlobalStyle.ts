import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Card Rarity Colors */
    --color-common: #6E7271;
    --color-rare: #3498db;
    --color-epic: #9b59b6;
    --color-legendary: #f1c40f;
    
    /* Card Type Colors */
    --color-project: #2ecc71;
    --color-skill: #e74c3c;
    --color-experience: #f39c12;
    
    /* Base Colors - Updated for darker fantasy theme */
    --color-bg-primary: #0D1117;
    --color-bg-secondary: #161C24;
    --color-text-primary: #F0F6FC;
    --color-text-secondary: #8B949E;
    --color-accent: #56CCF2;
    --color-border: #30363D;
    
    /* Panel Colors */
    --color-panel-bg: rgba(22, 28, 36, 0.8);
    --color-panel-border: #30363D;
    --color-panel-highlight: #56CCF2;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    
    /* Card Dimensions */
    --card-width: 180px;
    --card-height: 250px;
    --card-border-radius: var(--radius-sm);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Montserrat', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-bg-primary);
    background-image: url('/images/bg-pattern.png');
    background-size: cover;
    background-attachment: fixed;
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #81ecff;
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    background-color: rgba(86, 204, 242, 0.1);
    color: var(--color-text-primary);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    
    &:hover {
      background-color: rgba(86, 204, 242, 0.2);
      border-color: var(--color-accent);
      transform: translateY(-2px);
    }
    
    &:disabled {
      background-color: rgba(139, 148, 158, 0.1);
      border-color: var(--color-border);
      color: var(--color-text-secondary);
      cursor: not-allowed;
      transform: translateY(0);
    }
  }
  
  /* Fantasy-style scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #56CCF2, #2F80ED);
    border-radius: 4px;
    border: 1px solid var(--color-border);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #81ecff, #56CCF2);
  }

  /* Fantasy-style selection */
  ::selection {
    background-color: rgba(86, 204, 242, 0.3);
    color: var(--color-accent);
  }
`;

export default GlobalStyle;
