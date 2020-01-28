import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { axiosAuth } from "../../../../axiosWithAuth";

const CreateEventDialog = ({ open, handleClose, groupId }) => {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleCreate = () => {
    axiosAuth()
      .post("/events", {
        name,
        eventDate: selectedDate.toISOString(),
        groupId
      })
      .then(res => {
        console.log("Create event response: ", res);
      })
      .catch(err => {
        console.log("Create Event err: ", err.response);
      });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>
      <DialogContent>
        <KeyboardDateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          label="Date & Time"
          format="yyyy/MM/dd hh:mm a"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Event Name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCreate} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEventDialog;
