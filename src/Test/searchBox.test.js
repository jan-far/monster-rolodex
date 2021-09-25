import React from "react";
import { shallow } from "enzyme";
import SearchBox from "../Components/SearchBox";

describe("SearchBox Tests", () => {
  const mockPlaceholder = "Test suite";
  const mockHandleChange = jest.fn();

  it("make a snapshot of SearchBox comonent", () => {
    expect(
      shallow(<SearchBox placeholder={mockPlaceholder} handleChange={mockHandleChange} />)
    ).toMatchSnapshot();
  });
});
