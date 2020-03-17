import React from "react";
import NewsHeader from "./";

describe("Component", () => {
  const component = shallow(<NewsHeader />);
  it("should render FeedContainerWrapper properly", () => {
    expect(component).toMatchSnapshot();
  });
});
