import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import "./IntroBody.scss";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: "70px",
  },
  videoContainer: {
    flexGrow: 1,
    height: 650,
    width: "100%",
    maxWidth: 1800,
    marginTop: 15,
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      height: 450,
    },
  },
}));

const IntroBody = () => {
  const classes = useStyles();
  return (
    <div className="body-container">
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
            The majority of our members come from a slavic background that
            ranges mainly around a Ukranian or Russian descent. The church
            originally did not own a building and had to rent space from another
            church. After saving up money and through hard work we bought our
            own building that we are still using today. Before we acquired the
            building, it operated as a a sinful adult establishment. The
            building was once a place of sin and now it has been transformed
            into a place of peace, praise, and worship to the Lord.
          </p>
        </div>
      </div>

      <div className="para-image img2" />

      <div className="text-block dark">
        <div className="text-content-wrapper max-size">
          <h2>Who We Are</h2>
          <p>
            We are a local church here to serve the community. We are open
            Sundays in the morning and evening, Tuesday evenings, and Thursday
            evenings. We provide sermons, worship sessions, and a choir during
            our weekly normal services and have english translators readily
            available. If you have kids, we offer Sunday School classes for
            their own fun and education. Teens and young adults are welcomed at
            Youth services every Tuesday evening for worship, prayer, and
            fellowship.
          </p>
        </div>
      </div>
      <div className="para-image img3" />
      <div className="text-block light">
        <div className="text-content-wrapper max-size">
          <h2>A word from the pastor</h2>
          <p>
            The Church is the body of Christ, the habitation of God through the
            Spirit, with divine appointments for the fulfillment of his great
            commission. God desires for us to be a united and strong church, the
            foundation of which is the Word of God. Only a strong church can
            reach the thousands of hearts for Christ. I appreciate and cherish
            the fact that, in spite of various difficulties and challenges, we
            remain faithful to the Lord always and everywhere. We have not gone
            off that road which God has placed us on. I am happy for each
            family. And my prayer to God always is that we all reach heaven,
            where we will be forever with Jesus. May Grace Trinity Church be
            your spiritual home, your family, where you feel comfortable and
            safe, growing in the grace of God.
          </p>
          <div className="signature">
            <span className="dash">-</span> Senior Pastor Alexander Kalinyuk
          </div>
        </div>
      </div>
      <div className="para-image img4" />
      <div className="text-block dark">
        <div className="text-content-wrapper max-size">
          <h2>Enjoy your stay</h2>
        </div>
      </div>
    </div>
  );
};

export default IntroBody;
