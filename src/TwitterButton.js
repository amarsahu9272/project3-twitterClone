import React from "react";
import "./TwitterButton.css";
import { Button } from "@mui/material";

function TwitterButton({ onClickAction, btnText, type, variant, btnStyle }) {
  return (
    <div>
      {/* Button -> Tweet */}
      <Button
        onClick={onClickAction}
        variant={variant}
        className={`${btnStyle}`}
      >
        {btnText}
      </Button>
    </div>
  );
}

export default TwitterButton;
