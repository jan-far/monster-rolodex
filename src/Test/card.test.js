import React from "react";
import { shallow } from "enzyme";
import Cards from "../Components/Cards";

describe("Cards Tests", () => {
  const mockMonster = { id: 1, name: "ralph", email: "robo@gmail.com" };
  it("Make a snapshot of Cards comonent", () => {
    expect(shallow(<Cards monster={mockMonster} />)).toMatchSnapshot();
  });
});
