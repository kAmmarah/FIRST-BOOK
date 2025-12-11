import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e42'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '7da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '98c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a43'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'fb7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'c63'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e90'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ac1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '64e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a1a'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '233'),
    exact: true
  },
  {
    path: '/blog/tags/education',
    component: ComponentCreator('/blog/tags/education', '623'),
    exact: true
  },
  {
    path: '/blog/tags/personalization',
    component: ComponentCreator('/blog/tags/personalization', '72e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '4b3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '033'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a44'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a61'),
            routes: [
              {
                path: '/docs/chapter1',
                component: ComponentCreator('/docs/chapter1', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '480'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
