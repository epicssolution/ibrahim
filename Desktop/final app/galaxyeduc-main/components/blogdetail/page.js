// components/BlogDetails.js
import Link from "next/link";
import React from "react";

const BlogDetails = ({ blog }) => {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg">
      {/* Display the blog title */}
      <div className="m-3 font-bold">{blog.title || 'Untitled'}</div>

    
      {/* Display the link */}
      {blog.href && (
        <Link href={blog.href} className="m-3 text-blue-500 underline">
          Read More
        </Link>
      )}

      
    </div>
  );
};

export default BlogDetails;
