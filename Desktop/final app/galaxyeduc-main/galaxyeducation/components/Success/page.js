"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";  // Importing Head component
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const Success = () => {
  const [courses, setCourses] = useState([]);
  const coursesPerPage = 100;

  // Fetch courses from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "sucess"]{
            description,
            "slug": slug.current,
            "imageUrl": image.asset->url,
            title,
          }[0...${coursesPerPage}]
        `;
        const result = await client.fetch(query);
        setCourses(result);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Adding Open Graph and Twitter meta tags */}
      <Head>
        <title>Success Stories | Study Visa Consultant</title>
        <meta name="description" content="Read inspiring success stories of our students." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Success Stories | Study Visa Consultant" />
        <meta property="og:description" content="Read inspiring success stories of our students." />
        <meta property="og:image" content={courses[0]?.imageUrl || "/default-image.jpg"} />
        <meta property="og:url" content="https://www.galaxyeducation.org/success" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | Study Visa Consultant" />
        <meta name="twitter:description" content="Read inspiring success stories of our students." />
        <meta name="twitter:image" content={courses[0]?.imageUrl || "/default-image.jpg"} />
      </Head>

      <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center">
        <div className="w-full flex justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Success Stories
          </h2>
        </div>

        <div className="mt-8 md:mt-12">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {courses.length > 0 ? (
              courses.map((course) => (
                <article
                  key={course.slug}
                  className="flex flex-col items-center justify-between rounded-lg shadow-lg bg-light dark:bg-dark overflow-hidden group hover:scale-105 transition-transform duration-500"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[250px] sm:h-[165px] md:h-[200px] overflow-hidden">
                    {course.imageUrl ? (
                      <Image
                        src={course.imageUrl}
                        alt={course.title || "Course image"}
                        width={500}
                        height={300}
                        className="transition-transform duration-500 transform group-hover:scale-110 object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                        <span className="text-dark/70 dark:text-light/70">
                          Image not available
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title and Summary */}
                  <div className="flex flex-col justify-between gap-y-1 p-2 w-full">
                    <h2 className="text-lg font-bold text-center text-dark dark:text-light leading-tight mb-1 line-clamp-2">
                      {course.title || "Untitled Course"}
                    </h2>

                    {/* Read More Link */}
                    <Link href={`/blogsu/${course.slug}`}>
                      <button
                        className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300"
                        aria-label={`Read more about ${course.title || "this course"}`}
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p>No courses available</p>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Success;
