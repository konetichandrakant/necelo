import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle, TextField, DialogContent, Typography } from '@mui/material'

function EditPopUp({ isEditDialogOpen, editedDetails, setEditedDetails, handleEditDialogClose }) {
  return (
    <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
      <DialogTitle>Edit Details</DialogTitle>
      <DialogContent sx={{ width: "40vw", maxWidth: "350px", minWidth: "200px", padding: "2vw" }}>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </DialogContent>
      <DialogActions>
        <Button>
          Fully paid
        </Button>
        <Button>
          
        </Button>
      </DialogActions>
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

export default EditPopUp