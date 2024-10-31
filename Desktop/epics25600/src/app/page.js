import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load components with suspense enabled
const HomePage = dynamic(() => import('@/components/Homecomponent/page'), {
  suspense: true, // Enable suspense for better concurrent loading
});

const Engineering = dynamic(() => import('@/components/engineering/page'), {
  suspense: true, // Enable suspense for better concurrent loading
});

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* Home Page Section */}
      <section
        className="min-h-[300px] w-full flex items-center justify-center bg-gray-100"
        aria-label="Home Page Section"
      >
        <Suspense fallback={<p>Loading Home Page...</p>}>
          <HomePage />
        </Suspense>
      </section>

      {/* Engineering Section */}
      <div className="flex flex-col items-center w-full mt-6">
        

        {/* Engineering Content */}
        <article style={{ minHeight: '300px', width: '100%' }}>
          <Suspense fallback={<p>Loading Engineering Section...</p>}>
            <Engineering />
          </Suspense>
        </article>
      </div>
    </main>
  );
};

export default Page;
