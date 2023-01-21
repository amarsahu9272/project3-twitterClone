import {
  // Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./DialogBox.css";
import WhatsHappeningTweets from "./WhatsHappeningTweets";
import TweetFooter from "./TweetFooter";

function DialogBox({ values }) {
  const [open, setOpen] = useState({ values });
  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>opendialog</Button> */}
      <Dialog
        className="dialog"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            width: "40%",
            height: "45%",
            marginTop: "-18rem",
            marginLeft: "2rem",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="dialogBox">
          <DialogTitle id="dialog-title" className="dialogTitle">
            <CloseIcon className="closeIcon" style={{padding:".5rem"}}/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <WhatsHappeningTweets />
              <TweetFooter />
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
