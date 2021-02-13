import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Zero boilerplate",
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        By removing all friction by design, Wire is optimized for fast
        iteration. <br />
        Let the compiler do the work - Wire uses maximum type inference to help
        you type less.
      </>
    ),
  },
  {
    title: "Type Safety",
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Leave stringly-typed code behind and make it <b>impossible</b> to do the
        wrong thing by design.
        <br />
        Not only does Wire enforce functional data flow, it also marks all state
        as immutable.
      </>
    ),
  },
  {
    title: "Batteries Included",
    description: (
      <>
        Wire comes with <b>async</b> actions, thunks, and a devtools extension.
        <br />
        Everything you need is already here.
      </>
    ),
  },
  {
    title: "React Hooks",
    description: (
      <>
        Supercharge your functional components and connect to stores using
        hooks. And don't worry, class components are covered too.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
          <p className="hero__subtitle">
            {siteConfig.customFields.heroSubtitle}
          </p>
          <div className={styles.buttons}>
            <Link className={clsx(styles.heroButton)} to={useBaseUrl("docs/")}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className={clsx("", styles.main)}>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
