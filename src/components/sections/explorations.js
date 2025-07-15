import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledExplorationsSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
  }
`;

const StyledExplorationCard = styled.div`
  position: relative;
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    transform: translateY(-4px);
  }

  .explorations-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    header,
    a {
      width: 100%;
    }
  }

  .explorations-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .explorations-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .explorations-title {
    margin: 0 0 10px 0;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .explorations-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .explorations-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Explorations = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const explorations = [
    {
      title: 'Photography Journey',
      description: 'Capturing moments and cultures during my travels in Japan and Denmark. Street photography, architecture, and cultural documentation.',
      tech: ['Photography', 'Travel', 'Cultural Documentation'],
      external: '/photography',
    },
    {
      title: 'Language Learning',
      description: 'Passionate about multilingual communication. Currently fluent in Chinese, English, and Japanese (N1 level), learning Korean and German.',
      tech: ['Japanese (N1)', 'Korean', 'German', 'Cross-cultural Communication'],
      external: '#',
    },
    {
      title: 'International Exchange',
      description: 'Exchange programs at Waseda University (Tokyo) and Copenhagen Business School, gaining global perspectives on finance and business.',
      tech: ['International Experience', 'Cross-cultural Learning', 'Global Finance'],
      external: '#',
    },
    {
      title: 'Continuous Learning',
      description: 'Always exploring new skills through online courses in data science, programming, and financial analysis to stay current with industry trends.',
      tech: ['Online Learning', 'Data Science', 'Python', 'Financial Technology'],
      external: '#',
    },
    {
      title: 'Reading & Research',
      description: 'Avid reader of financial literature, market analysis, and cross-cultural business practices. Staying informed about global economic trends.',
      tech: ['Financial Literature', 'Market Research', 'Economic Analysis'],
      external: '#',
    },
  ];

  return (
    <StyledExplorationsSection id="explorations">
      <h2 className="numbered-heading" ref={revealTitle}>
        My Explorations
      </h2>

      <div className="inner">
        {explorations &&
          explorations.map(({ title, description, tech, external }, i) => (
            <StyledExplorationCard
              key={i}
              ref={el => (revealCards.current[i] = el)}>
              <div className="explorations-inner">
                <header>
                  <div className="explorations-top">
                    <div className="folder">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="explorations-links">
                      {external && (
                        <a href={external} aria-label="External Link" className="external">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-external-link">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15,3 21,3 21,9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="explorations-title">
                    <a href={external} target={external.startsWith('http') ? "_blank" : "_self"} rel={external.startsWith('http') ? "noreferrer" : ""}>
                      {title}
                    </a>
                  </h3>

                  <div className="explorations-description">
                    <p>{description}</p>
                  </div>
                </header>

                <footer>
                  {tech && (
                    <ul className="explorations-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>
              </div>
            </StyledExplorationCard>
          ))}
      </div>
    </StyledExplorationsSection>
  );
};

export default Explorations;