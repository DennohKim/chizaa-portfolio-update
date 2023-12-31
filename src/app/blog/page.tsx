import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className='mx-auto max-w-5xl flex flex-col gap-y-8 sm:gap-y-4 py-8'>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
        read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='flex flex-col space-y-1 mb-4 text-white'
            href={`/blog/${post.slug}`}
          >
            <div className='w-full flex flex-col'>
              <p className='text-neutral-100 dark:text-neutral-100 tracking-tight hover:text-neutral-400'>
                {post.metadata.title}
              </p>
              {/* <Suspense fallback={<p className='h-6' />}>
                <Views slug={post.slug} />
              </Suspense> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
