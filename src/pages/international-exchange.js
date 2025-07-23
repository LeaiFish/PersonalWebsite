import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Layout, Head } from '@components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectPage = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  padding: 100px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background-image: url("data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2364ffda' stroke-width='2' opacity='0.15'%3E%3Ccircle cx='150' cy='150' r='120'/%3E%3Ccircle cx='150' cy='150' r='80'/%3E%3Ccircle cx='150' cy='150' r='40'/%3E%3Cline x1='30' y1='150' x2='270' y2='150'/%3E%3Cline x1='150' y1='30' x2='150' y2='270'/%3E%3Cpath d='M70 70 Q150 110 230 70 T230 230 Q150 190 70 230 T70 70' stroke-width='1'/%3E%3Ccircle cx='100' cy='80' r='3' fill='%2364ffda'/%3E%3Ccircle cx='200' cy='120' r='2' fill='%2364ffda'/%3E%3Ccircle cx='180' cy='200' r='2' fill='%2364ffda'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    opacity: 0.6;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .project-header {
    text-align: center;
    margin-bottom: 60px;

    .project-overline {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 400;
      margin-bottom: 20px;
    }

    h1 {
      margin: 0 0 20px 0;
      font-size: clamp(40px, 8vw, 60px);
      color: var(--lightest-slate);
      line-height: 1.1;
    }

    .project-subtitle {
      color: var(--slate);
      font-size: var(--fz-xl);
      max-width: 700px;
      margin: 0 auto 40px;
      line-height: 1.5;
    }
  }

  .project-content {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--green), transparent);
      opacity: 0.3;

      @media (max-width: 768px) {
        left: 10px;
      }
    }

    .section {
      margin-bottom: 80px;
      transition: var(--transition);
      position: relative;
      padding-left: 60px;

      @media (max-width: 768px) {
        margin-bottom: 60px;
        padding-left: 40px;
      }

      &:before {
        content: '';
        position: absolute;
        left: 15px;
        top: 10px;
        width: 10px;
        height: 10px;
        background: var(--green);
        border-radius: 50%;
        box-shadow: 0 0 0 4px var(--navy), 0 0 0 8px rgba(100, 255, 218, 0.1);

        @media (max-width: 768px) {
          left: 5px;
        }
      }

      &:nth-child(even) {
        background: rgba(100, 255, 218, 0.05);
        padding: 40px 40px 40px 60px;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--green);
        box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

        @media (max-width: 768px) {
          padding: 30px 20px 30px 40px;
        }
      }

      &:nth-child(odd) {
        padding: 20px 0 20px 60px;

        @media (max-width: 768px) {
          padding: 20px 0 20px 40px;
        }
      }

      h2 {
        color: var(--lightest-slate);
        font-size: clamp(24px, 5vw, 32px);
        margin-bottom: 30px;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 2px;
          background: var(--green);
          transition: width 0.3s ease;
        }

        &:hover:before {
          width: 100px;
        }
      }

      p {
        margin-bottom: 25px;
        line-height: 1.6;
        color: var(--slate);

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          color: var(--lightest-slate);
        }

        em {
          color: var(--green);
          font-style: italic;
        }
      }

      ul {
        padding-left: 20px;

        li {
          margin-bottom: 10px;
          color: var(--slate);

          strong {
            color: var(--lightest-slate);
          }
        }
      }

      .highlight {
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        font-weight: 500;
        padding: 2px 6px;
        background: rgba(100, 255, 218, 0.1);
        border-radius: 3px;
        transition: all 0.3s ease;
        cursor: help;

        &:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(100, 255, 218, 0.3);
        }
      }

      .quote {
        border-left: 4px solid var(--green);
        margin: 40px 0;
        font-style: italic;
        color: var(--lightest-slate);
        font-size: var(--fz-lg);
        background: var(--navy-shadow);
        padding: 30px;
        border-radius: var(--border-radius);
        transition: all 0.3s ease;
        position: relative;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px -10px rgba(2, 12, 27, 0.8);
          border-left-color: var(--lightest-slate);
        }

        &:before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 60px;
          color: var(--green);
          opacity: 0.3;
          font-family: serif;
        }
      }
    }
  }

  .tech-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 40px 0;
    padding: 0;
    list-style: none;

    li {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      position: relative;
      padding: 10px 20px;
      background: rgba(100, 255, 218, 0.05);
      border-radius: var(--border-radius);
      transition: all 0.3s ease;
      cursor: default;

      &:before {
        content: '▹';
        position: absolute;
        left: 10px;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: rgba(100, 255, 218, 0.15);
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(100, 255, 218, 0.2);

        &:before {
          transform: translateX(3px);
        }
      }
    }
  }
`;

const InternationalExchangePage = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Layout location="/international-exchange">
      <Head title="International Exchange" />
      <StyledProjectPage ref={revealContainer}>
        <header className="project-header">
          <p className="project-overline">Cross-Cultural Learning & Global Perspective</p>
          <h1>International Exchange</h1>
          <p className="project-subtitle">
            Exchange experiences at Waseda University and Copenhagen Business School that sparked
            systematic curiosity about diverse cultures, global perspectives, and the interconnected
            world.
          </p>
        </header>

        <div className="project-content">
          <div className="section">
            <p>
              My international exchange experiences at <strong>Waseda University in Tokyo</strong>{' '}
              and
              <strong> Copenhagen Business School in Denmark</strong> fundamentally transformed how
              I engage with the world. Beyond traditional academic learning, these experiences
              awakened a systematic curiosity about diverse cultures, regions, and global
              perspectives that continues to shape my approach to learning and problem-solving.
            </p>
          </div>

          <div className="section">
            <h2>Systematic Geographic Exploration</h2>
            <p>
              The international exposure sparked an unexpected passion for understanding our
              interconnected world. I began systematically studying global geography using{' '}
              <span className="highlight">Anki flashcards</span>, memorizing world maps, country
              capitals, and national flags. What started as a structured learning exercise evolved
              into something more engaging—I found myself fascinated by the historical and cultural
              connections reflected in flag designs and regional patterns.
            </p>
            <p>
              This methodical approach to geographic knowledge has given me a foundational
              understanding of global contexts that proves valuable when analyzing international
              markets, understanding regional economic trends, and approaching cross-border business
              challenges.
            </p>
          </div>

          <div className="section">
            <h2>Academic Exploration: Middle East Studies</h2>
            <p>
              At Waseda University, I deliberately chose to step outside my comfort zone by
              enrolling in a course on{' '}
              <span className="highlight">
                <a
                  href="https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=210GO32300012024210GO3230021&pLng=en"
                  target="_blank"
                  rel="noopener noreferrer">
                  Middle East Reform and Development
                </a>
              </span>{' '}
              taught by{' '}
              <a
                href="https://w-rdb.waseda.jp/html/100001423_en.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}>
                Professor Matthew Barry Gray
              </a>
              . Having had minimal prior exposure to Middle Eastern politics and economics, this
              course challenged me to grapple with complex regional dynamics, historical contexts,
              and contemporary development challenges.
            </p>
            <p>
              This experience taught me the value of intellectual humility and the importance of
              approaching unfamiliar topics with genuine curiosity rather than preconceptions. The
              analytical frameworks I developed for understanding regional economic and political
              dynamics have enhanced my ability to approach complex problems systematically.
            </p>
          </div>

          <div className="section">
            <h2>Linguistic Theory: English Syntax</h2>
            <p>
              During my exchange at Waseda University, I challenged myself further by enrolling in{' '}
              <span className="highlight">
                <a
                  href="https://www.wsl.waseda.jp/syllabus/JAA104.php?pKey=210CO31000012025210CO3100021&pLng=en"
                  target="_blank"
                  rel="noopener noreferrer">
                  English Syntax
                </a>
              </span>
              , an advanced linguistics course taught by{' '}
              <a
                href="https://www.waseda.jp/fire/sils/news/2023/04/25/16209/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}>
                Professor Namai Kenichi
              </a>{' '}
              that delved deep into Chomskyan transformational grammar theory and the structural
              foundations of language. Achieving an <strong>A+ grade</strong> in this demanding
              course represented not just academic success, but a fundamental shift in how I
              understand language learning and cognitive processing.
            </p>
            <p>
              The course provided rigorous training in syntactic analysis, transformational rules,
              and universal grammar principles. This metalinguistic awareness—understanding how
              language systems work at a structural level—has proven invaluable for accelerating my
              acquisition of new languages and enhancing cross-cultural communication capabilities.
              The analytical thinking required to parse complex syntactic structures has also
              strengthened my systematic approach to problem-solving in other domains.
            </p>
          </div>

          <div className="section">
            <h2>Self-Directed Learning: African Affairs</h2>
            <p>
              My curiosity for global perspectives led me to subscribe to{' '}
              <span className="highlight">&quot;Africa is a Country&quot;</span>, a newsletter that
              provides nuanced analysis of African politics, economics, and culture. Through this
              resource, I discovered the work of <strong>Frantz Fanon</strong>, particularly his
              seminal work
              <em>&quot;Black Skin, White Masks&quot;</em>, which offered profound insights into
              colonial psychology and cultural identity.
            </p>
            <div className="quote">
              &quot;Though I don&apos;t immediately see how these interests connect to my current
              career path, I believe I&apos;ve internalized a deep curiosity and respect for the
              unknown.&quot;
            </div>
            <p>
              This self-directed exploration of African affairs and postcolonial thought has
              broadened my understanding of global power dynamics, cultural complexity, and the
              importance of diverse perspectives in any analytical framework.
            </p>
          </div>

          <div className="section">
            <h2>Internalized Values: Curiosity and Respect</h2>
            <p>
              While I may not immediately see how my knowledge of Middle Eastern development or
              African political thought connects to financial analysis, I recognize that these
              explorations have fundamentally changed how I approach the unknown. I've developed:
            </p>
            <ul>
              <li>
                <strong>Systematic curiosity</strong> about unfamiliar topics and regions
              </li>
              <li>
                <strong>Intellectual humility</strong> when encountering complex, unfamiliar systems
              </li>
              <li>
                <strong>Cross-cultural awareness</strong> that informs my analytical perspective
              </li>
              <li>
                <strong>Respect for complexity</strong> and the value of diverse viewpoints
              </li>
            </ul>
            <p>
              In an increasingly interconnected world, this foundation of global curiosity and
              cultural sensitivity provides a unique lens for understanding international markets,
              cross-border business dynamics, and the cultural factors that influence economic
              decisions.
            </p>

            <ul className="tech-list">
              <li>Cross-Cultural Communication</li>
              <li>Global Economic Analysis</li>
              <li>Regional Studies</li>
              <li>Systematic Learning Methods</li>
              <li>International Business Context</li>
              <li>Cultural Intelligence</li>
            </ul>
          </div>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

export default InternationalExchangePage;
