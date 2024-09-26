"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  // Check if environment variables are set
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = supabaseUrl && supabaseKey ? createClientComponentClient() : null;

  useEffect(() => {
    if (!supabase || noCount) return;

    const fetchViews = async () => {
      const { data, error } = await supabase
        .from("views")
        .select("count")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching views:", error);
      } else {
        setViews(data?.count || 0);
      }
    };

    fetchViews();
  }, [slug, noCount, supabase]);

  if (!supabaseUrl || !supabaseKey) {
    console.error(
      "Error: Both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables are required!"
    );
    return null;
  }

  if (!showCount) return null;

  return <span>{views} views</span>;
};

export default ViewCounter;
