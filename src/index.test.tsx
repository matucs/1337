import React from "react";
import Card from "./components/Card";
import { IMember } from "./components/type";
import renderer  from "react-test-renderer";

describe("Cards should be render", () => {
  const member: IMember = {
    name: "test-member",
    email: "example@1337.com",
    phoneNumber: "0192323434",
    office: "Lurd",
    manager: "manager-member",
    orgUnit: "test",
    mainText: "this is test",
    gitHub: "test@github",
    twitter: "@twiter",
    stackOverflow: "@stackOverflow",
    linkedIn: "@linkedin",
    imagePortraitUrl: "",
    imageWallOfLeetUrl: "",
    highlighted: false,
    published: false,
  };
  test("card renders snapshots, too", () => {
    const component = renderer.create(<Card member={member} />);
    let card = component.toJSON();
    expect(card).toMatchSnapshot();
  });
});
