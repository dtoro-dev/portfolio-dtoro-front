import { useTheme } from "@mui/material";
import "../styles/gritch.css";

const Logo = ({brand, title}) => {
  const theme = useTheme();
  const classes = {
    glitch: {
      fontSize: "50px",
      fontWeight: 700,
      lineHeight: 1.2,
      color: theme.palette.primary.main,
      letterSpacing: "5px",
      animation: "shift 4s ease-in-out infinite alternate",
      zIndex: 1,
      border: `3px solid ${theme.palette.primary.main}`,
      padding: "0 20px",
    },
    glitchBrand: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: 1.2,
      color: theme.palette.primary.main,
      letterSpacing: "4px",
      // animation: "shift 4s ease-in-out infinite alternate",
      zIndex: 1,
      border: `3px solid ${theme.palette.primary.main}`,
      padding: "0 15px",
    } 
  }

  return (
    <div className="glitch-wrapper">
      <div
        className={brand ? "glitch-brand" : "glitch" }
        style={brand ? classes.glitchBrand : classes.glitch }
        data-glitch={title}
      >
        {title}
      </div>
    </div>
  );
};

export default Logo;
