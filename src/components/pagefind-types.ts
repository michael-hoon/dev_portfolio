export interface PagefindSearchResult {
	id: string;
	data: () => Promise<{
		url: string;
		excerpt: string;
		meta: { title: string };
	}>;
}

export interface PagefindSearchResponse {
	results: PagefindSearchResult[];
}

export interface PagefindModule {
	init: () => Promise<void>;
	search: (term: string) => Promise<PagefindSearchResponse>;
}
