import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import sections from "../../../api/sections";
import DarkModeSwitcher from "../DarkModeSwitcher";
import LangSelector from "./LangSelector";

const MobileMenu = ({ open, onClose, onOpen }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const classes = {
    drawer: {
      backgroundColor: theme.palette.background.default,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
      marginTop: theme.spacing(4),
    },
    listItem: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(2, 0),
      "&:hover": {
        backgroundColor: "rgb(80,80,80)",
      },
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(1),
    },
    active: {
      backgroundColor: theme.palette.primary.main,
    },
  };

  const listItemProps = {
    component: Link,
    onClick: onClose,
    onKeyDown: onClose,
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
    style: classes.listItem,
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ paper: classes.drawer }}
    >
      <div style={classes.list} role="presentation">
        <List sx={classes.fullList}>
          {sections.map((section, index) => (
            <ListItem {...listItemProps} key={index} to={section.to}>
              {t(section.label)}
            </ListItem>
          ))}
          <ListItem sx={classes.btnContainer}>
            <Button
              component={MuiLink}
              href="/cv.pdf"
              target="_blank"
              variant="outlined"
              color="primary"
              underline="none"
            >
              {t("menu_resume")}
            </Button>
          </ListItem>
          <ListItem sx={classes.btnContainer}>
            <LangSelector onClose={onClose} />
          </ListItem>
          <ListItem sx={classes.btnContainer}>
            <DarkModeSwitcher onClose={onClose} />
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
