import { useTheme } from "@mui/material";
import VideoMask from "../../assets/images/VideoMask";

const VideoLogo = (props) => {
  const theme = useTheme();
  
  const classes = {
    wrapper: {
      overflow: "hidden",
      position: "relative",
      width: "300px",
      height: "68px",
      [theme.breakpoints.down("xs")]: {
        width: "230px",
        height: "53px",
      },
    },
    mask: {
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "230px",
        height: "52px",
      },
    },
    video: {
      zIndex: 0,
      position: "absolute",
      top: 0,
      left: "1px",
      right: "1px",
      width: "298px",
      height: "68px",
      [theme.breakpoints.down("xs")]: {
        width: "228px",
        height: "52px",
      },
    },
  };
  return (
    <div style={classes.wrapper} {...props}>
      <VideoMask style={classes.mask} />
      <video autoPlay muted loop preload="auto" sx={classes.video}>
        <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4" />
      </video>
    </div>
  );
};

export default VideoLogo;
