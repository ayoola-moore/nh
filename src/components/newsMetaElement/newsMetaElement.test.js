import React from "react";
import NewsMetaElement from "./";

describe("Component", () => {
  const component = shallow(<NewsHeader />);
  it("should render NewsMetaElement properly", () => {
    expect(component).toMatchSnapshot();
  });
});
