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
// <<<<<<< HEAD
  key: "isInterested",
  default: false,
});

export const isProfileClickedAtom = atom({
  key: "isProfile",
  default: true,
});
// =======
//   key:"isInterested",
//   default:false
// })

export const selectFile=atom({
  key:"selectedFile",
  default:null
})

export const totalTweets = atom({
  key: "totalTweets",
  default: tweetPosts,
});
// >>>>>>> 3bdb81c48d786a89afbcaf830983655cb5e7e3ed
