import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {displayName}{" "}
              <span className="postHeaderSpecial">
                {verified && <VerifiedUserIcon className="postBadge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="img" src={image} alt="" />
        <div className="postFooter">
          <ChatBubbleOutlineIcon fontSize="small" className="chatBubble" style={{padding:".5rem"}} />
          <RepeatIcon fontSize="small" className="repeatIcon" style={{padding:".5rem"}}/>
          <FavoriteBorderIcon fontSize="small" className="FavouriteIcon" style={{padding:".5rem"}}/>
          <PublishIcon fontSize="small" className="publishIcon" style={{padding:".5rem"}}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
