// components/VisitCourseButton.js
"use client"; // This makes the component a Client Component

export default function VisitCourseButton({ href }) {
  return (
    <button
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
    >
        <h1>Click Here to Get Course </h1>
    </button>
  );
}
