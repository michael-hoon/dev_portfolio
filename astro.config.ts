import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://michael-hoon.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Michael Hoon',
      openGraph: {
        home: {
          title: 'AboutMe',
          description: 'A minimalistic theme for Astro.'
        },
        projects: {
          title: 'Projects',
          description: 'Projects I have worked on.'
        },
        blog: {
          title: 'Photography',
          description: 'Photos I have taken for fun.'
        },
      },
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;
