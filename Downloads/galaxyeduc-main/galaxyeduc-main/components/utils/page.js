// src/utils/sortBlogs.js

/**
 * Sorts an array of blogs by date in descending order.
 * @param {Array} blogs - The array of blog objects to sort.
 * @returns {Array} - The sorted array of blogs.
 */
export function sortBlogs(blogs) {
    if (!Array.isArray(blogs)) return [];
  
    return blogs.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB - dateA; // Sort descending
    });
  }
  