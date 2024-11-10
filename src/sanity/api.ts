import { client } from "./client";

export async function getPosts() {
  const posts = await client.fetch(
    `*[_type == "episode"]{
      title,
      numbering,
      speaker,
      slug,
      publishedAt,
      SpotifyURL,
      body,
    }`
  );
  return posts;
}
