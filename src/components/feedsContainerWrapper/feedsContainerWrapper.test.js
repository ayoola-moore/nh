import React from "react";
import FeedContainerWrapper from "./"

describe("ErrorBoundary", () => {
  const component = shallow(<FeedContainerWrapper />);
  it("should render FeedContainerWrapper properly", () => {
    expect(component).toMatchSnapshot();
  });
});
