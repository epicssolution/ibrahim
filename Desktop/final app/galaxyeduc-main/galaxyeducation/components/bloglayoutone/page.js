"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head"; // Import Head component
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const UniComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "uni" && !(_id in path("drafts.**"))]{
            description,
            "slug": slug.current,
            image,
            title,
            href,
            tags,
            content,
            heading1,
            heading2
          }
        `;
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (error) {
        setError("Failed to fetch blogs");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Head>
        <title>{blogs.length > 0 ? blogs[0].title : 'University Blog'}</title>
        <meta name="description" content={blogs.length > 0 ? blogs[0].description : 'Description of the university blog'} />

        {/* Open Graph tags */}
        <meta property="og:title" content={blogs.length > 0 ? blogs[0].title : 'University Blog'} />
        <meta property="og:description" content={blogs.length > 0 ? blogs[0].description : 'Description of the university blog'} />
        <meta property="og:image" content={blogs.length > 0 && blogs[0].image?.asset ? urlFor(blogs[0].image).url() : '/default-image.jpg'} />
        <meta property="og:url" content={`https://www.galaxyeducation.org/blogh/${blogs.length > 0 ? blogs[0].slug : ''}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogs.length > 0 ? blogs[0].title : 'University Blog'} />
        <meta name="twitter:description" content={blogs.length > 0 ? blogs[0].description : 'Description of the university blog'} />
        <meta name="twitter:image" content={blogs.length > 0 && blogs[0].image?.asset ? urlFor(blogs[0].image).url() : '/default-image.jpg'} />
      </Head>

      <div className="w-full inline-block">
        {blogs.map((uni) => (
          <div
            key={uni.slug}
            className="group flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]"
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0" />
            {uni.image?.asset && (
              <Image
                src={urlFor(uni.image).url()}
                alt={uni.image?.alt || uni.title}
                width={500} // Adjusted based on usage
                height={300} // Adjusted based on usage
                className="w-full h-full object-center object-cover rounded-3xl -z-10"
                sizes="(max-width: 1180px) 100vw, 50vw"
                priority
              />
            )}

            <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
              {uni.tags && uni.tags.length > 0 && (
                <span className="mt-2 text-sm text-gray-300">{uni.tags[0]}</span>
              )}
              <Link href={`/blogh/${uni.slug}`} className="mt-6">
                <h2 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
                  <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                    {uni.title}
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UniComponent;
