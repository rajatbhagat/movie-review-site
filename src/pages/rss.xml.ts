import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const reviews = await getCollection('reviews');
  const sortedReviews = reviews.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: 'CineReview',
    description: 'Your go-to destination for honest movie reviews and recommendations.',
    site: context.site || 'https://your-movie-blog.netlify.app',
    items: sortedReviews.map((review) => ({
      title: review.data.title,
      pubDate: review.data.publishDate,
      description: review.data.excerpt,
      link: `/reviews/${review.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
