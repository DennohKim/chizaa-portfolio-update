import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { getBlogPosts } from '@/data/blog';

export async function generateMetadata({
  params
}: {params: {slug: string}}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://leerob.io${image}`
    : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://leerob.io/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className='container relative mx-auto scroll overflow-auto p-4 print:p-4 md:p-6'>
      <section className='mx-auto w-full max-w-2xl space-y-8 print:space-y-6'>
        <script
          type='application/ld+json'
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `https://denniskimathi.dev${post.metadata.image}`
                : `https://denniskimathi.dev/og?title=${post.metadata.title}`,
              url: `https://denniskimathi.dev/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Dennis Kimathi',
              },
            }),
          }}
        />
        <div className=''>
          <h1 className='title font-medium text-2xl tracking-tighter max-w-[650px]'>
            {post.metadata.title}
          </h1>
          <div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
            <p className='text-sm text-neutral-200'>
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
          <article className='prose prose-quoteless prose-neutral prose-pre:text-purple-300 prose-code:text-pink-300 prose-p:text-neutral-300 prose-li:text-neutral-400 prose-a:text-purple-300 prose-headings:text-white prose-h1:font-bold  '>
            <CustomMDX source={post.content} />
          </article>
        </div>
      </section>
    </main>
  );
}
