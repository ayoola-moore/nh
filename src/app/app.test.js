import React from "react";
import App from "./app";

describe("Landing page", () => {
  it("should render without crashing", () => {
    const wrapper = render(<App />);
    expect(wrapper.html()).toBeTruthy();
  });
});
