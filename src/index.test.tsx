import React from "react";
import Member from "./components/Member";
import { IMember } from "./components/Types";
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
    const component = renderer.create(<Member member={member} />);
    let card = component.toJSON();
    expect(card).toMatchSnapshot();
  });
});
