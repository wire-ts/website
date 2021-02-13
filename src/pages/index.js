import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Type Safety without Boilerplate",
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        It's time to move beyond stringly-typed actions and reducers.
        <br /> Using TypeScript's advanced type inference, you may even get away
        with just a single type per file.
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
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
