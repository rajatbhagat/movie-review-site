import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const reviews = await getCollection('reviews');

  const searchData = reviews.map((review) => ({
    title: review.data.title,
    slug: review.slug,
    excerpt: review.data.excerpt,
    genre: review.data.genre,
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
