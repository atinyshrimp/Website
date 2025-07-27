// Responsive breakpoints
export const breakpoints = {
    xs: "480px", // Small phones
    sm: "640px", // Large phones
    md: "768px", // Tablets
    lg: "1024px", // Laptops
    xl: "1280px", // Desktops
    xxl: "1536px", // Large screens
    "3xl": "1920px", // Extra large screens
    "4xl": "2560px", // Ultra wide screens
};

// Media query templates
export const media = {
    xs: `@media (max-width: ${breakpoints.xs})`,
    sm: `@media (max-width: ${breakpoints.sm})`,
    md: `@media (max-width: ${breakpoints.md})`,
    lg: `@media (max-width: ${breakpoints.lg})`,
    xl: `@media (max-width: ${breakpoints.xl})`,
    xxl: `@media (max-width: ${breakpoints.xxl})`,

    // Orientation-specific queries
    portrait: `@media (orientation: portrait)`,
    landscape: `@media (orientation: landscape)`,

    // Combined queries
    phonePortrait: `@media (max-width: ${breakpoints.sm}) and (orientation: portrait)`,
    phoneLandscape: `@media (max-width: ${breakpoints.sm}) and (orientation: landscape)`,
    tabletPortrait: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) and (orientation: portrait)`,
    tabletLandscape: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) and (orientation: landscape)`,
};
