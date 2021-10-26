// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fortnite Battle Royal',
  tagline: 'Click the About tab for more information!',
  url: 'https://dylanmason.github.io',
  baseUrl: '/dylan-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dylanmason', // Usually your GitHub org/user name.
  projectName: 'dylan-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ///** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fortnite',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Where to download',
            items: [
              {
                label: 'Epic Games',
		href: 'https://www.epicgames.com/fortnite/en-US/download',
                //to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/fortnite/',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/directory/game/Fortnite',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FortniteGame?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Leaderboards',
                href: 'https://fortnitetracker.com/leaderboards',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Epic Games`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
