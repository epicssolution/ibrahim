import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import BlogCard from "../blogcard/page";

const RecentPosts = async () => {
  try {
    const query = `*[_type=="course"]{
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      title,
      href
    }`;

    // Fetch the courses from Sanity using the client
    const courses = await client.fetch(query);

    return (
      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
        <div className="w-full flex justify-between">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Courses
          </h2>
          <Link
            href="/categories/all"
            className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
          >
            View All
          </Link>
        </div>

        {/* Adding margin-top to increase distance between Courses and BlogCard grid */}
        <div className="mt-8 md:mt-12">
          <main className="flex flex-col items-center justify-center">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <BlogCard course={course} key={course.slug} />
                ))
              ) : (
                <p>No courses available</p>
              )}
            </section>
          </main>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return (
      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
        <p>Failed to load courses. Please try again later.</p>
      </section>
    );
  }
};

export default RecentPosts;
