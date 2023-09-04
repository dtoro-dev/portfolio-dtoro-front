import {
  Box,
  Link,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import experienceList from "../../api/experience.json";

const StyledTabs = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.main,
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: (props) => (props.isMobile ? "column" : "row"),
    },
    tabs: {
      borderRight: (props) =>
        props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
      borderBottom: (props) =>
        !props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`,
      width: (props) => (props.isMobile ? "inherit" : "200px"),
      maxWidth: (props) => (props.isMobile ? "inherit" : "200px"),
      minWidth: (props) => (props.isMobile ? "inherit" : "200px"),
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
        {experienceList.map((elem) => (
          <Tab label={elem.company} key={elem.id} />
        ))}
      </Tabs>
      {experienceList.map((elem) => (
        <TabPanel value={value} index={elem.id} key={elem.id}>
          <Box mb={4}>
            <Typography variant="h5">
              {t(`experience_${elem.id}_job`)} @{" "}
              <Link
                color="primary"
              >
                {elem.company}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" fontSize="14">
              {t(`experience_${elem.id}_duration`)}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1" color="textPrimary">
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
