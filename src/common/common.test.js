import React from "react";
import { shallow } from "enzyme";
import Common from "./common";

describe("Common", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Common />);
    expect(wrapper).toMatchSnapshot();
  });
});
