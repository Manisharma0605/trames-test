import React from 'react';
import {useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function AlertDialog({
  onAgree,
  onDisagree,
  openDialog,
}) {
  const dialogBody = useSelector(
    state => state.bodyText && state.bodyText.body,
  );

  const handleClose = status => {
    if (status) {
      onAgree();
    } else {
      onDisagree();
    }
  };

  return (
    <div>
      {/* <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button> */}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>{dialogBody}</p>
            </DialogContentText>
          </DialogContent>
        
        <DialogActions>
          {onAgree ? (
            <Button
              className="primaryBtn"
              color="secondary"
              onClick={() => handleClose(true)}
              name="approve"
            >
              Save
            </Button>
          ) : (
            ''
          )}
          {onDisagree ? (
            <Button
              onClick={() => handleClose(false)}
              color="primary"
            >
              Edit
            </Button>
          ) : (
            ''
          )}
          {/* <Button
            onClick={() => handleClose(true)}
            color="primary"
            autoFocus
          >
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}



// Sticky footer 
// Modal 2 buttons : minimise & maximize 
//  minimise click : 
    //  id  use karke, footer : insert 1 one p where text of p  will be id + status(open/closed)

    // if p  with same id is already present then update text of p.

    // redux modal : [{id : 1, status : opened/closed}]