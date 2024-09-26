import Head from 'next/head';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import VisitCourseButton from "@/components/button/page";
import siteMetadata from "@/utils/siteMetadata";  // Correctly cased import

export const revalidate = 60; // seconds

export async function generateStaticParams() {
  const query = `*[_type=='course']{
    "slug": slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((item) => ({ slug: item.slug }));
}

// To create static pages for dynamic routes
export default async function Page({ params }) {
  const { slug } = params;

  // Fetching the course based on the slug
  const query = `*[_type=="course" && slug.current == $slug]{
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    title,
    href
  }[0]`; // Fetch only the first matching document

  const course = await client.fetch(query, { slug });

  // Fallback image for social media previews if course image is unavailable
  const ogImageUrl = course.imageUrl || siteMetadata.defaultImage;

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 items-center text-dark dark:text-light">
      {/* Adding dynamic Open Graph meta tags */}
      <Head>
        <title>{course.title} | courses</title>
        <meta name="description" content={course.description} />

        {/* Open Graph tags for all social platforms */}
        <meta property="og:title" content={course.title} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`https://www.galaxyeducation.org/course/${course.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Galaxy Education" />
        <meta property="fb:app_id" content={siteMetadata.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.title} />
        <meta name="twitter:description" content={course.description} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* LinkedIn Tags */}
        <meta name="linkedin:title" content={course.title} />
        <meta name="linkedin:description" content={course.description} />
        <meta name="linkedin:image" content={ogImageUrl} />

        {/* Pinterest Tags */}
        <meta name="pinterest:title" content={course.title} />
        <meta name="pinterest:description" content={course.description} />
        <meta name="pinterest:image" content={ogImageUrl} />
      </Head>

      {/* Blog Title */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-8">
        {course.title}
      </h1>

      <section className="mt-8 flex justify-center">
        <VisitCourseButton href={course.href} />
      </section>

      {/* Featured Image */}
      {course.imageUrl && (
        <div className="w-full max-w-4xl">
          <Image
            src={course.imageUrl}
            width={1300}
            height={500}
            alt={course.title || "Course image"}
            className="rounded w-full object-cover"
          />
        </div>
      )}

      {/* Blog Summary Section */}
      <section className="text-center w-full max-w-4xl">
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary mb-4">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {course.description}
        </p>
      </section>

      {/* Centered Button */}
      <section className="mt-8 flex justify-center">
        <VisitCourseButton href={course.href} />
      </section>
    </article>
  );
}
