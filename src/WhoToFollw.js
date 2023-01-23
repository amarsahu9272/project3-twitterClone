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
    isFollow: true,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
  {
    followName: "President of India",
    followUserName: "@rashtrapatibhvn",
    folloDesignation: "indian govenment official",
    isFollow: false,
  },
];
function WhoToFollw() {
  // const setFollowButtonData = useSetRecoilState(followButtonAtom);
  // const followButtonAtomData = useRecoilValue(followButtonAtom);
  const [isFollows, setIsFollows] = useState(follow);
  const handleFollowButton = () => {
    // setFollowButtonData(!followButtonAtomData);
    setIsFollows(...isFollows, !isFollows.isFollow);
  };
  return (
    <div className="whoToFollwContainer">
      <h2>Who to follow</h2>
      {/* <TwitterEmbedded/> */}
      <div className="follow-p">
        {follow.map((fData, i) => (
          <div key={i} className="following">
            <Avatar src={profileImge} />
            <div className="follows">
              <h3>{fData.followName}</h3>
              <p>{fData.followUserName}</p>
              <span>{fData.folloDesignation}</span>
            </div>

            {/* <TwitterButton
              onClickAction={handleFollowButton}
              btnText={isFollows.isFollow ? "Follow" : "Following"}
              variant="outlined"
              btnStyle={isFollows.isFollow ? "followButton" : "followingButton"}
            /> */}

            {fData.isFollow ? (
              <TwitterButton
                onClickAction={handleFollowButton}
                btnText={isFollows.isFollow ? "Follow" : "Following"}
                variant="outlined"
                btnStyle={
                  isFollows.isFollow ? "followButton" : "followingButton"
                }
              />
            ) : (
              <TwitterButton
                onClickAction={handleFollowButton}
                btnText={isFollows.isFollow ? "Following" : "Follow"}
                variant="outlined"
                btnStyle={
                  isFollows.isFollow ? "followingButton" : "followButton"
                }
              />
            )}
          </div>
        ))}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}

export default WhoToFollw;
