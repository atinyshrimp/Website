import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
	margin-top: 5rem;
	padding: var(--spacing-md) var(--spacing-lg);
	background-color: rgba(0, 0, 0, 0.4);
	position: relative;
	z-index: 10;
	width: 100%;

	/* Cyberpunk top border */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			var(--color-accent),
			transparent
		);
		opacity: 0.7;
	}

	/* Diagonal cut for cyberpunk effect */
	clip-path: polygon(
		0 10px,
		5px 0,
		calc(100% - 5px) 0,
		100% 10px,
		100% 100%,
		0 100%
	);
`;

const CopyrightText = styled.div`
	color: var(--color-text-secondary);
	font-size: 0.8rem;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;

	.highlight {
		color: var(--color-accent);
		position: relative;
		display: inline-block;
	}

	/* Glitch effect for the year */
	.glitch {
		position: relative;
		color: var(--color-accent);

		&::before,
		&::after {
			content: attr(data-glitch);
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
		}

		&::before {
			left: 2px;
			text-shadow: -1px 0 red;
			animation: glitch-anim 2s infinite linear alternate-reverse;
		}

		&::after {
			left: -2px;
			text-shadow: 1px 0 blue;
			animation: glitch-anim 3s infinite linear alternate-reverse;
		}

		@keyframes glitch-anim {
			0%,
			80% {
				clip: rect(0, 0, 0, 0);
			}
			85% {
				clip: rect(0, 100px, 2px, 0);
			}
			90% {
				clip: rect(0, 100px, 6px, 0);
			}
			95% {
				clip: rect(0, 100px, 2px, 0);
			}
		}
	}

	a {
		color: var(--color-accent);
		text-decoration: none;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.8;
		}
	}
`;

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<FooterContainer>
			<CopyrightText>
				{`© ${currentYear} • `}
				<span className="highlight">Some rights</span>{" "}
				<span className="glitch" data-glitch="reserved">
					reserved
				</span>
				<br />
				Code is{" "}
				<span className="glitch" data-glitch="open source">
					open source
				</span>{" "}
				— reuse with credit. <br />
				<a
					href="https://github.com/atinyshrimp/Website"
					target="_blank"
					rel="noopener noreferrer"
				>
					View on GitHub
				</a>
			</CopyrightText>
		</FooterContainer>
	);
};

export default Footer;
