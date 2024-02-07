import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, TextField, DialogContent } from '@mui/material'
import { addCardDetails } from "../../controller/card_payment_controller";

function AddDetailsPopUp({ isAddDialogOpen, setIsAddDialogOpen }) {
  const [details, setDetails] = useState({ cardTitle: "", cardAmount: 0, cardDueDate: new Date().toISOString() });

  const handleAddSave = async () => {
    const validDetails = () => {

    }

    if (validDetails()) {

    } else {

    }
  }

  const handleAddDialogClose = () => {
    setIsAddDialogOpen(false);
  }

  return (
    <Dialog open={isAddDialogOpen} onClose={handleAddDialogClose}>
      <DialogTitle>Add Details</DialogTitle>
      <DialogContent sx={{ width: "40vw", maxWidth: "350px", minWidth: "200px", padding: "2vw" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={details.cardTitle}
          onChange={(e) => { setDetails({ ...details, cardTitle: e.target.value }) }}
        />
        <TextField
          label="Amount"
          type="number"
          variant="outlined"
          fullWidth
          value={details.cardAmount}
          onChange={(e) => { setDetails({ ...details, cardAmount: e.target.value }) }}
        />
        <TextField
          label="Due Date"
          type="date"
          variant="outlined"
          fullWidth
          value={details.cardDueDate}
          onChange={(e) => { setDetails({ ...details, cardDueDate: e.target.value }) }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddDetailsPopUp