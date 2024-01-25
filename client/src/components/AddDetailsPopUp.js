import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle, TextField, DialogContent } from '@mui/material'

function AddDetailsPopUp({ isEditDialogOpen, details, setDetails, handleEditDialogClose, handleEditSave }) {
  return (
    <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
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
        <Button onClick={handleEditDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEditSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddDetailsPopUp