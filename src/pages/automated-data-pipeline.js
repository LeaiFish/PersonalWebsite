import React, { useEffect, useRef } from 'react';
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

      .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .tech-item {
        background: var(--light-navy);
        padding: 30px;
        border-radius: var(--border-radius);
        border: 1px solid var(--navy);
        transition: var(--transition);

        &:hover {
          transform: translateY(-4px);
          border-color: var(--green);
        }

        h4 {
          color: var(--green);
          font-size: var(--fz-xl);
          margin-bottom: 15px;
          font-family: var(--font-mono);
        }

        p {
          color: var(--light-slate);
          font-size: var(--fz-md);
          margin: 0;
        }
      }

      .impact-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .stat-item {
        text-align: center;
        background: var(--light-navy);
        padding: 30px 20px;
        border-radius: var(--border-radius);
        border: 1px solid var(--navy);
        transition: var(--transition);

        &:hover {
          transform: translateY(-4px);
          border-color: var(--green);
        }

        .stat-number {
          color: var(--green);
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 700;
          margin-bottom: 10px;
          font-family: var(--font-mono);
        }

        .stat-label {
          color: var(--lightest-slate);
          font-size: var(--fz-md);
          font-weight: 500;
        }
      }

      .process-steps {
        .step {
          display: flex;
          align-items: flex-start;
          margin-bottom: 30px;
          padding: 20px;
          background: var(--light-navy);
          border-radius: var(--border-radius);
          border-left: 4px solid var(--green);

          @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            background: var(--green);
            color: var(--navy);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: var(--fz-lg);
            margin-right: 20px;
            flex-shrink: 0;

            @media (max-width: 768px) {
              margin-right: 0;
              margin-bottom: 15px;
            }
          }

          .step-content {
            h4 {
              color: var(--lightest-slate);
              font-size: var(--fz-xl);
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

      .code-block {
        background: var(--dark-navy);
        border: 1px solid var(--navy);
        border-radius: var(--border-radius);
        padding: 20px;
        margin: 30px 0;
        overflow-x: auto;
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        color: var(--light-slate);
        line-height: 1.5;

        .comment {
          color: var(--slate);
          font-style: italic;
        }

        .keyword {
          color: var(--green);
        }

        .string {
          color: var(--orange);
        }
      }
    }
  }
`;

const AutomatedDataPipelinePage = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Layout>
      <Head title="Automated Data Pipeline" />
      <StyledProjectPage>
        <div className="project-header" ref={revealContainer}>
          <div className="project-overline">Featured Project</div>
          <h1>Automated Data Pipeline</h1>
          <p className="project-subtitle">
            A Python-based automation solution that revolutionized market intelligence processing at
            Sealand, reducing manual work by 90% and improving team efficiency.
          </p>
          <div className="project-links">
            <a href="https://github.com/LeaiFish" target="_blank" rel="noopener noreferrer">
              <Icon name="GitHub" />
              View Code
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="section">
            <h2>Project Overview</h2>
            <p>
              During my internship at Sealand, I identified a critical bottleneck in our market
              intelligence workflow. The team was spending countless hours manually processing data
              from various sources like Sensor Tower, integrating it into Excel databases, and
              updating PowerPoint presentations. This repetitive process was not only time-consuming
              but also prone to human error.
            </p>
            <p>
              I developed a comprehensive Python automation solution that{' '}
              <span className="highlight">reduced manual processing time by 90%</span>, streamlined
              data integration, and improved accuracy across our reporting pipeline. The tool was so
              effective that it remained in active use even after my departure, continuing to
              benefit the team's efficiency.
            </p>
          </div>

          <div className="section">
            <h2>Technical Implementation</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h4>Python & Pandas</h4>
                <p>
                  Core data processing and manipulation using pandas for efficient handling of large
                  datasets from multiple market intelligence sources.
                </p>
              </div>
              <div className="tech-item">
                <h4>Excel Automation</h4>
                <p>
                  Leveraged xlwings library to seamlessly integrate processed data into existing
                  Excel templates and databases.
                </p>
              </div>
              <div className="tech-item">
                <h4>API Integration</h4>
                <p>
                  Built robust API connections to automatically fetch data from Sensor Tower and
                  other market intelligence platforms.
                </p>
              </div>
              <div className="tech-item">
                <h4>PowerPoint Automation</h4>
                <p>
                  Automated presentation generation and updates, ensuring consistent formatting and
                  real-time data accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Development Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Problem Analysis</h4>
                  <p>
                    Conducted thorough analysis of existing workflow, identifying pain points and
                    time-consuming manual processes across different data sources.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Solution Design</h4>
                  <p>
                    Designed a modular Python architecture that could handle multiple data sources,
                    process different file formats, and integrate with existing tools.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Implementation</h4>
                  <p>
                    Developed the automation script using Python, pandas for data processing, and
                    xlwings for Excel integration, with robust error handling and logging.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Testing & Deployment</h4>
                  <p>
                    Thoroughly tested the solution with real data, optimized performance, and
                    deployed it into the team's daily workflow with comprehensive documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Key Features</h2>
            <h3>Data Integration</h3>
            <p>
              The pipeline automatically fetches data from multiple sources including Sensor Tower,
              processes it according to predefined business rules, and standardizes the format for
              seamless integration into existing databases.
            </p>

            <h3>Excel Database Updates</h3>
            <p>
              Using xlwings, the tool dynamically updates Excel databases with new market
              intelligence data, maintaining data integrity and preserving existing formatting and
              formulas.
            </p>

            <h3>Automated Reporting</h3>
            <p>
              The system generates updated PowerPoint presentations with the latest market insights,
              charts, and analysis, ensuring stakeholders always have access to current information.
            </p>

            <h3>Error Handling & Logging</h3>
            <p>
              Robust error handling ensures the pipeline continues running even when encountering
              unexpected data formats or API issues, with comprehensive logging for troubleshooting.
            </p>
          </div>

          <div className="section">
            <h2>Impact & Results</h2>
            <div className="impact-stats">
              <div className="stat-item">
                <div className="stat-number">90%</div>
                <div className="stat-label">Time Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Accuracy Improvement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Data Sources</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Daily</div>
                <div className="stat-label">Usage Frequency</div>
              </div>
            </div>
            <p>
              The automation solution transformed the team's workflow, allowing analysts to focus on
              high-value tasks like data interpretation and strategic insights rather than manual
              data processing. The tool's effectiveness was recognized with a{' '}
              <span className="highlight">performance bonus</span>, and its continued use after my
              internship demonstrates its lasting value to the organization.
            </p>
          </div>

          <div className="section">
            <h2>Lessons Learned</h2>
            <p>
              This project reinforced the importance of understanding existing workflows before
              implementing automation. By closely collaborating with the team and understanding
              their daily challenges, I was able to create a solution that truly addressed their
              needs rather than just applying technology for its own sake.
            </p>
            <p>
              The experience also highlighted the value of building maintainable, well-documented
              code. Since the tool would be used by non-technical team members, creating clear
              documentation and robust error handling was crucial for long-term success.
            </p>
          </div>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

export default AutomatedDataPipelinePage;
