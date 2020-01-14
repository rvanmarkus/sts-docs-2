const navConfig = {
  'StackState Basics': {
    url: 'https://docs.stackstate.com/',
    description:
      'Learn about each part of the StackState platform and how they all work together.'
  },
  'StackState Agent': {
    url: 'https://docs.stackstate.com/agent',
    description:
      'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
  },
  'StackState CLI': {
    url: 'https://docs.stackstate.com/cli',
    description:
      "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
  },
  'StackState Analytics': {
    url: 'https://docs.stackstate.com/analytics',
    description:
      "Integrate with Apollo's cloud service for schema versioning, metrics, and enhanced security."
  }
};
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    subtitle: 'Documentation',
    siteName: 'StackState',
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    twitterHandle: "@gostackstate"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-theme-docs',
      options: {
        root: __dirname,
        subtitle: 'Apollo Server',
        description: 'A guide to using Apollo Server',
        githubRepo: 'rvanmarkus/sts-docs-2',
        defaultVersion: '1.15.x',
        versions: {
          '1.14.x': 'version-3',
        },
        sidebarCategories: {  
          null: [
            'index',
            'getting-started',
          ],
          Features: [
            'api/apollo-server',
          ]
        },
        navConfig,  
        menuTitle: 'StackState Platform',
        segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
        algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
        algoliaIndexName: 'apollodata',
        baseUrl: 'https://docs.stackstate.com',
        twitterHandle: 'gostackstate',
        spectrumHandle: 'apollo',
        youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
        logoLink: 'https://docs.stackstate.com',
      }
    }

  ],
}
