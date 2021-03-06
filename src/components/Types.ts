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
export type SortType = "name" | "office";
export type MemberState = {
  members: IMember[];
  result: IMember[];
  loading: boolean;
};

export type MemberAction = {
  type: string;
  payload: IMember[];
  isLoading: boolean,
  filter: { name: string; office: string };
};

export type DispatchType = (args: MemberAction) => MemberAction;
