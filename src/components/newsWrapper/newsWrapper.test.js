import React from "react";
import NewsWrapper from "./";

describe("Component", () => {
  const component = shallow(<NewsWrapper />);
  it("should render NewsWrapper properly", () => {
    expect(component).toMatchSnapshot();
  });
});
