import React from 'react';
import dynamic from 'next/dynamic';
import HomePage from '@/components/maincomponent/page';
import Head from 'next/head';

// Lazy load the Courses component
const Courses = dynamic(() => import('@/components/courses/page'), {
  loading: () => <div style={{ minHeight: '300px', width: '100%' }}><p>Loading courses...</p></div>, // Show a loading indicator while the component is being loaded
  ssr: false, // Disable server-side rendering for better initial performance
});

const Page = () => {
  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>Study Visa Consultant</title>
        <meta name="description" content="A blog created with Next.js, Tailwind.css and contentlayer." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags for Facebook, LinkedIn, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study Visa Consultant" />
        <meta property="og:description" content="A blog created with Next.js, Tailwind.css and contentlayer." />
        <meta property="og:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta property="og:image" content="https://www.galaxyeducation.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg9webycc%2Fproduction%2Fc9fa639b0093fd264ce97286e4c274f0c89d705c-1522x556.png&w=3840&q=75" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Visa Consultant" />
        <meta name="twitter:description" content="A blog created with Next.js, Tailwind.css and contentlayer." />
        <meta name="twitter:image" content="https://www.galaxyeducation.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg9webycc%2Fproduction%2Fc9fa639b0093fd264ce97286e4c274f0c89d705c-1522x556.png&w=3840&q=75" />

        {/* Facebook App ID (Optional, for Facebook Insights) */}
        <meta property="fb:app_id" content="your-app-id-here" />  {/* Replace with actual App ID */}
      </Head>

      <div className="flex flex-col items-center justify-center">
        {/* Home Page Section */}
        <div style={{ minHeight: '300px', width: '100%' }}>
          <HomePage />
        </div>

        {/* Lazy-loaded Courses Section */}
        <div style={{ minHeight: '300px', width: '100%' }}>
          <Courses />
        </div>
      </div>
    </>
  );
};

export default Page;
