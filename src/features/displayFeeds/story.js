/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from "react";
import NewsMeta from "../../components/newsMeta";
import NewMetaElement from "../../components/newsMetaElement";
import NewTitle from "../../components/newsTitle";
import NewsWrapper from "../../components/newsWrapper";
import { getFeeds } from "./api";
import { mapTime } from "./utils";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getFeeds(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <NewsWrapper data-test-id="feeds">
      <NewTitle>
        <a href={story.url}>{story.title}</a>
      </NewTitle>
      <NewsMeta>
        <span>
          <NewMetaElement color="#000">By:</NewMetaElement> {story.by}
        </span>
        <span>
          <NewMetaElement color="#000">Posted:</NewMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </NewsMeta>
    </NewsWrapper>
  ) : null;
});

export default Story;
