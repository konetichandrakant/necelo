import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Dialog, DialogTitle, Button, DialogActions, TextField, Stack, DialogContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MyCard = ({ cardId, title, amount, dueDate, createdDate, color, editOrDelete }) => {
  let cardColor = "white";

  // Set color based on the 'color' prop
  switch (color) {
    case "green":
      cardColor = "#4CAF50"; // green color
      break;
    case "red":
      cardColor = "#FF5252"; // red color
      break;
    default:
      cardColor = "white"; // default color
  }

  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editedDetails, setEditedDetails] = useState({ title: "", amount: "", date: "" });

  const handleEditButtonClick = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSave = () => {
    // Perform save logic here, for example, call an API to update the data
    // Once saved, close the dialog
    console.log(editedDetails);
    editedDetails = { title: "", amount: "", date: "" };
    setEditDialogOpen(false);
  };

  const handleDeleteButtonClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Perform delete logic here, for example, call an API to delete the data
    // Once deleted, close the dialog
    editOrDelete("delete", cardId);
    setDeleteDialogOpen(false);
  };

  return (
    <Card sx={{ backgroundColor: cardColor, cursor: "pointer" }} onClick={() => { console.log("on click") }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
          {title}
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
          Amount: {amount}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
          Date: {dueDate}
        </Typography>
        <div style={{ marginTop: "10px" }}>
          <IconButton color="primary" aria-label="edit" onClick={handleEditButtonClick}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="delete" onClick={handleDeleteButtonClick}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>

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
    </Card>
  );
};

export default MyCard;