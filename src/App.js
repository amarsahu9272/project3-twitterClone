import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import ProfilePage from "./ProfilePage";
import { useRecoilValue } from "recoil";
import { isProfileClickedAtom } from "./recoil-states";
// import DialogBox from "./DialogBox";

function App() {
  const isProfileData= useRecoilValue(isProfileClickedAtom)
  return (
    <div className="App">
      <>
        {isProfileData ? (
          <>
            <Sidebar />
            <Feed />
            {/* <ProfilePage/> */}
            <Widgets />
            {/* <DialogBox/> */}
          </>
        ) : (
          <>
            <Sidebar />
            {/* <Feed /> */}
            <ProfilePage/>
            <Widgets />
            {/* <DialogBox/> */}
          </>
        )}
      </>
    </div>
  );
}

export default App;
