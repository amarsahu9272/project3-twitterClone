import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfileButton from "./ProfileButton";
import TwitterIconn from "./TwitterIconn";
import DialogBox from "./DialogBox";

const icons = [
  { active: "active", Icons: HomeIcon, text: "Home" },
  { Icons: SearchIcon, text: "Explore" },
  { Icons: NotificationsNoneIcon, text: "Notifications" },
  { Icons: MailOutlineIcon, text: "Messages" },
  { Icons: BookmarkBorderIcon, text: "Bookmarks" },
  { Icons: ListAltIcon, text: "Lists" },
  { Icons: PermIdentityIcon, text: "Profile" },
  { Icons: MoreHorizIcon, text: "More" },
];
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIconn />
      {icons.map((icon, i) => (
        <SidebarOption
          keys={i}
          active={icon.active}
          Icon={icon.Icons}
          text={icon.text}
        />
      ))}
      <DialogBox />
      <ProfileButton />
      {/* <DialogBox values={tweetsClick} /> */}
    </div>
  );
}

export default Sidebar;
