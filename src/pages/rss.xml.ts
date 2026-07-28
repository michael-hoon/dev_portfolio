import { getCollection } from "astro:content";
import { name, openGraph } from "spectre:globals";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection(
		"posts",
		({ data }) => import.meta.env.DEV || !data.draft,
	);

	return rss({
		title: name,
		description: openGraph.home.description ?? "",
		site: context.site ?? "https://michaelhoon.dev",
		items: posts
			.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
			.map((post) => ({
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.date,
				link: `/posts/${post.id}/`,
			})),
	});
}
