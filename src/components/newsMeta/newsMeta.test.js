import React from "react";
import NewsMeta from "./";

describe("Component", () => {
  const component = shallow(<NewsMeta />);
  it("should render NewsMeta properly", () => {
    expect(component).toMatchSnapshot();
  });
});
