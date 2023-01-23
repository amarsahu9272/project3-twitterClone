import { Avatar } from "@mui/material";
import React, { useState } from "react";
import TwitterButton from "./TwitterButton";
import "./WhoToFollw.css";
import profileImge from "./Amr.jpg";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { followButtonAtom } from "./recoil-states";
const follow = [
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "Indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn1",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn2",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn3",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn4",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn5",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn6",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
];
function WhoToFollw() {
  // const setFollowButtonData = useSetRecoilState(followButtonAtom);
  // const followButtonAtomData = useRecoilValue(followButtonAtom);
  let [followsData, setFollowsData] = useState(follow);
  function handleFollowButton(fData) {
    // setFollowButtonData(!followButtonAtomData);

    const indexOfClickedFollow = followsData.findIndex(
      (index) => index.followUserName === fData.followUserName
    );
    // console.log(fData.followUserName);
    followsData[indexOfClickedFollow].isFollow =
      !followsData[indexOfClickedFollow].isFollow;
    setFollowsData([...followsData]);
    console.log(followsData)
  }
  return (
    <div className="whoToFollwContainer">
      <h2>Who to follow</h2>
      {/* <TwitterEmbedded/> */}
      <div className="follow-p">
        {followsData.map((fData, i) => (
          <div  className="following">
            <Avatar src={profileImge} />
            <div className="follows">
              <h3>{fData.followName}</h3>
              <p>{fData.followUserName}</p>
              <span>{fData.folloDesignation}</span>
            </div>

            <TwitterButton
              keys={i}
              onClickAction={() => handleFollowButton(fData)}
              btnText={!fData.isFollow ? "Follow" : "Following"}
              variant="outlined"
              btnStyle={!fData.isFollow ? "followButton" : "followingButton"}
            />

            {/* <button onClick={() => handleFollowButton(fData)}>
              {!fData.isFollow ? "follow" : "Following"}
            </button> */}

          </div>
        ))}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}

export default WhoToFollw;
