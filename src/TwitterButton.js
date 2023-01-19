import React from 'react'
import './TwitterButton.css'
import { Button } from "@mui/material";


function TwitterButton({onClickAction,type,variant,btnStyle}) {
  return (
    <div>
      {/* Button -> Tweet */}
      <Button onClick={onClickAction} variant={variant} className={`${btnStyle}`} >
        Tweet
      </Button>
    </div>
  )
}

export default TwitterButton
