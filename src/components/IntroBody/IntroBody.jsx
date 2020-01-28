import React, { useState, useEffect } from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import "./IntroBody.scss";
import { makeStyles } from "@material-ui/core/styles";
import { axiosAuth } from "../../axiosWithAuth";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: "70px"
  },
  videoContainer: {
    flexGrow: 1,
    height: 650,
    width: "100%",
    maxWidth: 1800,
    marginTop: 15,
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      height: 450
    }
  }
}));

const IntroBody = () => {
  const [live, setLive] = useState(false);

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

  const classes = useStyles();
  return (
    <div className="body-container">
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

      <div className="text-block light">
        <h2>Can't Attend?</h2>
        <div className="text-block-flex max-size">
          <div className="block">
            <YouTubeIcon className={classes.icon} />
            <h3>We do livestreaming</h3>
            <p>
              We livestream our services through YouTube so you and many others
              can view at your own comfort. The stream will also be hosted on
              this website for you to view when it's live.
            </p>
          </div>
          <div className="block">
            <VideoLibraryRoundedIcon className={classes.icon} />
            <h3>Missed us?</h3>
            <p>
              If by any chance you missed the timing of our services, we archive
              our videos on YouTube so you can view previously recorded
              services.
            </p>
          </div>
          <div className="block">
            <EventNoteRoundedIcon className={classes.icon} />
            <h3>Check our schedule</h3>
            <p>
              Look at our other service times. We have both morning and evening
              services on Sunday and Thursday. We also have youth services on
              Tuesdays
            </p>
          </div>
        </div>
        <p></p>
      </div>

      <div className="para-image img1" />
      <div className="text-block light">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
            dolor, congue quis aliquam at, scelerisque ac purus. Morbi a
            pellentesque augue. Praesent sit amet mattis ante. Nunc quis enim
            velit. Ut in arcu a massa egestas dignissim. Mauris maximus suscipit
            massa. Morbi fermentum nibh non ex malesuada, feugiat rhoncus lorem
            finibus. Nunc fringilla interdum purus, vitae posuere leo lobortis
            nec. Duis justo diam, eleifend vel lorem eget, semper porttitor
            augue. Integer mi nunc, mattis auctor ex et, imperdiet posuere ante.
            Aliquam erat volutpat. Fusce sed libero id est sagittis pretium.
            Etiam eros orci, tempor sagittis placerat ullamcorper, pretium eu
            ligula. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Ut vestibulum nulla sed condimentum maximus. Aenean
            dignissim vel est eget tempor. Donec sodales libero nec lacus
            mattis, ac tempus mi tincidunt. Sed luctus ut est vitae pharetra. Ut
            at tempor ligula. Nullam pharetra quam ut nunc tempus bibendum.
          </p>
        </div>
      </div>

      <div className="para-image img2" />

      <div className="text-block dark">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
            dolor, congue quis aliquam at, scelerisque ac purus. Morbi a
            pellentesque augue. Praesent sit amet mattis ante. Nunc quis enim
            velit. Ut in arcu a massa egestas dignissim. Mauris maximus suscipit
            massa. Morbi fermentum nibh non ex malesuada, feugiat rhoncus lorem
            finibus. Nunc fringilla interdum purus, vitae posuere leo lobortis
            nec. Duis justo diam, eleifend vel lorem eget, semper porttitor
            augue. Integer mi nunc, mattis auctor ex et, imperdiet posuere ante.
            Aliquam erat volutpat. Fusce sed libero id est sagittis pretium.
            Etiam eros orci, tempor sagittis placerat ullamcorper, pretium eu
            ligula. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Ut vestibulum nulla sed condimentum maximus. Aenean
            dignissim vel est eget tempor. Donec sodales libero nec lacus
            mattis, ac tempus mi tincidunt. Sed luctus ut est vitae pharetra. Ut
            at tempor ligula. Nullam pharetra quam ut nunc tempus bibendum.
          </p>
        </div>
      </div>
      <div className="para-image img3" />
      <div className="text-block light">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
            dolor, congue quis aliquam at, scelerisque ac purus. Morbi a
            pellentesque augue. Praesent sit amet mattis ante. Nunc quis enim
            velit. Ut in arcu a massa egestas dignissim. Mauris maximus suscipit
            massa. Morbi fermentum nibh non ex malesuada, feugiat rhoncus lorem
            finibus. Nunc fringilla interdum purus, vitae posuere leo lobortis
            nec. Duis justo diam, eleifend vel lorem eget, semper porttitor
            augue. Integer mi nunc, mattis auctor ex et, imperdiet posuere ante.
            Aliquam erat volutpat. Fusce sed libero id est sagittis pretium.
            Etiam eros orci, tempor sagittis placerat ullamcorper, pretium eu
            ligula. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Ut vestibulum nulla sed condimentum maximus. Aenean
            dignissim vel est eget tempor. Donec sodales libero nec lacus
            mattis, ac tempus mi tincidunt. Sed luctus ut est vitae pharetra. Ut
            at tempor ligula. Nullam pharetra quam ut nunc tempus bibendum.
          </p>
        </div>
      </div>
      <div className="para-image img4" />
      <div className="text-block dark">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
            dolor, congue quis aliquam at, scelerisque ac purus. Morbi a
            pellentesque augue. Praesent sit amet mattis ante. Nunc quis enim
            velit. Ut in arcu a massa egestas dignissim. Mauris maximus suscipit
            massa. Morbi fermentum nibh non ex malesuada, feugiat rhoncus lorem
            finibus. Nunc fringilla interdum purus, vitae posuere leo lobortis
            nec. Duis justo diam, eleifend vel lorem eget, semper porttitor
            augue. Integer mi nunc, mattis auctor ex et, imperdiet posuere ante.
            Aliquam erat volutpat. Fusce sed libero id est sagittis pretium.
            Etiam eros orci, tempor sagittis placerat ullamcorper, pretium eu
            ligula. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Ut vestibulum nulla sed condimentum maximus. Aenean
            dignissim vel est eget tempor. Donec sodales libero nec lacus
            mattis, ac tempus mi tincidunt. Sed luctus ut est vitae pharetra. Ut
            at tempor ligula. Nullam pharetra quam ut nunc tempus bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroBody;
