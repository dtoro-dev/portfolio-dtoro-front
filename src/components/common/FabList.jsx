import { useTheme } from "@mui/material";
import Fab from "@mui/material/Fab";

const FabList = ({ display }) => {
  const theme = useTheme();
  let y = 0;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 16,
        right: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "auto",
      }}
    >
      {display.map((obj, index) => (
        <Fab
          sx={{
            marginBottom: 1,
            color: theme.palette.secondary
          }}
          key={index}
          aria-label={obj.label}
          color={obj.color}
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
