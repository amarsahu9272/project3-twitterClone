import React, { useState } from "react";
import { Avatar, Popover } from "@mui/material";
import "./ProfileButton.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profileImge from "./Amr.jpg";
import { useSetRecoilState } from "recoil";
import { isUserLoggedInAtom } from "./recoil-states";
import { useNavigate } from "react-router";

function ProfileButton() {
  // const [open, setOpen] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const nevigate = useNavigate();
  const setUserLoggedInStatus = useSetRecoilState(isUserLoggedInAtom);

  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleLogout = () => {
    setUserLoggedInStatus(false);
    setAnchor(null);
    nevigate("/");
  };
  const handleExistingUser = () => {
    setAnchor(null);
  };
  return (
    <div className="profile-pop">
      <div className="profile" onClick={popoverProfileButton}>
        <div className="profile-btn">
          <div className="avatar-p">
            <Avatar src={profileImge} />
          </div>
          <div className="profile-tag">
            <h3>
              Amar Sahu
              <p className="post__headerSpecial"> @amar123</p>
            </h3>
            <span>
              <MoreHorizIcon />
            </span>
          </div>
        </div>
      </div>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
        PaperProps={{
          style: {
            marginTop: "-4em",
            marginLeft: "-3rem",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="popoverContent">
          <div onClick={handleExistingUser}>Add an existing account</div>
          <div onClick={handleLogout}>Log out</div>
        </div>
      </Popover>
    </div>
  );
}

export default ProfileButton;
