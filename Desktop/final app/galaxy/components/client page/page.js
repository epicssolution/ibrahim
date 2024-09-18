"use client";

import { useState, useEffect } from "react";
import RecentPosts from "../RecentPosts/page";

const ClientPage = ({ initialCourses, coursesPerPage }) => {
  const [courses, setCourses] = useState(initialCourses);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch courses with pagination
  const fetchCourses = (page) => {
    const startIndex = (page - 1) * coursesPerPage;
    const query = `
    *[_type=="course"]{
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      title,
      href
    }[${startIndex}...${startIndex + coursesPerPage}]
    `;
    fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((result) => setCourses(result.courses))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  // Fetch new courses when the currentPage changes
  useEffect(() => {
    if (currentPage > 1) {
      fetchCourses(currentPage);
    }
  }, [currentPage]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col items-center justify-center">
      <RecentPosts courses={courses} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="mx-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Previous
          </button>
        )}
        <button onClick={handleNextPage} className="mx-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default ClientPage;
