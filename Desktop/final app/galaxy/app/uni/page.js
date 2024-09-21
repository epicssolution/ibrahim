import React from "react";
import UniComponent from "@/components/bloglayoutone/page";
import UniComponent1 from "@/components/bloglayoutone/unicomponent/page";

export default function Uni() {
  return (
    <div className=" mt-8">
   

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 xl:col-span-1 row-span-2 relative">
          <UniComponent />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <UniComponent1 />
        </article>
      </div>
    </div>
  );
}
