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
      flex-wrap: wrap;

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

      .report-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 40px;
        margin-top: 40px;
      }

      .report-card {
        background: var(--light-navy);
        padding: 40px;
        border-radius: var(--border-radius);
        border: 1px solid var(--navy);
        transition: var(--transition);

        &:hover {
          transform: translateY(-4px);
          border-color: var(--green);
        }

        .report-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          .report-icon {
            width: 50px;
            height: 50px;
            background: var(--green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            font-size: var(--fz-xl);
            font-weight: 700;
            color: var(--navy);
          }

          h4 {
            color: var(--lightest-slate);
            font-size: var(--fz-xl);
            margin: 0;
          }
        }

        .company-info {
          margin-bottom: 20px;

          .company-name {
            color: var(--green);
            font-size: var(--fz-lg);
            font-weight: 600;
            margin-bottom: 5px;
          }

          .company-sector {
            color: var(--slate);
            font-size: var(--fz-md);
            font-family: var(--font-mono);
          }
        }

        .report-summary {
          color: var(--light-slate);
          font-size: var(--fz-md);
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .report-link {
          display: inline-flex;
          align-items: center;
          color: var(--green);
          text-decoration: none;
          font-size: var(--fz-sm);
          font-weight: 500;
          transition: var(--transition);

          &:hover {
            color: var(--lightest-slate);
          }

          svg {
            width: 16px;
            height: 16px;
            margin-left: 8px;
          }
        }
      }

      .methodology-steps {
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

      .key-strengths {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .strength-item {
        background: var(--light-navy);
        padding: 30px;
        border-radius: var(--border-radius);
        border: 1px solid var(--navy);
        transition: var(--transition);

        &:hover {
          transform: translateY(-4px);
          border-color: var(--green);
        }

        .strength-icon {
          width: 40px;
          height: 40px;
          background: var(--green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: var(--fz-lg);
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
  }
`;

const EquityResearchPage = () => {
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
      <Head title="Equity Research Reports" />
      <StyledProjectPage>
        <div className="project-header" ref={revealContainer}>
          <div className="project-overline">Featured Project</div>
          <h1>Equity Research</h1>
          <p className="project-subtitle">
            Independent equity research reports on XD Inc. and Adobe, featuring comprehensive
            fundamental analysis, financial modeling, and investment recommendations.
          </p>
          <div className="project-links">
            <a
              href="https://mp.weixin.qq.com/s/Pv5NIkP6dBPXYtGkKbjc_g"
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="External" />
              XD Inc. Report
            </a>
            <a
              href="https://mp.weixin.qq.com/s/J9Lpx7ozZGJ1SHuu0_f22w"
              target="_blank"
              rel="noopener noreferrer">
              <Icon name="External" />
              Adobe Report
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="section">
            <h2>Research Overview</h2>
            <p>
              These comprehensive equity research reports demonstrate advanced financial analysis
              skills through independent research on two distinct companies: XD Inc. (gaming sector)
              and Adobe (software sector). Both reports have been{' '}
              <span className="highlight">published and publicly available</span>, showcasing
              professional-grade analysis and investment insights.
            </p>
            <p>
              The research employs institutional-grade methodologies, leveraging multiple data
              sources and analytical frameworks to provide actionable investment recommendations
              backed by rigorous fundamental analysis and financial modeling.
            </p>
          </div>

          <div className="section">
            <h2>Professional Tools & Platforms</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h4>Bloomberg Terminal</h4>
                <p>
                  Professional financial data platform for real-time market data, company
                  fundamentals, and industry analysis.
                </p>
              </div>
              <div className="tech-item">
                <h4>S&P Capital IQ</h4>
                <p>
                  Comprehensive financial database for detailed company analysis, peer comparisons,
                  and market intelligence.
                </p>
              </div>
              <div className="tech-item">
                <h4>Wind Database</h4>
                <p>
                  Leading Chinese financial data provider for A-share market analysis and
                  macroeconomic research.
                </p>
              </div>
              <div className="tech-item">
                <h4>Financial Modeling</h4>
                <p>
                  Advanced DCF models, comparable company analysis, and scenario planning for
                  investment valuation.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Published Research Reports</h2>
            <div className="report-cards">
              <div className="report-card">
                <div className="report-header">
                  <div className="report-icon">XD</div>
                  <h4>XD Inc. Research Report</h4>
                </div>
                <div className="company-info">
                  <div className="company-name">XD Inc.</div>
                  <div className="company-sector">Gaming & Entertainment</div>
                </div>
                <div className="report-summary">
                  Comprehensive analysis of XD Inc.'s business model, competitive positioning in the
                  gaming industry, financial performance, and growth prospects. The report includes
                  detailed DCF valuation, peer comparison analysis, and investment recommendation.
                </div>
                <a
                  href="https://mp.weixin.qq.com/s/Pv5NIkP6dBPXYtGkKbjc_g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-link">
                  Read Full Report
                  <Icon name="External" />
                </a>
              </div>

              <div className="report-card">
                <div className="report-header">
                  <div className="report-icon">AB</div>
                  <h4>Adobe Research Report</h4>
                </div>
                <div className="company-info">
                  <div className="company-name">Adobe Inc.</div>
                  <div className="company-sector">Software & Technology</div>
                </div>
                <div className="report-summary">
                  In-depth analysis of Adobe's transition to cloud-based services, Creative Cloud
                  ecosystem, subscription model effectiveness, and competitive advantages in the
                  creative software market. Features comprehensive financial modeling and valuation
                  analysis.
                </div>
                <a
                  href="https://mp.weixin.qq.com/s/J9Lpx7ozZGJ1SHuu0_f22w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-link">
                  Read Full Report
                  <Icon name="External" />
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Research Methodology</h2>
            <div className="methodology-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Industry Analysis</h4>
                  <p>
                    Comprehensive examination of industry dynamics, competitive landscape,
                    regulatory environment, and market trends affecting the target companies.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Company Analysis</h4>
                  <p>
                    Deep dive into business model, competitive positioning, management quality,
                    operational efficiency, and strategic initiatives.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Financial Analysis</h4>
                  <p>
                    Detailed examination of financial statements, ratio analysis, cash flow
                    assessment, and identification of key performance drivers.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Valuation & Recommendation</h4>
                  <p>
                    Multiple valuation approaches including DCF, comparable company analysis, and
                    precedent transactions to derive fair value estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Key Analytical Strengths</h2>
            <div className="key-strengths">
              <div className="strength-item">
                <div className="strength-icon">📊</div>
                <h4>Quantitative Analysis</h4>
                <p>
                  Advanced financial modeling with scenario analysis, sensitivity testing, and Monte
                  Carlo simulations for robust valuation frameworks.
                </p>
              </div>
              <div className="strength-item">
                <div className="strength-icon">🔍</div>
                <h4>Industry Expertise</h4>
                <p>
                  Deep understanding of sector-specific dynamics, competitive advantages, and
                  industry-relevant valuation multiples and metrics.
                </p>
              </div>
              <div className="strength-item">
                <div className="strength-icon">📈</div>
                <h4>Investment Insight</h4>
                <p>
                  Clear investment thesis development with actionable recommendations supported by
                  comprehensive risk-return analysis.
                </p>
              </div>
              <div className="strength-item">
                <div className="strength-icon">📝</div>
                <h4>Professional Communication</h4>
                <p>
                  Clear, concise research presentation following institutional standards with
                  executive summaries and detailed appendices.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Research Impact</h2>
            <p>
              Both research reports have been{' '}
              <span className="highlight">published and distributed</span> through professional
              channels, demonstrating the quality and reliability of the analysis. The reports
              showcase institutional-grade research capabilities and provide valuable insights for
              investment decision-making.
            </p>
            <p>
              The research process involved extensive use of professional financial databases,
              advanced analytical techniques, and rigorous fact-checking to ensure accuracy and
              reliability. The published format demonstrates professional communication skills and
              adherence to industry standards.
            </p>
          </div>

          <div className="section">
            <h2>Analytical Framework</h2>
            <p>
              The research employs a comprehensive analytical framework combining top-down industry
              analysis with bottom-up company-specific research. This approach ensures a holistic
              view of investment opportunities while maintaining focus on company-specific value
              drivers and risk factors.
            </p>
            <p>
              Each report includes detailed financial projections, multiple valuation scenarios, and
              thorough risk assessment to provide investors with a complete picture of the
              investment opportunity and associated risks.
            </p>
          </div>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

export default EquityResearchPage;
