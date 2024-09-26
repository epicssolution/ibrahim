import Head from 'next/head';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import siteMetadata from "@/utils/siteMetadata"; // Import site metadata

export const revalidate = 60; // seconds

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const query = `*[_type=='sucess']{
    "slug": slug.current
  }`;
  const slugs = await client.fetch(query);
  return slugs.map((item) => ({ slug: item.slug }));
}

// To create static pages for dynamic routes
export default async function Page({ params }) {
  const { slug } = params;

  // Fetching the course based on the slug
  const query = `*[_type=="sucess" && slug.current == $slug]{
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    title,
    href
  }[0]`; // Fetch only the first matching document

  const course = await client.fetch(query, { slug });

  // Check if course data is null or undefined
  if (!course) {
    return <div className="text-center">Course not found</div>;
  }

  // Fallback image for social sharing if the course image is missing
  const ogImageUrl = course.imageUrl || siteMetadata.socialBanner;

  return (
    <>
      {/* Add Open Graph and Twitter Card Meta Tags */}
      <Head>
        <title>{course.title || "Success Story"}</title>
        <meta name="description" content={course.description || "Success story description"} />

        {/* Open Graph meta tags for Facebook, LinkedIn */}
        <meta property="og:title" content={course.title || "Success Story"} />
        <meta property="og:description" content={course.description || "Success story description"} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/success/${course.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content={siteMetadata.fbAppID} />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.title || "Success Story"} />
        <meta name="twitter:description" content={course.description || "Success story description"} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:url" content={`${siteMetadata.siteUrl}/success/${course.slug}`} />

        {/* LinkedIn specific meta tags */}
        <meta property="og:site_name" content={siteMetadata.siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Galaxy Education Team" />
      </Head>

      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 items-center text-dark dark:text-light">
        {/* Blog Title */}
        <h1 className="text-3xl lg:text-5xl font-bold mb-8">
          {course.title || "No title available"}
        </h1>

        {/* Featured Image */}
        {course.imageUrl ? (
          <div className="w-full max-w-4xl">
            <Image
              src={course.imageUrl}
              width={1300}
              height={500}
              alt={course.title || "Course image"}
              className="rounded w-full object-cover"
            />
          </div>
        ) : (
          <p>No image available</p>
        )}

        {/* Blog Summary Section */}
        <section className="text-center w-full max-w-4xl">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary mb-4">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {course.description || "No description available"}
          </p>
        </section>
      </article>
    </>
  );
}
