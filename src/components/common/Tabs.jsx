import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import experience from "../../api/experience";
import ThemeContext from "../../contexts/themeContext";

const StyledTabs = () => {
  const theme = useTheme();
  const {isDarkMode} = useContext(ThemeContext);
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.main,
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: isMobile ? "column" : "row",

    },
    tabs: {
      borderRight: isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
      borderBottom: isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
      width: isMobile ? "inherit" : "200px",
      maxWidth: isMobile ? "inherit" : "200px",
      minWidth: isMobile ? "inherit" : "200px",
    },
    indicator: {
      backgroundColor: "red",
    },
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={classes.root}>
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        sx={classes.tabs}
        classes={{ indicator: classes.indicator }}
        centered
      >
        {experience.map((elem) => (
          <Tab label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {experience.map((elem) => (
        <TabPanel value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography color={isDarkMode ? "primary.light": "primary.dark"} variant="h5">
              {t(`experience_${elem.id}_job`)} @{" "}
              {elem.company}
            </Typography>
            <Typography color={isDarkMode ? "primary.light": "primary.dark"} variant="body2" fontSize="14">
              {`${elem.fromDate} - ${elem.toDate}`}
            </Typography>
          </Box>
          <Box mb={4} width={isMobile ? "100%": "90%"}>
            <Typography color={isDarkMode ? "primary.light": "primary.dark"} variant="body1" sx={{textAlign: "justify"}}>
              {t(`experience_${elem.id}_overview`)}
            </Typography>
          </Box>
        </TabPanel>
      ))}
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} minHeight={isMobile ? 0 : "350px"}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default StyledTabs;
