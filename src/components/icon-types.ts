import type { icons as lucideIcons } from "@iconify-json/lucide/icons.json";
import type { icons as simpleIcons } from "@iconify-json/simple-icons/icons.json";

export type IconRef =
	| { type: "lucide"; name: keyof typeof lucideIcons }
	| { type: "simple-icons"; name: keyof typeof simpleIcons };
