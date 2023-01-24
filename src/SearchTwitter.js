import React from 'react'
import './SearchTwitter.css'
import SearchIcon from '@mui/icons-material/Search';


function SearchTwitter() {
  return (
    <div className="searchTwitter">
        <SearchIcon className="searchTwitterSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
  )
}

export default SearchTwitter
