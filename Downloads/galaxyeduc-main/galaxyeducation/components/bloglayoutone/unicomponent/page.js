"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head"; // Importing Head component

const UniComponent1 = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchData = async () => {
      const query = `
        *[_type=="university"]{
          description,
          "slug": slug.current,
          image,
          title,
          href,
          tags,
          content,
          heading1,
          heading2,
          publishedAt
        }
      `;
      const result = await client.fetch(query);
      setUniversities(result);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Adding dynamic Open Graph meta tags */}
      <Head>
        <title>Universities | Galaxy Education</title>
        <meta name="description" content="Explore universities and their detailed information." />

        {/* Open Graph tags */}
        <meta property="og:title" content="Universities | Galaxy Education" />
        <meta property="og:description" content="Explore universities and their detailed information on Galaxy Education." />
        <meta property="og:image" content="https://www.galaxyeducation.org/path-to-your-default-image.jpg" />
        <meta property="og:url" content="https://www.galaxyeducation.org/university" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Universities | Galaxy Education" />
        <meta name="twitter:description" content="Explore universities and their detailed information." />
        <meta name="twitter:image" content="https://www.galaxyeducation.org/path-to-your-default-image.jpg" />
      </Head>

      <div className="flex flex-col items-center">
        {universities.map((uni) => (
          <div key={uni.slug} className="group flex flex-col items-center text-dark dark:text-light mb-8">
            <Link href={`/university/${uni.slug}`} className="h-full rounded-xl overflow-hidden">
              {uni.image && (
                <Image
                  src={urlFor(uni.image).url()} // Using urlFor to generate the image URL
                  alt={uni.image.alt || uni.title} // Using alt text if available
                  width={(uni.image.asset?.metadata?.dimensions?.width || 400) / 2} // 50% of the original width
                  height={(uni.image.asset?.metadata?.dimensions?.height || 200) / 2} // 50% of the original height
                  className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                  sizes="(max-width 440px) 80vw, (max-width: 824px) 30vw, 23vw"
                />
              )}
            </Link>

            <div className="flex flex-col w-full mt-4">
              {uni.tags && uni.tags.length > 0 && (
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                  {uni.tags[0]}
                </span>
              )}
              <Link href={`/university/${uni.slug}`} className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span
                    className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50
                    bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                  >
                    {uni.title}
                  </span>
                </h2>
              </Link>

              <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mt-2">
                {uni.publishedAt ? 
                  new Date(uni.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 
                  "Date not available"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UniComponent1;
