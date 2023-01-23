import { atom } from "recoil";

export const isUserLoggedInAtom = atom({
  key: "isUserLoggedIn",
  default: true,
});

export const profileDataAtom = atom({
  key: "profileData",
  default: {},
});
export const followButtonAtom = atom({
  key: "followButtonData",
  default: true,
});
