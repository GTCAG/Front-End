import React, { useState, useEffect } from "react";
import { axiosAuth } from "../axiosWithAuth";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  videoContainer: {
    flexGrow: 1,
    height: 600,
    width: "100%",
    maxWidth: 1800,
    marginTop: 15,
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      height: 450
    }
  }
}));

const Container = styled.div``;

const LiveStreamDisplay = () => {
  const [live, setLive] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    axiosAuth()
      .get("/livestream")
      .then(res => {
        console.log("Livestream res, ", res);
        setLive(res.data.live);
      })
      .catch(err => {
        console.log("Livestream err", err.response);
      });
  }, []);

  return (
    <Container>
      {live ? (
        <div className="text-block dark">
          <div className="text-content-wrapper max-size">
            <h2>We're live right now!</h2>
            <iframe
              className={classes.videoContainer}
              width="560"
              height="650"
              src="https://www.youtube.com/embed/live_stream?channel=UCNaKPci4jHkzFyo2hYwlVRQ"
              frameborder="0"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default LiveStreamDisplay;
