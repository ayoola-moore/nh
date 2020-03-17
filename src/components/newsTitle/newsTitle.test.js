import React from "react";
import NewsTitle from "./";

describe("Component", () => {
  const component = shallow(<NewsTitle />);
  it("should render NewsTitle properly", () => {
    expect(component).toMatchSnapshot();
  });
});
