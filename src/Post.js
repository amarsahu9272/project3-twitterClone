import React, { useState } from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import { profileDataAtom } from "./recoil-states";
import { useSetRecoilState } from "recoil";
// import { tweetPosts } from "./const";
// { displayName, username, verified, text, image, avatar }
const Post = ({ profiledata }) => {
  const {
    profilePic,
    name,
    verified,
    handlerName,
    joinedDate,
    // organization,
    tweetText,
    tweetPic,
  } = profiledata;
  let [comment, setComment] = useState(1);
  let [retweet, setRetweet] = useState(2);
  let [like, setLike] = useState(3);
  let [share, setShare] = useState();
  const setProfileData = useSetRecoilState(profileDataAtom);

  const handleProfileClick = () => {
    console.log(profiledata);
    setProfileData(profiledata);
  };
  const comments = () => {
    setComment(comment++);
  };
  const retweets = () => {
    setRetweet(retweet++);
  };
  const likes = () => {
    setLike(like++);
  };
  const shares = () => {
    setShare(share++);
  };
  return (
    <div className="post">
      <div className="postAvatar" onClick={handleProfileClick}>
        <Avatar src={profilePic} />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {name}{" "}
              <span className="postHeaderSpecial">
                {verified && <VerifiedUserIcon className="postBadge" />}
                {handlerName} - {joinedDate}
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>{tweetText}</p>
          </div>
        </div>
       {tweetPic&&<img className="img" src={tweetPic} alt="" />}
        <div className="postFooter">
          <div className="comment">
            <ChatBubbleOutlineIcon
              onClick={comments}
              fontSize="small"
              className="chatBubble"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={comment}>
              {comment}K
            </span>
          </div>
          <div className="retweet">
            <RepeatIcon
              onClick={retweets}
              fontSize="small"
              className="repeatIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={retweet}>
              {retweet}K
            </span>
          </div>
          <div className="like">
            <FavoriteBorderIcon
              onClick={likes}
              fontSize="small"
              className="FavouriteIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={like}>
              {like}K
            </span>
          </div>
          <div className="share">
            <PublishIcon
              onClick={shares}
              fontSize="small"
              className="publishIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={share}>
              {share}K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
