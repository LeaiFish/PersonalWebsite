import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Head } from '@components';
import { Icon } from '@components/icons';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectPage = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
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

    .project-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;

      a {
        ${({ theme }) => theme.mixins.button};
        padding: 14px 28px;
        font-size: var(--fz-sm);
        text-decoration: none;

        &:hover {
          transform: translateY(-2px);
        }

        svg {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
    }
  }

  .project-content {
    .section {
      margin-bottom: 80px;

      @media (max-width: 768px) {
        margin-bottom: 60px;
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
        }
      }

      h3 {
        color: var(--lightest-slate);
        font-size: var(--fz-xxl);
        margin-bottom: 20px;
        margin-top: 40px;
      }

      p {
        color: var(--slate);
        font-size: var(--fz-lg);
        line-height: 1.6;
        margin-bottom: 20px;
      }

      .highlight {
        color: var(--green);
        font-weight: 600;
      }

      .languages-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .language-card {
        background: var(--light-navy);
        padding: 30px;
        border-radius: var(--border-radius);
        border: 1px solid var(--navy);
        transition: var(--transition);
        position: relative;
        overflow: hidden;

        &:hover {
          transform: translateY(-4px);
          border-color: var(--green);
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--green), var(--blue));
        }

        .language-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          .language-flag {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--green);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: var(--fz-xl);
            font-weight: 700;
            color: var(--navy);
          }

          .language-info {
            h4 {
              color: var(--lightest-slate);
              font-size: var(--fz-xl);
              margin: 0 0 5px 0;
            }

            .proficiency {
              color: var(--green);
              font-size: var(--fz-sm);
              font-family: var(--font-mono);
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          }
        }

        .language-description {
          color: var(--light-slate);
          font-size: var(--fz-md);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .language-features {
          ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              color: var(--slate);
              font-size: var(--fz-sm);
              margin-bottom: 8px;
              position: relative;
              padding-left: 20px;

              &:before {
                content: '▸';
                position: absolute;
                left: 0;
                color: var(--green);
              }
            }
          }
        }
      }

      .learning-journey {
        background: var(--light-navy);
        border-radius: var(--border-radius);
        padding: 40px;
        margin: 40px 0;
        border: 1px solid var(--navy);

        h3 {
          color: var(--green);
          font-size: var(--fz-xxl);
          margin-bottom: 20px;
          text-align: center;
        }

        .journey-timeline {
          .timeline-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 30px;
            position: relative;

            @media (max-width: 768px) {
              flex-direction: column;
              text-align: center;
            }

            .timeline-marker {
              background: var(--green);
              width: 12px;
              height: 12px;
              border-radius: 50%;
              margin-right: 20px;
              margin-top: 8px;
              flex-shrink: 0;
              position: relative;

              @media (max-width: 768px) {
                margin-right: 0;
                margin-bottom: 15px;
              }

              &:after {
                content: '';
                position: absolute;
                top: 12px;
                left: 50%;
                transform: translateX(-50%);
                width: 2px;
                height: 40px;
                background: var(--navy);
              }

              &:last-child:after {
                display: none;
              }
            }

            .timeline-content {
              h4 {
                color: var(--lightest-slate);
                font-size: var(--fz-lg);
                margin-bottom: 5px;
              }

              .timeline-period {
                color: var(--green);
                font-size: var(--fz-sm);
                font-family: var(--font-mono);
                margin-bottom: 10px;
              }

              p {
                color: var(--slate);
                font-size: var(--fz-md);
                margin: 0;
              }
            }
          }
        }
      }

      .cultural-insights {
        .insight-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .insight-card {
          background: var(--light-navy);
          padding: 30px;
          border-radius: var(--border-radius);
          border: 1px solid var(--navy);
          transition: var(--transition);

          &:hover {
            transform: translateY(-4px);
            border-color: var(--green);
          }

          .insight-icon {
            width: 50px;
            height: 50px;
            background: var(--green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: var(--fz-xl);
            color: var(--navy);
          }

          h4 {
            color: var(--lightest-slate);
            font-size: var(--fz-xl);
            margin-bottom: 15px;
          }

          p {
            color: var(--light-slate);
            font-size: var(--fz-md);
            margin: 0;
          }
        }
      }

      .learning-resources {
        background: var(--dark-navy);
        border: 1px solid var(--navy);
        border-radius: var(--border-radius);
        padding: 30px;
        margin: 40px 0;

        h3 {
          color: var(--green);
          font-size: var(--fz-xxl);
          margin-bottom: 20px;
          text-align: center;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .resource-item {
          background: var(--light-navy);
          padding: 20px;
          border-radius: var(--border-radius);
          text-align: center;
          transition: var(--transition);

          &:hover {
            transform: translateY(-2px);
          }

          .resource-icon {
            font-size: var(--fz-xl);
            margin-bottom: 10px;
          }

          h4 {
            color: var(--lightest-slate);
            font-size: var(--fz-md);
            margin-bottom: 10px;
          }

          p {
            color: var(--slate);
            font-size: var(--fz-sm);
            margin: 0;
          }
        }
      }
    }
  }
`;

const LanguageLearningPage = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Head title="Language Learning Journey" />
      <StyledProjectPage>
        <div className="project-header" ref={revealContainer}>
          <div className="project-overline">Personal Journey</div>
          <h1>Language Learning</h1>
          <p className="project-subtitle">
            A passionate exploration of languages and cultures, from native fluency to
            conversational mastery. Bridging cultures through multilingual communication and
            continuous learning.
          </p>
          <div className="project-links">
            <a href="http://xhslink.com/m/6WvXM85l4SA" target="_blank" rel="noopener noreferrer">
              <Icon name="External" />
              View Journey
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="section">
            <h2>Language Portfolio</h2>
            <p>
              My journey in language learning spans multiple languages and cultures, each offering
              unique perspectives and opportunities for connection. From{' '}
              <span className="highlight">native fluency</span>
              in Mandarin and Hokkien to <span className="highlight">advanced proficiency</span> in
              English and Japanese, and ongoing exploration of German.
            </p>

            <div className="languages-grid">
              <div className="language-card">
                <div className="language-header">
                  <div className="language-flag">中</div>
                  <div className="language-info">
                    <h4>Mandarin Chinese</h4>
                    <div className="proficiency">Native</div>
                  </div>
                </div>
                <div className="language-description">
                  Native speaker with deep cultural understanding and professional communication
                  skills.
                </div>
                <div className="language-features">
                  <ul>
                    <li>Professional business communication</li>
                    <li>Academic writing and research</li>
                    <li>Cultural nuances and idioms</li>
                    <li>Regional dialect variations</li>
                  </ul>
                </div>
              </div>

              <div className="language-card">
                <div className="language-header">
                  <div className="language-flag">閩</div>
                  <div className="language-info">
                    <h4>Hokkien</h4>
                    <div className="proficiency">Native</div>
                  </div>
                </div>
                <div className="language-description">
                  Heritage language with strong cultural connection and family communication.
                </div>
                <div className="language-features">
                  <ul>
                    <li>Family and community communication</li>
                    <li>Cultural traditions and storytelling</li>
                    <li>Regional variations and dialects</li>
                    <li>Intergenerational bridge</li>
                  </ul>
                </div>
              </div>

              <div className="language-card">
                <div className="language-header">
                  <div className="language-flag">EN</div>
                  <div className="language-info">
                    <h4>English</h4>
                    <div className="proficiency">Fluent</div>
                  </div>
                </div>
                <div className="language-description">
                  Professional fluency with academic and business communication expertise.
                </div>
                <div className="language-features">
                  <ul>
                    <li>Academic research and writing</li>
                    <li>Professional presentations</li>
                    <li>International business communication</li>
                    <li>Technical documentation</li>
                  </ul>
                </div>
              </div>

              <div className="language-card">
                <div className="language-header">
                  <div className="language-flag">日</div>
                  <div className="language-info">
                    <h4>Japanese</h4>
                    <div className="proficiency">Fluent</div>
                  </div>
                </div>
                <div className="language-description">
                  Strong proficiency with cultural understanding and business communication skills.
                </div>
                <div className="language-features">
                  <ul>
                    <li>Business communication (keigo)</li>
                    <li>Cultural contexts and etiquette</li>
                    <li>Academic and professional writing</li>
                    <li>Media consumption and analysis</li>
                  </ul>
                </div>
              </div>

              <div className="language-card">
                <div className="language-header">
                  <div className="language-flag">DE</div>
                  <div className="language-info">
                    <h4>German</h4>
                    <div className="proficiency">Conversational</div>
                  </div>
                </div>
                <div className="language-description">
                  Ongoing learning journey with focus on conversation and cultural understanding.
                </div>
                <div className="language-features">
                  <ul>
                    <li>Conversational communication</li>
                    <li>Cultural exploration</li>
                    <li>Grammar and structure study</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Learning Journey</h2>
            <div className="learning-journey">
              <h3>Milestones & Progress</h3>
              <div className="journey-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Foundation Languages</h4>
                    <div className="timeline-period">Early Years</div>
                    <p>
                      Native acquisition of Mandarin and Hokkien through family and cultural
                      immersion.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>English Proficiency</h4>
                    <div className="timeline-period">Academic Years</div>
                    <p>
                      Developed professional fluency through academic study and international
                      exposure.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Japanese Mastery</h4>
                    <div className="timeline-period">University & Professional</div>
                    <p>
                      Achieved fluency through structured study, cultural immersion, and
                      professional application.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>German Exploration</h4>
                    <div className="timeline-period">Current</div>
                    <p>
                      Actively learning German to expand European cultural understanding and
                      communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Cultural Insights</h2>
            <p>
              Language learning has opened doors to diverse cultures and perspectives, enhancing
              both personal growth and professional opportunities. Each language offers unique
              insights into different ways of thinking and expressing ideas.
            </p>

            <div className="cultural-insights">
              <div className="insight-cards">
                <div className="insight-card">
                  <div className="insight-icon">🌏</div>
                  <h4>Cross-Cultural Communication</h4>
                  <p>
                    Bridging cultural gaps through multilingual communication, facilitating
                    understanding across diverse international environments.
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">💼</div>
                  <h4>Professional Advantage</h4>
                  <p>
                    Leveraging language skills in financial services, enabling effective
                    communication with international clients and markets.
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">🎓</div>
                  <h4>Continuous Learning</h4>
                  <p>
                    Maintaining growth mindset through ongoing language study, constantly expanding
                    vocabulary and cultural knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Learning Methodology</h2>
            <div className="learning-resources">
              <h3>Resources & Techniques</h3>
              <div className="resources-grid">
                <div className="resource-item">
                  <div className="resource-icon">📚</div>
                  <h4>Immersion</h4>
                  <p>Cultural immersion and authentic content consumption</p>
                </div>
                <div className="resource-item">
                  <div className="resource-icon">🗣️</div>
                  <h4>Conversation</h4>
                  <p>Regular practice with native speakers and language exchange</p>
                </div>
                <div className="resource-item">
                  <div className="resource-icon">📖</div>
                  <h4>Reading</h4>
                  <p>Literature, news, and professional materials in target languages</p>
                </div>
                <div className="resource-item">
                  <div className="resource-icon">🎬</div>
                  <h4>Media</h4>
                  <p>Films, podcasts, and cultural content for natural learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Future Goals</h2>
            <p>
              My language learning journey continues with plans to{' '}
              <span className="highlight">achieve conversational fluency in German</span>
              and potentially explore additional languages. The goal is to maintain and improve
              existing skills while expanding communication capabilities for both personal
              enrichment and professional advancement.
            </p>
            <p>
              Language learning represents more than communication skills—it's a gateway to
              understanding different cultures, perspectives, and ways of thinking that enrich both
              personal and professional experiences.
            </p>
          </div>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

LanguageLearningPage.propTypes = {
  location: PropTypes.object,
};

export default LanguageLearningPage;
