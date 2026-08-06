import { algoliasearch } from "algoliasearch";

// Algolia configuration - populated from environment variables
// These are public credentials safe to expose in the browser
const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "";
const searchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || "";
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "figranium_presets";

// Validate real credentials (exclude empty/placeholder values that appear before the user fills them in)
const hasRealAppId = appId && appId !== "YOUR_ALGOLIA_APP_ID";
const hasRealApiKey = searchApiKey && searchApiKey !== "YOUR_ALGOLIA_SEARCH_API_KEY";

export const algoliaConfig = {
    appId,
    searchApiKey,
    indexName,
    isConfigured: Boolean(hasRealAppId && hasRealApiKey),
};

// Create a singleton client instance
export const searchClient = algoliaConfig.isConfigured
    ? algoliasearch(appId, searchApiKey)
    : null;

// Helper to search the configured index
export async function searchPresets<T>(query: string, params?: Record<string, unknown>) {
    if (!searchClient) {
        throw new Error("Algolia is not configured. Set NEXT_PUBLIC_ALGOLIA_APP_ID and NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY.");
    }
    return searchClient.searchSingleIndex<T>({
        indexName,
        searchParams: {
            query,
            ...params,
        },
    });
}