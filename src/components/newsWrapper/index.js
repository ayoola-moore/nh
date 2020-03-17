import React from "react";
import { NewsWrapper } from "./styled";

const NewsWrapperWithTestId = ({ children }) => {
  return <NewsWrapper className={"data-test-id"}>{children}</NewsWrapper>;
};

export default NewsWrapperWithTestId;
