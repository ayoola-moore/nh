/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";

// Feeds will be loaded in batch of 20
export const STORY_INCREMENT = 20;

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    // Determine when more feeds should be loaded
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 100);

  useEffect(() => {
    if (!loading) return;

    setCount(count + STORY_INCREMENT);

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    // set up listener for scroll event
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
