import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import "./DialogBox.css";
import WhatsHappeningTweets from "./WhatsHappeningTweets";
import TweetFooter from "./TweetFooter";

function DialogBox({ values }) {
  const [open, setOpen] = useState({ values });
  return (
    <>
      <Button onClick={() => setOpen(true)}>opendialog</Button>
      <Dialog
        className="dialog"
        open={open}
        onClose={() => setOpen(false)}
        // aria-aria-labelledby="dialog-title"
        // aria-describedby="dialog-description"
        PaperProps={{
          style: {
            width: "80%",
            height: "auto",
          },
        }}
        // maxWidth="lg"

      >
      
        <div className="dialogBox">
          {/* <DialogTitle id="dialog-title" className="dialogTitle">
          
          </DialogTitle> */}
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              {/* <TweetBox/> */}
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
