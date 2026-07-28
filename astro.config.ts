import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import spectre from "./package/src";

import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
	site: "https://michaelhoon.dev",
	output: "static",
	redirects: {
		"/projects/[post]": "/posts/[post]",
	},
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Michael Hoon",
			openGraph: {
				home: {
					title: "Michael Hoon",
					description:
						"Portfolio of Michael Hoon — projects, learnings, and photography.",
				},
				projects: {
					title: "Projects",
					description: "Projects I have worked on.",
				},
				blog: {
					title: "Photography",
					description: "Photos I have taken for fun.",
				},
			},
		}),
	],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});

export default config;
