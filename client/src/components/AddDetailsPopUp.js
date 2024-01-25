import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle, TextField, DialogContent } from '@mui/material'

function AddDetailsPopUp({ isEditDialogOpen, editedDetails, setEditedDetails, handleEditDialogClose }) {
  return (
    <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
      <DialogTitle>Edit Details</DialogTitle>
      <DialogContent sx={{ width: "40vw", maxWidth: "350px", minWidth: "200px", padding: "2vw" }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={editedDetails.title}
          onChange={(e) => { setEditedDetails({ ...editedDetails, title: e.target.value }) }}
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={editedDetails.amount}
          onChange={(e) => { setEditedDetails({ ...editedDetails, amount: e.target.value }) }}
        />
        <TextField
          label="Due Date"
          type="date"
          variant="outlined"
          fullWidth
          value={editedDetails.dueDate}
          onChange={(e) => { setEditedDetails({ ...editedDetails, dueDate: e.target.value }) }}
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