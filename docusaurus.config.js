// @ts-check

const config = {
  title: 'TitanX Agriculture Solutions',

  tagline:
    'Enterprise Equipment Operations, Maintenance & Troubleshooting Documentation',

  favicon: 'img/favicon.png',

url: 'https://Brock-T-Wilson.github.io',
baseUrl: '/TitanX-Agriculture-Solutions-Documentation/',

  organizationName: 'Brock-T-Wilson',

  projectName: 'TitanX-Agriculture-Solutions-Documentation',

  onBrokenLinks: 'warn',

  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/titanx-logo.png',

    navbar: {
      title: 'TitanX',

      logo: {
        alt: 'TitanX Agriculture Solutions',
        src: 'img/navbar-logo.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Featured Equipment',

          items: [
            {
              label: 'TX-240 Utility Tractor',
              to: '/docs/equipment/tx-240-utility-tractor',
            },

            {
              label: 'TerrainRunner Utility Vehicle',
              to: '/docs/equipment/terrainrunner-utility-vehicle',
            },

            {
              label: 'TitanNav Guidance System',
              to: '/docs/equipment/titannav-guidance-system',
            },
          ],
        },

        {
          title: 'Operations & Service',

          items: [
            {
              label: 'Pre-Operation Inspection',
              to: '/docs/operations/pre-operation-inspection',
            },

            {
              label: 'Preventive Maintenance Schedule',
              to: '/docs/maintenance-service/preventive-maintenance-schedule',
            },

            {
              label: 'Hydraulic Pressure Loss',
              to: '/docs/troubleshooting/hydraulic-pressure-loss',
            },
          ],
        },

        {
          title: 'Dealer Support',

          items: [
            {
              label: 'Warranty Claim Process',
              to: '/docs/dealer-support/warranty-claim-process',
            },

            {
              label: 'Service Escalation',
              to: '/docs/dealer-support/service-escalation',
            },

            {
              label: 'Replacement Parts Ordering',
              to: '/docs/dealer-support/replacement-parts-ordering',
            },
          ],
        },
      ],

      copyright:
        `Copyright © ${new Date().getFullYear()} TitanX Agriculture Solutions. ` +
        `Built as a technical documentation portfolio project.`,
    },
  },
};

module.exports = config;