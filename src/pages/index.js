import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="TitanX Agriculture Solutions"
      description="Enterprise Operations & Equipment Documentation"
    >
      <header className="hero titanx-hero">
        <div className="container">

          <div className="hero-logo-container">
            <img
              src="/img/titanx-logo.png"
              alt="TitanX Logo"
              className="hero-logo"
            />
          </div>

          <h1 className="hero__title">
            TitanX Agriculture Solutions
          </h1>

          <p className="hero__subtitle">
            Enterprise Equipment Operations, Maintenance &
            Troubleshooting Documentation
          </p>

          <div className="hero-buttons">
            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/portal-overview"
            >
              Open Documentation
            </Link>
          </div>
        </div>
      </header>

      <main>

        <section className="tractor-showcase">
          <div className="container tractor-container">

            <div className="tractor-text">
              <h2>Built For Performance</h2>

              <p>
                TitanX equipment platforms are designed for
                demanding agricultural environments requiring
                durability, operational reliability, and
                field-ready performance.
              </p>

              <p>
                This documentation portal supports operators,
                technicians, supervisors, and dealer service
                teams with operational guidance, troubleshooting
                workflows, maintenance procedures, and safety
                documentation.
              </p>
            </div>

            <div className="tractor-image-container">

  <img
    src="/img/tx240-tractor.png"
    alt="TX-240 Tractor"
    className="tractor-image"
  />

  <div className="tractor-caption">
    <h3>TX-240 Utility Tractor</h3>
    
    <p>Heavy-Duty Agricultural Operations Platform</p>
  </div>

</div>
          </div>
        </section>

      </main>
    </Layout>
  );
}