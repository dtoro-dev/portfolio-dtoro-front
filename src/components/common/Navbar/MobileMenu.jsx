import {
  Divider,
  Drawer,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LangSelector from "./LangSelector";
import sections from "../../../api/sections"

const MobileMenu = ({ open, onClose, onOpen }) => {
  const theme = useTheme();
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
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(1),
    },
  };

  const { t } = useTranslation();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.drawer }}
    >
      <div style={classes.list} role="presentation">
        <List sx={classes.fullList}>
          {sections.map((section, index) => (
            <ListItem key={index} href={section.to}>
              {t(section.label)}
            </ListItem>
          ))}
          <ListItem sx={classes.btnContainer}>
            <LangSelector onClose={onClose} />
          </ListItem>
          <Divider />
        </List>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
