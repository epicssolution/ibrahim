import React from "react";
import Engineering from "@/components/engineering/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function Eng() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Engineering courses</title>
        <meta property="og:title" content="online courses" />
        <meta
          property="og:description"
          content="Educational websites help students gain admission to top uonline courses  and enroll in the best courses."
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Visa Consultant" />
        <meta
          name="twitter:description"
          content="Educational websites help students gain admission to top universities and enroll in the best courses."
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
       Engineering Courses

        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Engineering />
        </article></div>
      </div>
    </>
  );
}
