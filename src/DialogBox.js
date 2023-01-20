import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import TweetBox from "./TweetBox";
import "./DialogBox.css";

function DialogBox() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>opendialog</Button>
      <Dialog
        className="dialog"
        open={open}
        onClose={() => setOpen(false)}
        aria-aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className="dialogBox">
          {/* <DialogTitle id="dialog-title" className="dialogTitle">
          
          </DialogTitle> */}
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <div className="tweetboxDialog">
                
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            submit
          </Button> */}
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default DialogBox;
