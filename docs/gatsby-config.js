const navConfig = {
  'Understand StackState': {
    url: '/concepts',
    description:
      "Learn about each part of the StackState platform and how they all work together"
  },
  'Get started with StackState': {
    url: '/get_started',
    description:
      'Find out how to install and start using StackState'
  },
  'StackState CLI': {
    url: '/cli',
    description:
      "Start using StackState CLI tool"
  },
  'StackState RBAC': {
    url: '/rbac/about_rbac',
    description:
      'Learn about our Role Based Access Control and start managing user access'
  },
  'StackState Scripting Language': {
    url: '/scripting/index',
    description:
      'Learn about StackState Scripting Language'
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
        defaultVersion: '1.16.x',
        versions: {
          '1.15.x': '1.14.x',
        },
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
          ],
          'Understand StackState': [
            'concepts/4t_data_model',
            'concepts/components_and_relations',
            'concepts/layers_domains_and_environments',
            'concepts/glossary',
          ],
          'Download and Install StackState': [
            'get_started/download',
            'get_started/requirements',
            'get_started/install_stackstate',
            'get_started/development_installation',
            'get_started/production_installation',
          ],
          'Configure StackSate Installation': [
            'get_started/configuration',
            'get_started/authentication',
            'get_started/reverse_proxy',
          ],
          'About StackState CLI': [
            'cli/get_started_with_stackstate_cli',
          ],
          'Use StackState CLI': [
            'cli/working_with_stackstate_cli',
            'Configure StackState with CLI',
          ],
          'About StackState RBAC': [
            'rbac/about_rbac',
            'rbac/permissions',
            'rbac/scopes_in_rbac',
          ],
          'Use StackState RBAC': [
            'rbac/how_to_configure_ldap_authentication',
            'rbac/subject_configuration',
            'rbac/how_to_set_up_roles',
          ],
          'About Component Actions': [
            'actions/component_actions',
          ],
          'Use Component Actions': [
            'actions/how_to_configure_component_actions',
          ],
          'About StackState Scripting': [
            'scripting/index',
            'scripting/functions',
            'scripting/integrating_external_services',
          ],
          'Script APIs': [
            'scripting/topology',
            'scripting/telemetry',
            'scripting/http',
            'scripting/predictions',
            'scripting/component',
          ],
          'Types': [
            'scripting/async_script_result',
            'scripting/time',
          ]
        },
        navConfig,
        menuTitle: 'StackState Platform',
        segmentApiKey: 'wgrIo8Bul0Ujl8USETG3DB6hONdy4kTg',
        algoliaApiKey: 'cbba24ce473368423ac137b91601c4dd',
        algoliaIndexName: 'dev_stsdocs',
        baseUrl: 'https://docs.stackstate.com',
        twitterHandle: 'gostackstate',
        youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
        logoLink: 'https://docs.stackstate.com',
      }
    }

  ],
}
