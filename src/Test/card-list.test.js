import React from "react";
import { shallow } from "enzyme";
import CardList from "../Components/Card-list";

describe("CardList Tests", () => {
  const mockMonster = [{ id: 1, name: "ralph", email: "robo@gmail.com" }];
  it("Make a snapshot of CardList comonent", () => {
    expect(shallow(<CardList monsters={mockMonster} />)).toMatchSnapshot();
  });
});
