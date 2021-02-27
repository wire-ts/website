import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Zero Boilerplate",
    description: (
      <>
        Removing all friction by design, Wire is optimized for fast iteration.
        Let the compiler do the work - Wire uses maximum type inference to help
        you type less.
      </>
    ),
  },
  {
    title: "Type Safety",
    description: (
      <>
        Leave stringly-typed code behind and make it <b>impossible</b> to do the
        wrong thing. Not only does Wire enforce functional data flow, it also
        marks all state as immutable.
      </>
    ),
  },
  {
    title: "Batteries Included",
    description: (
      <>
        Wire comes with actions, async thunks, selectors, and a devtools
        extension. Everything you need is already here - no need to install
        anything else.
      </>
    ),
  },
  {
title: "Sophisticated Yet Simple",
description: (
  <>
    There's only one way to do things in Wire - and that's the right way to
    do it. This makes it super easy to get started, to maintain, and avoids
    preventable mistakes by junior developers.
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

function Feature(props: { title: string; description: any }) {
  return (
    <div className={clsx(styles.feature)}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Home">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className={clsx("container", styles.container)}>
          <div>
            <h1 className="hero__title">{siteConfig.customFields.heroTitle}</h1>
            <p className="hero__subtitle">
              {siteConfig.customFields.heroSubtitle}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(styles.heroButton)}
                to={useBaseUrl("docs/")}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: `<b>store</b>({ list: [] as Todo[] }).<b>actions</b>({
  add: (state, todo: Todo) => ({
    list: [...state.list, todo]
  })
});
`,
                }}
              ></code>
            </pre>
          </div>
        </div>
      </header>
      <main className={clsx("", styles.main)}>
        <section className={styles.features}>
          <div className="container">
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
