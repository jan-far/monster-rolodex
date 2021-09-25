import React from "react";
import { shallow } from "enzyme";
import App from "../App";

const getMonters = async () => {
  const monters = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await monters.json();
  return result;
};

describe("App Tests", () => {
  const wrapper = shallow(<App />);

  it("Make a snapshot of App comonent", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show initial value of the component state", () => {
    expect(wrapper.state()).toEqual({ monsters: [], searchField: "" });
  });

  it("should populate the monsters state of the app", () => {
    expect.assertions(1);

    return getMonters().then((data) => {
      wrapper.setState({ monsters: data });
      expect(wrapper.state("monsters").length).toEqual(data.length);
    });
  });

  it("should get undefined for handleChange function", () => {
    const event = { target: { value: "test" } };
    expect(wrapper.instance().handleChange(event)).toEqual(undefined);
  });

  it("should update the state of searchFied", () => {
    expect(wrapper.state("searchField")).toEqual("test");
  });

  it("should change state value for searchField", () => {
    const handleChange = jest.fn((val) => wrapper.setState({ searchField: val }));

    handleChange("monster");
    expect(wrapper.state("searchField")).toEqual("monster");
  });

  it("should filter the monsters state array", () => {
    const mockMonsters = [
      {
        id: 1,
        name: "ralph",
        email: "ralph@mail.com",
      },
      { id: 2, name: "flow", email: "flow@mail.com" },
    ];
    wrapper.setState({ monsters: mockMonsters });

    const handleChange = jest.fn((val) => wrapper.setState({ searchField: val }));
    handleChange("r");

    const filteredMonster = [
      {
        id: 1,
        name: "ralph",
        email: "ralph@mail.com",
      },
    ];

    expect(wrapper.instance().filteredMonsters()).toEqual(filteredMonster);
  });
});
