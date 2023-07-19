import React from "react";
import { shallow } from "enzyme";
import App from "./app";

describe("App", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
