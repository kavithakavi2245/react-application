import React from "react";
import { shallow } from "enzyme";
import Store from "./store";

describe("Store", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Store />);
    expect(wrapper).toMatchSnapshot();
  });
});
