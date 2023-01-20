import React from 'react'
import TweetFooterIcons from './TweetFooterIcons'
import TwitterButton from './TwitterButton'
import './TweetFooter.css'
function TweetFooter({handleClick}) {
  return (
    <>
        <div className='tweetFooter'>
      <TweetFooterIcons/>
      <TwitterButton
          onClickAction={handleClick}
          btnText="Tweet"
          variant="outlined"
          btnStyle="tweetBoxButton"
        />
    </div>
   
    </>
  )
}

export default TweetFooter
