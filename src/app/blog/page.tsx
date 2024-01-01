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
    <section className='mx-auto max-w-5xl flex flex-col gap-y-8 sm:gap-y-4 py-8 px-4'>
      <h1 className='font-semibold text-2xl text-primary-color tracking-tighter'>Read my blog</h1>
      <p className='font-normal mb-8'>
        On my blog, I share the build process of projects, debugging error codes, and
        discuss technologies I find fascinating like JS frontend frameworks, blockchain,
        devops, and UI/UX design. Take a look!
      </p>
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
              <p className='text-neutral-100 font-medium tracking-tight hover:underline'>
                {post.metadata.title}
              </p>
              <p className='text-neutral-400  '>{post.metadata.publishedAt}</p>
              {/* <Suspense fallback={<p className='h-6' />}>
                <Views slug={post.slug} />
              </Suspense> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
