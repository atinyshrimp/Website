import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { media } from "../utils/responsive";

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 25rem;

    ${media.tabletLandscape} {
        height: 15rem;
    }
`;

const CarouselWrapper = styled(motion.div)`
    display: flex;
    flex-grow: 0;
    width: 100%;
    height: fit-content;
    gap: var(--spacing-md);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CarouselControls = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: var(--spacing-sm);
`;

const CarouselButton = styled.button`
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(86, 204, 242, 0.2);
        border-color: var(--color-accent);
        transform: scale(1.05);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        &:hover {
            background: rgba(0, 0, 0, 0.4);
            border-color: var(--color-border);
            transform: none;
        }
    }
`;

const Indicator = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: var(--spacing-sm);
`;

const Dot = styled.div<{ active: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) =>
        props.active ? "var(--color-accent)" : "rgba(255, 255, 255, 0.3)"};
    transition: all 0.3s ease;
`;

interface CarouselProps {
    items: React.ReactNode[];
    itemsPerPage?: number; // Optional prop to control how many items to show per page
    breakpoints?: { [width: number]: number }; // Optional prop to control how many items to show per page based on screen width
}

const Carousel: React.FC<CarouselProps> = ({
    items,
    itemsPerPage = 3,
    breakpoints = { 768: 1, 1340: 2, 1700: 3, 1836: 4, 2200: 5, 2560: 6 }, // Default breakpoints
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [currentItemsPerPage, setCurrentItemsPerPage] =
        useState(itemsPerPage);

    // Create pages from items
    const createPages = (itemsPerPage: number) => {
        const pages = [];
        for (let i = 0; i < items.length; i += itemsPerPage) {
            pages.push(items.slice(i, i + itemsPerPage));
        }
        return pages;
    };

    const [pages, setPages] = useState(() => createPages(currentItemsPerPage));

    // Handle window resize for responsive behavior
    useEffect(() => {
        const handleResize = () => {
            const sortedBreakpoints = Object.keys(breakpoints)
                .map(Number)
                .sort((a, b) => b - a); // Sort breakpoints in descending order

            let newItemsPerPage = itemsPerPage;
            for (const breakpoint of sortedBreakpoints) {
                if (window.innerWidth <= breakpoint) {
                    newItemsPerPage = breakpoints[breakpoint];
                }
            }

            if (newItemsPerPage !== currentItemsPerPage) {
                setCurrentItemsPerPage(newItemsPerPage);
                setPages(createPages(newItemsPerPage));
                // Reset to first page when layout changes
                setCurrentIndex(0);
            }
        };

        handleResize(); // Initialize on component mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoints, itemsPerPage, currentItemsPerPage, items]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === pages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };

    // Show pagination only if we have multiple pages
    const showPagination = pages.length > 1;

    return (
        <>
            <CarouselContainer>
                <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="popLayout"
                >
                    <CarouselWrapper
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {pages[currentIndex]}
                    </CarouselWrapper>
                </AnimatePresence>
            </CarouselContainer>

            {showPagination && (
                <CarouselControls>
                    <CarouselButton
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        ←
                    </CarouselButton>
                    <Indicator>
                        {pages.map((_, index) => (
                            <Dot
                                key={index}
                                active={currentIndex === index}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </Indicator>
                    <CarouselButton
                        onClick={handleNext}
                        aria-label=" Next slide"
                    >
                        →
                    </CarouselButton>
                </CarouselControls>
            )}
        </>
    );
};

export default Carousel;
