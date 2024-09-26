import { compareDesc, parseISO } from 'date-fns';

// src/utils/index.js
export const cx = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const sortBlogs = (blogs) => {
  // Check if blogs is undefined or null and return an empty array
  if (!blogs) {
    return [];
  }

  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
