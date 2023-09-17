import { useTheme } from "@mui/material";
import { useContext } from "react";
import VideoMask from "../../assets/images/VideoMask";
import ThemeContext from "../../contexts/themeContext";

const VideoLogo = (props) => {
  const theme = useTheme();
  const { isDarkMode } = useContext(ThemeContext);
  const URL_DARK_MODE = "https://static.vecteezy.com/system/resources/previews/020/045/758/mp4/abstract-yellow-lines-energy-magical-glowing-rain-falling-on-a-curved-abstract-golden-background-4k-video.mp4"

  const classes = {
    wrapper: {
      overflow: "hidden",
      position: "relative",
      width: "300px",
      height: "68px",
      "@media (maxWidth:0.05px)": {
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
      "@media (maxWidth:0.05px)": {
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
      "@media (maxWidth:0.05px)": {
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
          src={URL_DARK_MODE}
        />
      </video>
    </div>
  );
};

export default VideoLogo;
