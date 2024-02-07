import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, TextField, DialogContent, Typography } from '@mui/material'

function EditPopUp({ data, isEditDialogOpen, handleEditDialogClose }) {
  const [amount, setAmount] = useState(null);
  const [isPayPartial, setIsPayPartial] = useState(null);

  const payOnClickHandler = async () => {

  }

  return (
    <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
      <DialogTitle>Edit Details</DialogTitle>
      <DialogContent sx={{ width: "40vw", maxWidth: "350px", minWidth: "200px", padding: "2vw" }}>
        <Typography>
          {data.cardTitle}
        </Typography>
        <Typography>
          Due Date: {data.cardDueDate}
        </Typography>
        <Typography>
          Created Date: {data.cardCreatedTitle}
        </Typography>
        <Typography>
          Amount Left: {data.cardAmount}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => payOnClickHandler(data.cardAmount)}>
          Pay full
        </Button>
        <Button onClick={() => payOnClickHandler()}>
          Pay partial
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditPopUp