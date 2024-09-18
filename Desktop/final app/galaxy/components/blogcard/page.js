import Image from "next/image"; 
import Link from "next/link";

export default function BlogCard({ course }) {
  const imageUrl = course?.imageUrl || null;

  return (
    <article className="flex flex-col items-center justify-between rounded-lg shadow-lg bg-light dark:bg-dark overflow-hidden group hover:scale-105 transition-transform duration-500">
      {/* Image Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={course?.title || "Course image"}
            fill
            className="transition-transform duration-500 transform group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  33vw"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
            <span className="text-dark/70 dark:text-light/70">Image not available</span>
          </div>
        )}
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-y-4 p-6 w-full">
        <h2 className="text-xl font-bold text-center text-dark dark:text-light leading-tight mb-2 line-clamp-2">
          {course?.title || "Untitled Course"}
        </h2>

        {/* Read More Link */}
        <Link href={`/blog/${course?.slug || "#"}`}>
          <button
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300"
            aria-label={`Read more about ${course?.title || "this course"}`}
          >
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
}
