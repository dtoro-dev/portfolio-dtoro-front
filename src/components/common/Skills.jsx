import { Paper, Typography, useTheme } from "@mui/material";
import skillsList from "../../api/skills.json";

const Skills = () => {
  const theme = useTheme();
  const classes = {
    container: {
      maxWidth: "600px",
      display: "flex",
      flexWrap: "wrap",
    },
    paper: {
      marginRight: "10px",
      marginBottom: "10px",
      minWidth: "50px",
      padding: "10px",
      backgroundColor: theme.palette.primary.main
    },
  };

  return (
    <div style={classes.container}>
      {skillsList.map((elem, k) => (
        <Paper elevation={10} key={k} sx={classes.paper}>
          <Typography style={{color: theme.palette.background.default, fontWeight: "bold"}} align="center">{elem.title}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default Skills;
