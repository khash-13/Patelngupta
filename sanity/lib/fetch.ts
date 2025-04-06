import { draftMode } from "next/headers";
import { client } from "./client";
import { QueryParams } from "next-sanity";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN || "";

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({
      useCdn: !isDraftMode && !isDevelopment, // Using CDN in production unless in draft mode
      ...(isDraftMode && { token, perspective: "previewDrafts" }),
    })
    .fetch<QueryResponse>(query, params);
}
