import React from "react";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import './TweetFooterIcons.css'
const footerIcon = [
  { Icon: InsertPhotoOutlinedIcon },
  { Icon: GifBoxOutlinedIcon },
  { Icon: BallotOutlinedIcon },
  { Icon: SentimentSatisfiedOutlinedIcon },
  { Icon: CalendarTodayTwoToneIcon },
  { Icon: FmdGoodOutlinedIcon },
];
function TweetFooterIcons() {
  return (
    <div className="tweetFooterIcons">
        {footerIcon.map((icon,i)=>(
            <p key={i} style={{padding: ".4rem"}}>{<icon.Icon/>}</p>
        ))}
    </div>
  );
}

export default TweetFooterIcons;
