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

      .analysis-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }

      .analysis-item {
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
          display: flex;
          align-items: center;

          &:before {
            content: '→';
            margin-right: 10px;
            color: var(--green);
          }
        }

        p {
          color: var(--light-slate);
          font-size: var(--fz-md);
          margin: 0;
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

      .factor-highlight {
        background: var(--light-navy);
        border: 1px solid var(--green);
        border-radius: var(--border-radius);
        padding: 25px;
        margin: 30px 0;

        h4 {
          color: var(--green);
          font-size: var(--fz-xl);
          margin-bottom: 15px;
          font-family: var(--font-mono);
        }

        ul {
          color: var(--slate);
          font-size: var(--fz-md);
          margin: 0;
          padding-left: 20px;

          li {
            margin-bottom: 8px;

            strong {
              color: var(--lightest-slate);
            }
          }
        }
      }
    }
  }
`;

const QuantitativeFinancePage = ({ location }) => {
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
      <Head title="Quantitative Finance Research" />
      <StyledProjectPage>
        <div className="project-header" ref={revealContainer}>
          <div className="project-overline">Featured Project</div>
          <h1>Quantitative Finance</h1>
          <p className="project-subtitle">
            Comprehensive quantitative analysis of CSI indices, factor modeling, and portfolio
            optimization strategies using Python and advanced statistical methods.
          </p>
          <div className="project-links">
            <a href="https://github.com/LeaiFish" target="_blank" rel="noopener noreferrer">
              <Icon name="GitHub" />
              View Research
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="section">
            <h2>Research Overview</h2>
            <p>
              This comprehensive quantitative finance project explores advanced portfolio
              construction and factor modeling techniques using real A-share market data. The
              research combines theoretical financial models with practical implementation,
              demonstrating proficiency in both quantitative analysis and financial market
              understanding.
            </p>
            <p>
              The project encompasses <span className="highlight">CSI indices analysis</span>,
              systematic backtesting of rebalancing strategies, factor-based portfolio construction,
              and replication of the
              <span className="highlight">CH-3 factor model</span> following Liu, Stambaugh, and
              Yuan (2019) methodology.
            </p>
          </div>

          <div className="section">
            <h2>Technical Implementation</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <h4>Python & Pandas</h4>
                <p>
                  Advanced data manipulation and analysis of large financial datasets with efficient
                  vectorized operations.
                </p>
              </div>
              <div className="tech-item">
                <h4>Jupyter Notebook</h4>
                <p>
                  Interactive research environment for iterative analysis, visualization, and
                  documentation of findings.
                </p>
              </div>
              <div className="tech-item">
                <h4>Statsmodels</h4>
                <p>
                  Statistical modeling and econometric analysis including regression, time series
                  analysis, and hypothesis testing.
                </p>
              </div>
              <div className="tech-item">
                <h4>Matplotlib</h4>
                <p>
                  Comprehensive data visualization for performance analysis, factor exposure, and
                  statistical distributions.
                </p>
              </div>
              <div className="tech-item">
                <h4>CSMAR API</h4>
                <p>
                  Integration with China's leading financial database for accessing comprehensive
                  A-share market data.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Research Components</h2>
            <div className="analysis-grid">
              <div className="analysis-item">
                <h4>CSI Indices Analysis</h4>
                <p>
                  Comprehensive examination of China Securities Index composition, sector
                  weightings, and historical performance characteristics across different market
                  capitalizations.
                </p>
              </div>
              <div className="analysis-item">
                <h4>Rebalancing Strategies</h4>
                <p>
                  Systematic backtesting of various portfolio rebalancing frequencies and
                  methodologies, analyzing risk-return trade-offs and transaction costs.
                </p>
              </div>
              <div className="analysis-item">
                <h4>Long-Short Portfolios</h4>
                <p>
                  Construction of market-neutral portfolios using fundamental and technical factors,
                  implementing sophisticated hedging strategies.
                </p>
              </div>
              <div className="analysis-item">
                <h4>CH-3 Factor Model</h4>
                <p>
                  Replication and validation of the Chinese three-factor model, extending
                  Fama-French methodology to A-share markets.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Factor Analysis</h2>
            <p>
              The research implements a comprehensive factor-based approach to portfolio
              construction, utilizing multiple quantitative factors to identify systematic return
              patterns and risk characteristics in the A-share market.
            </p>

            <div className="factor-highlight">
              <h4>Key Factors Analyzed:</h4>
              <ul>
                <li>
                  <strong>ROE (Return on Equity):</strong> Fundamental profitability measure for
                  identifying high-quality companies
                </li>
                <li>
                  <strong>MAX Factor:</strong> Lottery-like extreme return behavior analysis
                  following Bali et al. methodology
                </li>
                <li>
                  <strong>Turnover Factor:</strong> Liquidity and investor attention metrics for
                  behavioral finance insights
                </li>
              </ul>
            </div>

            <h3>Factor Construction Methodology</h3>
            <div className="methodology-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Data Collection</h4>
                  <p>
                    Systematic gathering of financial statement data, market prices, and trading
                    volumes from CSMAR database with robust data cleaning procedures.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Factor Calculation</h4>
                  <p>
                    Implementation of standardized factor calculation methodologies ensuring
                    consistency with academic literature and industry best practices.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Portfolio Construction</h4>
                  <p>
                    Creation of quintile-based long-short portfolios with appropriate risk controls
                    and transaction cost considerations.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Performance Evaluation</h4>
                  <p>
                    Comprehensive backtesting with risk-adjusted performance metrics, statistical
                    significance testing, and robustness checks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>CH-3 Factor Model Implementation</h2>
            <p>
              Following Liu, Stambaugh, and Yuan (2019), this research replicates the Chinese
              three-factor model, adapting the Fama-French framework to the unique characteristics
              of the A-share market including regulatory constraints, investor behavior, and market
              microstructure.
            </p>
            <p>
              The implementation involves constructing size and value factors specifically
              calibrated for the Chinese market, accounting for{' '}
              <span className="highlight">regulatory differences</span>,
              <span className="highlight">market segmentation</span>, and{' '}
              <span className="highlight">investor sentiment</span>
              that distinguish A-share markets from global equity markets.
            </p>
          </div>

          <div className="section">
            <h2>Key Findings & Insights</h2>
            <p>
              The research reveals significant insights into A-share market dynamics, factor
              performance, and portfolio construction effectiveness. Factor-based strategies
              demonstrate meaningful alpha generation potential while highlighting the importance of
              transaction costs and market timing in practical implementation.
            </p>
            <p>
              The CH-3 factor model replication confirms the relevance of size and value effects in
              Chinese markets while identifying unique characteristics such as stronger momentum
              effects and different seasonal patterns compared to developed markets.
            </p>
          </div>

          <div className="section">
            <h2>Academic Rigor</h2>
            <p>
              This research demonstrates advanced quantitative finance skills through rigorous
              methodology, comprehensive statistical analysis, and adherence to academic best
              practices. The work showcases proficiency in both theoretical finance and practical
              implementation using industry-standard tools.
            </p>
            <p>
              The project bridges academic research and practical application, providing valuable
              insights for portfolio management while contributing to the understanding of factor
              investing in emerging markets.
            </p>
          </div>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

QuantitativeFinancePage.propTypes = {
  location: PropTypes.object,
};

export default QuantitativeFinancePage;
