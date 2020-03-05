import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: 400
  },
  input: {
    marginBottom: 15
  },

  doubleInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15
  },
  doubleInputText: {
    width: "82%"
  },
  doubleInputButton: {
    width: 50,
    height: 50,
    color: "#606060"
  },
  referenceChipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 15
  },
  chip: {
    marginRight: 5,
    marginBottom: 5
  }
});

const CreateSongForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    bpm: 0,
    referenceUrl: ""
  });
  const [urlList, setUrlList] = useState([]);

  const handleDelete = chipUrl => () => {
    const newList = urlList.filter(url => url !== chipUrl);
    setUrlList(newList);
  };

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddRefUrl = () => {
    setUrlList([...urlList, formData.referenceUrl]);
    setFormData({ ...formData, referenceUrl: "" });
  };

  return (
    <form className={classes.formContainer} noValidate autoComplete="off">
      <TextField
        className={classes.input}
        id="name"
        name="name"
        label="Name (Required)"
        autoFocus
        variant="outlined"
        value={formData.name}
        onChange={handleFormChange}
      />
      <TextField
        className={classes.input}
        type="number"
        id="bpm"
        name="bpm"
        label="BPM (opt.)"
        variant="outlined"
        value={formData.bpm}
        onChange={handleFormChange}
      />

      <div className={classes.doubleInput}>
        <TextField
          className={classes.doubleInputText}
          type="url"
          id="referenceUrl"
          name="referenceUrl"
          label="Reference URL (opt.)"
          variant="outlined"
          value={formData.referenceUrl}
          onChange={handleFormChange}
        />

        <Button
          onClick={handleAddRefUrl}
          color="primary"
          className={classes.doubleInputButton}
        >
          <AddBoxIcon />
        </Button>
      </div>

      <div className={classes.referenceChipsContainer}>
        {urlList.map((url, index) => (
          <Chip
            className={classes.chip}
            label={url}
            onDelete={handleDelete(url)}
            color="primary"
            key={index}
          />
        ))}
        {/* <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
          variant="outlined"
        /> */}
      </div>

      <Button color="primary" variant="contained">
        Create
      </Button>
    </form>
  );
};

export default CreateSongForm;
