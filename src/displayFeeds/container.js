import React, { useEffect, useState } from "react";
import { Story } from "../components/story";
import { GlobalStyle } from "../utils/global-style";
import { getFeedsById } from "./api";
import { useInfiniteScroll } from "./hooks";
import { FeedsContainerWrapper, NewsHeader } from "./styled";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getFeedsById().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <FeedsContainerWrapper data-test-id="stories-container">
        <NewsHeader data-test-id="nh-header">NH</NewsHeader>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </FeedsContainerWrapper>
    </>
  );
};

export default StoriesContainer;
