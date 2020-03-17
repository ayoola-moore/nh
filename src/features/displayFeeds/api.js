import axios from "axios";
import { selectFields } from "./selector";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getFeeds = async storyId => {
  try {
    const result = await axios.get(`${storyUrl + storyId}.json`);

    return selectFields(result.data);
  } catch (error) {
    throw `${error} cannot connect to api. Please contact admin`;
  }
};

export const getFeedsById = async () => {
  try {
    const result = await axios.get(newStoriesUrl);

    return result.data;
  } catch (error) {
    throw `${error} cannot connect to api. Please contact admin`;
  }
};
