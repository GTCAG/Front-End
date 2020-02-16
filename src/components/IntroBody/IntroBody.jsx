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
          <h2>Our Story</h2>
          <p>
            It's no secret this Isn't a regular American church. The majority of
            the members come from a slavic background that ranges mainly around
            a Ukranian or Russian descent. The church originally did not own a
            building and had to rent space from another church. After saving up
            money and through hard work we bought our own building that is
            current today. Before we acquired the building, it operated as a
            strip club and was host to many regrets. The building was once a
            place of sin and now it has been transformed into a place of peace,
            praise, and worship to the Lord.
          </p>
        </div>
      </div>

      <div className="para-image img2" />

      <div className="text-block dark">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            We are a local slavic church here to serve the community. We are
            open Sundays in the morning and evening, Tuesday evenings, and
            Thursday evenings. We provide sermons, worship sessions, and a choir
            during our weekly normal services and have english translators
            readily available. If you have kids, we offer Sunday School classes
            for their own fun and education. Teens and young adults are welcomed
            at Youth services every Tuesday evening for worship, prayer, and
            fellowship.
          </p>
        </div>
      </div>
      <div className="para-image img3" />
      <div className="text-block light">
        <div className="text-content-wrapper max-size">
          <h2>A word from the pastor</h2>
          <p>
            The Church is the body of Christ, the habitation of God through the Spirit, with divine appointments for the fulfillment of his great commission. God desires for us to be a united and strong church, the foundation of which is the Word of God. Only a strong church can reach the thousands of hearts for Christ. I appreciate and cherish the fact that, in spite of various difficulties and challenges, we remain faithful to the Lord always and everywhere. We have not gone off that road which God has placed us on.

  I am happy for each family. And my prayer to God always is that we all reach heaven, where we will be forever with Jesus. May Grace Trinity Church be your spiritual home, your family, where you feel comfortable and safe, growing in the grace of God.


          </p>
          <div className="signature">
            <span className="dash">-</span>	Senior Pastor Alexander Kalinyuk
            </div>
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
