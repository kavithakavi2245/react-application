import React from "react";
import { shallow } from "enzyme";
import Assets from "./assets";

describe("Assets", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Assets />);
    expect(wrapper).toMatchSnapshot();
  });
});
