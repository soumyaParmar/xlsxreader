import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogBox(props) {
 
  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          component: 'form',
        }}
        
      >
        <DialogTitle>Create new Data Source Entity</DialogTitle>
        <DialogContent style={{height:'500px', width:'500px'}}>
          {props.element}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}