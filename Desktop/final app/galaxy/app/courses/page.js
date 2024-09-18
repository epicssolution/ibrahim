import ClientPage from "@/components/client page/page";
import { client } from "@/sanity/lib/client";

const Page = async () => {
  const coursesPerPage = 6;
  const query = `*[_type=="course"]{
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    title,
    href
  }[0...${coursesPerPage}]`; // Fetch only the first set of courses

  const initialCourses = await client.fetch(query);

  return (
    <main className="flex flex-col items-center justify-center">
      <h1>Courses</h1>
      <ClientPage initialCourses={initialCourses} coursesPerPage={coursesPerPage} />
    </main>
  );
};

export default Page;
