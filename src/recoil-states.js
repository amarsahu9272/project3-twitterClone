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

export const isInterestAtom = atom({
  key: "isInterested",
  default: false,
});

export const isProfileClickedAtom = atom({
  key: "isProfile",
  default: true,
});
