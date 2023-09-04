import { useTheme } from "@mui/material";
import Fab from "@mui/material/Fab";

const FabList = ({ display }) => {
  const theme = useTheme();
  const classes = {
    fabContainer: {
      position: "fixed",
      bottom: 16,
      right: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "auto",
    },
    fabButton: {
      marginBottom: 1,
      color: theme.palette.background.default,
      background: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.light,
      }
    }
  }

  return (
    <div
      style={classes.fabContainer}
    >
      {display.map((obj, index) => (
        <Fab
          sx={classes.fabButton}
          key={index}
          aria-label={obj.label}
          variant={obj.href ?? "a"}
          target="_blank"
          href={obj.href}
          onClick={obj.onClick ?? obj.onClick}
        >
          {obj.icon}
        </Fab>
      ))}
    </div>
  );
};

export default FabList;
