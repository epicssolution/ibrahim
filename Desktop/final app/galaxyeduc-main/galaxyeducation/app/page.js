import React from 'react';
import dynamic from 'next/dynamic';
import HomePage from '@/components/maincomponent/page';

// Lazy load the Courses component
const Courses = dynamic(() => import('@/components/courses/page'), {
  loading: () => <div style={{ minHeight: '300px', width: '100%' }}><p>Loading courses...</p></div>, // Show a loading indicator while the component is being loaded
  ssr: false, // Disable server-side rendering for better initial performance
});

const Page = () => {
  return (
    <>
     
      <div className="flex flex-col items-center justify-center">
        {/* Home Page Section */}
        <div style={{ minHeight: '300px', width: '100%' }}>
          <HomePage />
        </div>

        {/* Lazy-loaded Courses Section */}
        <div style={{ minHeight: '300px', width: '100%' }}>
          <Courses />
        </div>
      </div>
    </>
  );
};

export default Page;
