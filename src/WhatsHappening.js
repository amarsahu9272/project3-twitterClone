import { Popover } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isInterestAtom } from "./recoil-states";
import "./WhatsHappening.css";
// import TwitterEmbedd from './TwitterEmbedded'

const whatHappData = [
  {
    id:1,
    trends: "Entertainment · Trending",
    trending: "Amitabh Bachchan",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    id:2,
    trends: "Sports · Trending",
    trending: "AINassr",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    id:3,
    trends: "Trending in India",
    trending: "BCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
  {
    id:4,
    trends: "Entertainment · Trending",
    trending: "Bachchan pandey",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    id:5,
    trends: "Sports · Trending",
    trending: "Dhoni",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    id:6,
    trends: "Trending in India",
    trending: "ACCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
  {
    id:7,
    trends: "Entertainment · Trending",
    trending: "Akshay kumar",
    noTweet: "123K",
    isNotInterested: false,
  },
  {
    id:8,
    trends: "Sports · Trending",
    trending: "Virat Kholi",
    noTweet: "30.1K",
    isNotInterested: false,
  },
  {
    id:9,
    trends: "Trending in India",
    trending: "BCCDocumentary",
    noTweet: "135K",
    isNotInterested: false,
  },
];
export default function WhatsHappening() {
  let [whatHappeningData, setWhatHappeningData] = useState(whatHappData);
  const [anchor, setAnchor] = useState(null);
  const setUserIntersted = useSetRecoilState(isInterestAtom);
  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleInterest = (wData) => {
    // var updatedData= [...whatHappeningData]
    // console.log( udatedData[i].isNotInterested)
    // updatedData[i].isNotInterested=true
    // setWhatHappeningData(updatedData)
    console.log(wData.id)
    const indexOfClickedHappen = whatHappeningData.findIndex(
      (index) => index.id === wData.id
    );
    console.log(indexOfClickedHappen)
    whatHappeningData[indexOfClickedHappen].isNotInterested = true
      // !whatHappeningData[indexOfClickedHappen].isNotInterested;
    setWhatHappeningData([...whatHappeningData]);
    setUserIntersted(false);
    setAnchor(null)
  };
  return (
    <div className="whatsHappeningContainer">
      <h2>What's happening</h2>
      {/* <TwitterEmbedded/> */}
      <div className="trends-p">
        {whatHappeningData.map(
          (wData) =>
            !wData.isNotInterested && (
              <div key={whatHappeningData.id} className="trending">
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
