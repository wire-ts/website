module.exports = {
  title: "Wire - state management for React and TypeScript - Redux alternative",
  tagline: "Functional, immutable data flow with no boilerplate. ",
  url: "https://wire.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "logo.png",
  organizationName: "wire-ts",
  projectName: "website",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Wire Logo",
        src: "logo.svg",
        srcDark: "logo-dark.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          to: "comparison/",
          label: "Comparison with Redux",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/wire-ts/wire",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Wire.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/wire-ts/website/edit/master/",
        },
        blog: {
          showReadingTime: false,
          editUrl: "https://github.com/wire-ts/website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  customFields: {
    heroTitle: "Next-gen state management for React",
    heroSubtitle: "Iterate faster and catch bugs earlier.",
  },
};
