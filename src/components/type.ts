export interface IMember {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string;
  gitHub: string;
  twitter: string;
  stackOverflow: string;
  linkedIn: string;
  imagePortraitUrl: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
}

export type MemberState = {
  members: IMember[];
};

export type MemberAction = {
  type: string;
  member: IMember;
};

export type DispatchType = (args: MemberAction) => MemberAction;
