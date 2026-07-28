import { defineCollection, reference, z } from "astro:content";
import type { icons as lucideIcons } from "@iconify-json/lucide/icons.json";
import type { icons as simpleIcons } from "@iconify-json/simple-icons/icons.json";
import { file, glob } from "astro/loaders";

const other = defineCollection({
	loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
	type: z.literal("lucide"),
	name: z.custom<keyof typeof lucideIcons>(),
});

const simpleIconSchema = z.object({
	type: z.literal("simple-icons"),
	name: z.custom<keyof typeof simpleIcons>(),
});

const quickInfo = defineCollection({
	loader: file("src/content/info.json"),
	schema: z.object({
		id: z.number(),
		icon: z.union([lucideIconSchema, simpleIconSchema]),
		text: z.string(),
		link: z.string().optional(),
	}),
});

const socials = defineCollection({
	loader: file("src/content/socials.json"),
	schema: z.object({
		id: z.number(),
		icon: z.union([lucideIconSchema, simpleIconSchema]),
		text: z.string(),
		link: z.string().url(),
	}),
});

const workExperience = defineCollection({
	loader: file("src/content/work.json"),
	schema: z.object({
		id: z.number(),
		title: z.string(),
		company: z.string(),
		duration: z.string(),
		description: z.string(),
	}),
});

const tags = defineCollection({
	loader: file("src/content/tags.json"),
	schema: z.object({
		id: z.string(),
	}),
});

const posts = defineCollection({
	loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			type: z.enum(["project", "note"]).default("project"),
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			draft: z.boolean().default(false),
			image: image().optional(),
			link: z.string().url().optional(),
			info: z
				.array(
					z.object({
						text: z.string(),
						icon: z.union([lucideIconSchema, simpleIconSchema]),
						link: z.string().url().optional(),
					}),
				)
				.optional(),
			tags: z.array(reference("tags")).optional(),
		}),
});

export const collections = {
	tags,
	posts,
	other,
	quickInfo,
	socials,
	workExperience,
};
