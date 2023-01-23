import React from "react";
import "./SidebarOption.css";

function SidebarOption({keys, active, text, Icon }) {
  return (
    <div key={keys} className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
