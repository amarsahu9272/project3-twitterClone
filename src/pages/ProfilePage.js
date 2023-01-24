import React from 'react'
import "./profilePage.css"
import {profileDataAtom} from "../recoil-states"
import {useRecoilState} from "recoil";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {Link} from "react-router-dom"
function ProfilePage() {
    const [profileData,setProfileData]=useRecoilState(profileDataAtom)
  return (
    <div>
        <header>
       <div>
        <Link to="/">
          <KeyboardBackspaceIcon /></Link>
          <div>
            <h1>{profileData.name}</h1>
          </div>
       </div>
        </header>
        <main>

        </main>
    </div>
  )
}

export default ProfilePage