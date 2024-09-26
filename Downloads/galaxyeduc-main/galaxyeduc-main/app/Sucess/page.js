import Success from '@/components/Success/page';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
      <Head>
        {/* Open Graph (Facebook and LinkedIn) */}
        <meta property="og:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Study Visa Consultant" />
        <meta property="og:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        <meta property="og:image" content="https://www.galaxyeducation.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg9webycc%2Fproduction%2Fc9fa639b0093fd264ce97286e4c274f0c89d705c-1522x556.png&w=3840&q=75" />
        <meta property="fb:app_id" content="your-app-id" /> {/* Replace with your actual Facebook App ID */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:title" content="Study Visa Consultant" />
        <meta name="twitter:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        <meta name="twitter:image" content="https://www.galaxyeducation.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg9webycc%2Fproduction%2Fc9fa639b0093fd264ce97286e4c274f0c89d705c-1522x556.png&w=3840&q=75" />

        {/* LinkedIn Sharing */}
        <meta property="og:title" content="Study Visa Consultant" />
        <meta property="og:description" content="Educational websites help students gain admission to top universities and enroll in the best courses." />
        <meta property="og:image" content="https://www.galaxyeducation.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg9webycc%2Fproduction%2Fc9fa639b0093fd264ce97286e4c274f0c89d705c-1522x556.png&w=3840&q=75" />
        <meta property="og:url" content="https://www.galaxyeducation.org/blog/course-promotion-cases-2" />
        <meta property="og:type" content="article" />
      </Head>
      <div>
        <Success />
      </div>
    </>
  );
};

export default page;
