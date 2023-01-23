import { Popover } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isInterestAtom } from "./recoil-states";
import "./WhatsHappening.css";
// import TwitterEmbedd from './TwitterEmbedded'

const whatHappData = [
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
  {
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    trends: "Trending in India",
    trending: "BBCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
];
export default function WhatsHappening() {
  let [whatHappeningData, setWhatHappeninData] = useState(whatHappData);
  const [anchor, setAnchor] = useState(null);
  const setUserIntersted = useSetRecoilState(isInterestAtom);
  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleInterest = (wData) => {
    
    const indexOfClickedHappen = whatHappeningData.findIndex(
      (index) => index.trending === wData.trending
    );
    whatHappeningData[indexOfClickedHappen].isNotInterested =
      !whatHappeningData[indexOfClickedHappen].isNotInterested;
    setWhatHappeninData([...whatHappData]);
    setUserIntersted(false);
    setAnchor(null)
  };
  return (
    <div className="whatsHappeningContainer">
      <h2>What's happening</h2>
      {/* <TwitterEmbedded/> */}
      <div className="trends-p">
        {whatHappeningData.map(
          (wData, i) =>
            !wData.isNotInterested && (
              <div key={i} className="trending">
                <div className="trends">
                  <span>{wData.trends}</span>
                  <h3>#{wData.trending}</h3>
                  <span>{wData.noTweet} Tweets</span>
                </div>
                <p onClick={popoverProfileButton}>...</p>
                <Popover
                  open={Boolean(anchor)}
                  anchorEl={anchor}
                  onClose={() => setAnchor(null)}
                  PaperProps={{
                    style: {
                      marginLeft: "-8rem",
                      borderRadius: "1rem",
                    },
                  }}
                >
                  <div className="popoverContent-w">
                    <div onClick={() => handleInterest(wData)}>
                      Not interested in this
                    </div>
                    <div onClick={() => handleInterest(wData)}>
                      This trend is harful or spammy
                    </div>
                  </div>
                </Popover>
              </div>
            )
        )}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}
