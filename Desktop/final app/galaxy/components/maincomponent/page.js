"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image"; // Assuming you have this function for building Sanity image URLs

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[ _type=="blog"]{
        _id,
        title,
        "slug": slug.current,
        image,
        description,
      
        
      }`;
      try {
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fallback if no blogs are found
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  // Using the first blog for the cover section
  const blog = blogs[0];

  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0' />

        {blog.image && (
          <Image 
            src={urlFor(blog.image).url()} // Use Sanity's image URL builder
            placeholder='blur'
            blurDataURL={urlFor(blog.image).url()} // Using the image URL for blur effect
            alt={blog.title}
            fill
            className='w-full h-full object-center object-cover rounded-3xl -z-10'
            sizes='100vw'
            priority
          />
        )}

        <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
          {blog.tags && blog.tags.length > 0 && (
            <span className='mt-2 text-sm text-gray-300'>{blog.tags[0]}</span> 
          )}
          <Link href={`/blogs/${blog.slug}`} className='mt-6'>
            <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
