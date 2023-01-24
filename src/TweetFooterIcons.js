import React,{useRef} from "react";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import  {selectFile} from "./recoil-states";
import {useRecoilState} from "recoil";

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
   const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
   const filePickerRef = useRef("");
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <div className="tweetFooterIcons">
      {footerIcon.map((icon, i) =>
        i === 0 ? (
          <>
            <p
              key={i}
              style={{ padding: ".4rem" }}
              onClick={() => filePickerRef.current.click()}
            >
              {<icon.Icon />}
            </p>

            <input
              type="file"
              hidden
              onChange={addImageToPost}
              ref={filePickerRef}
            />
          </>
        ) : (
          <p key={i} style={{ padding: ".4rem" }}>
            {<icon.Icon />}
          </p>
        )
      )}
    </div>
  );
}

export default TweetFooterIcons;
