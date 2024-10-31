// components/VisitCourseButton.js
"use client"; // This makes the component a Client Component

export default function VisitCourseButton({ href }) {
  return (
    <button
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      className=" flex justify-center align-middle font-semibold px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg"
    >
        <h1>Click Here to Get Course </h1>
    </button>
  );
}
