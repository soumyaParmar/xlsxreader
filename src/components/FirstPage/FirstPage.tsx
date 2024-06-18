import React from 'react'
import DialogBox from '../DialogBox/DialogBox';
import { Button } from '@mui/material';
import HorizontalLinearStepper from '../multiStepperForm/HorizontalLinearStepper';

function FirstPage() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

  return (
    <div>
        <Button onClick={handleClickOpen}>Open</Button>
        <DialogBox
            open={open}
            handleClose={handleClose}
            element={<HorizontalLinearStepper/>}
        />
    </div>
  )
}

export default FirstPage