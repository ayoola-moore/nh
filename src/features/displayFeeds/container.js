import React, { useEffect, useState } from "react";
import FeedsContainerWrapper from "../../components/feedsContainerWrapper";
import NewsHeader from "../../components/newsHeader";
import { GlobalStyle } from "../../utils/global-style";
import { getFeedsById } from "./api";
import { useInfiniteScroll } from "./hooks";
import { Story } from "./story";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getFeedsById().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <FeedsContainerWrapper>
        <NewsHeader>NH</NewsHeader>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </FeedsContainerWrapper>
    </>
  );
};

export default StoriesContainer;
