import React from "react";
import UniComponent1 from "@/components/courses/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function Mar() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Best Online  marketing  Courses</title>
        <meta property="og:title" content="online marketing Consultant" />
        <meta
          property="og:description"
          content="Best Online  marketing  Courses."
        />
        <meta property="og:image" content="https://your-site-url.com/social-banner.png" />
        <meta property="og:url" content="https://your-site-url.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Online  marketing  Courses" />
        <meta
          name="twitter:description"
          content="Best Online  marketing  Courses."
        />
        <meta name="twitter:image" content="https://your-site-url.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center items-center font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]">
          Marketing Courses
        </div>
        
        <div className="mt-6">
          <article style={{ minHeight: '300px', width: '100%' }}>
            <UniComponent1 />
          </article>
        </div>
      </div>
    </>
  );
}
