import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ProfilePage.css";
import ProfileSection1 from "./ProfileSection1";
import { useSetRecoilState } from "recoil";
import { isProfileClickedAtom } from "./recoil-states";
function ProfilePage() {
 const setProfileRecoil= useSetRecoilState(isProfileClickedAtom)

  const handleArrowClick=()=>{
    setProfileRecoil(true)
  }
  return (
    <div className="profilePage">
      <div className="profileHeader">
        <div>
          <h2>
            <span>
              <ArrowBackIcon className="arrowIcon" onClick={handleArrowClick}/>
            </span>
            <span>Amar Sahu</span>
          </h2>
          <p>Tweets</p>
        </div>
        <ProfileSection1/>
        <div className="block1">
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
