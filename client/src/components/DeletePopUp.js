import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

function DeletePopUp({ isDeleteDialogOpen, handleDeleteConfirm, handleDeleteDialogClose }) {
  return (
    <Dialog open={isDeleteDialogOpen} onClose={handleDeleteDialogClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogActions>
        <Button onClick={handleDeleteDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteConfirm} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeletePopUp