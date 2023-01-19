import React from 'react'
import './SearchTwitter.css'
import SearchIcon from '@mui/icons-material/Search';


function SearchTwitter() {
  return (
    <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
  )
}

export default SearchTwitter
