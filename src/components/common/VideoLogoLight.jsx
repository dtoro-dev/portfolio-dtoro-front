import { useTheme } from "@mui/material";
import { useContext } from "react";
import VideoMask from "../../assets/images/VideoMask";
import ThemeContext from "../../contexts/themeContext";

const VideoLogoLight = (props) => {
  const theme = useTheme();
  const { isDarkMode } = useContext(ThemeContext);
  const URL_LIGHT_MODE =
    "https://static.vecteezy.com/system/resources/previews/007/836/132/mp4/4k-animation-animated-background-of-flowing-colorful-curved-lines-video.mp4";

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
      width: "100%",
      height: "auto",
      [theme.breakpoints.down("xs")]: {
        width: "228px",
        height: "52px",
      },
    },
  };
  return (
    <div style={classes.wrapper} {...props}>
      <VideoMask style={classes.mask} />
      <video autoPlay muted loop preload="auto" style={classes.video}>
        <source
          style={{
            width: "374px",
            height: "50px",
          }}
          sizes="374px"
          src={URL_LIGHT_MODE}
        />
      </video>
    </div>
  );
};

export default VideoLogoLight;
