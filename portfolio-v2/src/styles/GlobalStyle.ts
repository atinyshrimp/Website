import { createGlobalStyle } from "styled-components";
import { media } from "../utils/responsive";

const GlobalStyle = createGlobalStyle`
  :root {    
    /* Card Type Colors - Aligned with cyberpunk aesthetic */
    --color-project: #2ecc71;
    --color-skill: #e74c3c;
    --color-experience: #56ccf2;
    
    /* Base Colors - Cyberpunk theme */
    --color-bg-primary: #0D1117;
    --color-bg-secondary: #161C24;
    --color-text-primary: #F0F6FC;
    --color-text-secondary: #8B949E;
    --color-accent:rgb(148, 41, 162);
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
    --card-width: 250px;
    --card-height: 300px;
    --card-border-radius: var(--radius-md);

    --audiowide-font: 'AudioWide', sans-serif;

    /* Responsive spacing adjustments */
    ${media.lg} {
      --spacing-xl: 1.5rem;
      --card-width: 220px;
      --card-height: 270px;
    }

    ${media.md} {
      --spacing-lg: 1.25rem;
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 200px;
      --card-height: 250px;
    }

    ${media.sm} {
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem; 
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 180px;
      --card-height: 230px;
    }
    ${media.phoneLandscape} {
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem; 
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 160px;
      --card-height: 210px;
    }
    ${media.tabletLandscape} {
      --card-width: 170px;
      --card-height: 220px;
    }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Chakra Petch', sans-serif;
    background-color: var(--color-bg-primary);
    background-image: linear-gradient(135deg, rgba(13, 17, 23, 0.5), rgba(18, 24, 36, 0.55)),
      url('https://4kwallpapers.com/images/wallpapers/outrun-neon-dark-background-purple-3840x2160-4523.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    
    /* Subtle grid pattern overlay for cyberpunk feel */
    /* &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      background-image: 
        linear-gradient(rgba(86, 204, 242, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(86, 204, 242, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    } */
  }

  /* Portrait orientation warning for mobile phones */
  .orientation-warning {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-primary);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-xl);
  }

  .orientation-warning h2 {
    color: var(--color-accent);
    margin-bottom: var(--spacing-md);
  }

  .orientation-warning p {
    max-width: 400px;
    margin-bottom: var(--spacing-lg);
  }

  .orientation-warning .icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-lg);
    color: var(--color-accent);
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(90deg); }
  }

  /* Show orientation warning only on mobile phones in portrait mode */
  ${media.phonePortrait} {
    .orientation-warning {
      display: flex;
    }
    .app-content {
      display: none;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Audiowide', sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
    letter-spacing: 0.05em;

    ${media.md} {
      letter-spacing: 0.03em;
    }

    ${media.sm} {
      letter-spacing: 0.02em;
    }
  }

  h1 {
    font-size: 3rem;

    ${media.lg} {
      font-size: 2.5rem;
    }

    ${media.md} {
      font-size: 2rem;
    }

    ${media.sm} {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${media.lg} {
      font-size: 1.75rem;
    }

    ${media.md} {
      font-size: 1.5rem;
    }

    ${media.sm} {
      font-size: 1.25rem;
    }
  }
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #81ecff;
      text-shadow: 0 0 8px rgba(86, 204, 242, 0.5);
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    background-color: rgba(13, 17, 23, 0.8);
    color: var(--color-text-primary);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    overflow: hidden;
    
    /* Cyberpunk-style button */
    &::before {
      content: '';
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
      transition: left 0.5s ease;
    }
    
    &:hover {
      background-color: rgba(18, 24, 36, 0.9);
      border-color: var(--color-accent);
      box-shadow: 0 0 10px rgba(86, 204, 242, 0.3);
      transform: translateY(-2px);
      
      &::before {
        left: 100%;
      }
    }
    
    &:disabled {
      background-color: rgba(139, 148, 158, 0.1);
      border-color: var(--color-border);
      color: var(--color-text-secondary);
      cursor: not-allowed;
      transform: translateY(0);
      
      &::before {
        display: none;
      }
    }

    ${media.sm} {
      font-size: 0.8rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }
  
  /* Cyberpunk-style scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, var(--color-accent), #56CCF2);
    border-radius: 0;
    border: 1px solid var(--color-border);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, var(--color-accent),rgb(84, 29, 91));
  }

  /* Cyberpunk selection */
  ::selection {
    background-color: rgba(231, 76, 60, 0.3);
    color: #e6edf3;
    text-shadow: 0 0 5px rgba(86, 204, 242, 0.5);
  }
`;

export default GlobalStyle;
