import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core";
import validateUrl from "../../../util/validateUrl";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfoSnack from "../../FeedbackComponents/InfoSnack";
import { axiosAuth } from "../../../axiosWithAuth";

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400
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
  },
  popover: {
    padding: 20
  },
  progressContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    height: 265
  }
});

const initialFormData = {
  name: "",
  bpm: 0,
  referenceUrl: ""
};

const CreateSongForm = ({ onSuccess }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialFormData);
  const [snack, setSnack] = useState({ open: false, message: "Test" });
  const [urlPopover, setUrlPopover] = useState(false);
  const [urlList, setUrlList] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleDelete = chipUrl => () => {
    const newList = urlList.filter(url => url !== chipUrl);
    setUrlList(newList);
  };

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddRefUrl = () => {
    if (validateUrl(formData.referenceUrl)) {
      setUrlPopover(false);
      setUrlList([...urlList, formData.referenceUrl]);
      setFormData({ ...formData, referenceUrl: "" });
    } else {
      setUrlPopover(true);
    }
  };

  const handleCreate = () => {
    if (formData.name.length <= 0) {
      alert("Name of the song is required");
      return;
    }

    setLoading(true);
    const body = {
      title: formData.name,
      bpm: formData.bpm,
      referenceUrls: urlList
    };
    axiosAuth()
      .post("/songs/", body)
      .then(res => {
        console.log("Success response: ", res);
        setLoading(false);
        setFormData(initialFormData);
        setSnack({ open: true, message: "Successfully created song!" });
        onSuccess();
      })
      .catch(err => {
        setLoading(false);
        setSnack({ open: true, message: err.response.data.error });
      });
  };

  if (loading)
    return (
      <div className={classes.progressContainer}>
        <CircularProgress />
      </div>
    );

  return (
    <form className={classes.formContainer} noValidate autoComplete="off">
      <InfoSnack
        open={snack.open}
        message={snack.message}
        onClose={() => setSnack({ ...snack, open: false })}
      />
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
            icon={<AttachFileIcon />}
            onDelete={handleDelete(url)}
            color="primary"
            key={index}
            variant="outlined"
          />
        ))}
      </div>
      <Button onClick={handleCreate} color="primary" variant="contained">
        Create
      </Button>

      <Popover
        className={classes.popover}
        open={urlPopover}
        anchorEl={() => document.querySelector("#referenceUrl")}
        onClose={() => setUrlPopover(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.popover}>Not a valid URL</Typography>
      </Popover>
    </form>
  );
};

export default CreateSongForm;
