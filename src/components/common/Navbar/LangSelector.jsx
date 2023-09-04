import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import languages from "../../../api/languages.json";
import ThemeContext from "../../../contexts/themeContext";
import i18n from "../../../i18n";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LangSelector = (props) => {
  const theme = useTheme();
  const { isDarkMode } = useContext(ThemeContext);
  const classes = {
    profileMenu: {
      background: "transparent",
    },
    menuItem: {
      // backgroundColor: theme.palette.primary.main,
      // color: theme.palette.primary.main,
      fontWeight: "bold",
      color: theme.palette.background.default,
      background: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.light,
      }
    },
    flagIcon: {
      marginRight: theme.spacing(1),
    },
  };
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = (code) => {
    i18n.changeLanguage(code);
    setAnchorEl(null);
    if (props.onClose) {
      props.onClose();
    }
  };

  const currentLanguage = languages.find((elem) => elem.code === t("language"));

  return (
    <div {...props}>
      <Button
        variant="contained"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{
          color: theme.palette.background.default,
        }}
      >
        {currentLanguage && (
          <>
            <span
              style={classes.flagIcon}
              className={`fi fi-${currentLanguage.country_code}`}
            ></span>{" "}
            {currentLanguage.name}
          </>
        )}
        <KeyboardArrowDownSharp style={{ color: "inherit" }} />
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={classes.profileMenu}
      >
        {languages.map((lenguage, index) => {
          return (
            <MenuItem
              key={index}
              sx={classes.menuItem}
              onClick={() => handleClose(lenguage.code)}
            >
              <span
                className={`fi fi-${lenguage.code}`}
                style={classes.flagIcon}
              />
              {lenguage.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default LangSelector;
