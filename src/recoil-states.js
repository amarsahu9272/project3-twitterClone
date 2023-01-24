import { atom } from "recoil";
import { tweetPosts } from "./const";
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
  key:"isInterested",
  default:false
})

export const selectFile=atom({
  key:"selectedFile",
  default:null
})

export const totalTweets = atom({
  key: "totalTweets",
  default: tweetPosts,
});