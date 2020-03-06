import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { axiosAuth } from "../../../../axiosWithAuth";
import EventBubble from "./EventBubble";
import { Button } from "@material-ui/core";
import MemberList from "./MemberList";
import CreateEventDialog from "./CreateEventDialog";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import BackdropWait from "../../../FeedbackComponents/BackdropWait";

const initialGroupState = {
  admins: [],
  events: [],
  _id: 0,
  name: "",
  members: []
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10
    },
    maxWidth: 1200
  },
  eventList: {
    width: "75%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  infoContainer: {
    display: "flex",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  toolbar: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 25,
    borderBottom: "1px solid #ddd",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  groupName: {
    margin: 0,
    padding: 0
  },
  joinCode: {
    margin: 0,
    color: "#777",
    fontFamily: "Roboto"
  },
  createEventButton: {
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}));

function getGroupData(groupId, setGroup, setWait) {
  setWait(true);
  axiosAuth()
    .get(`/groups/${groupId}`)
    .then(res => {
      setGroup(res.data);
      setWait(false);
    })
    .catch(err => {
      console.log("err: ", err.response);
    });
}

const GroupDashboard = () => {
  //Hooks
  const params = useParams();
  const [group, setGroup] = useState(initialGroupState);
  const [apiWait, setApiWait] = useState(false);
  const [evtDialogOpen, setEvtDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupId = params.groupId;
  const [snack, setSnack] = useState({ message: "", open: false });

  const classes = useStyles();

  //Fetch group from id
  useEffect(() => {
    getGroupData(groupId, setGroup, setApiWait);
  }, [groupId]);

  const handleCreateEvent = () => {
    setEvtDialogOpen(true);
  };

  const handleCompleteCreate = msg => {
    setSnack({ open: true, message: msg });
    setEvtDialogOpen(false);

    getGroupData(groupId, setGroup, setApiWait);
  };

  return (
    <div className={classes.root}>
      <BackdropWait open={apiWait} />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={snack.open}
        autoHideDuration={6000}
        onClose={() => setSnack({ ...snack, open: false })}
        message={snack.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setSnack({ ...snack, open: false })}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <div className={classes.toolbar}>
        <div className={classes.titleContainer}>
          <h1 className={classes.groupName}>{group.name}</h1>
          <p className={classes.joinCode}>Join Code: {group.code}</p>
        </div>

        <Button
          color="primary"
          className={classes.createEventButton}
          variant="contained"
          onClick={handleCreateEvent}
        >
          Create New Event
        </Button>
      </div>

      <div className={classes.infoContainer}>
        <div className={classes.eventList}>
          <h3>Events</h3>
          {group.events.map((event, key) => (
            <EventBubble event={event} key={key} />
          ))}
        </div>

        <MemberList members={group.members} />
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CreateEventDialog
          groupId={group._id}
          open={evtDialogOpen}
          handleClose={() => setEvtDialogOpen(false)}
          setLoading={setLoading}
          loading={loading}
          cbComplete={handleCompleteCreate}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default GroupDashboard;
