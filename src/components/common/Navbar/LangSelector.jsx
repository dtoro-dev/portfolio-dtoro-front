import { KeyboardArrowDownSharp } from "@mui/icons-material";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  {
    code: "es",
    name: "ES",
    country_code: "es",
  },
  {
    code: "us",
    name: "EN",
    country_code: "us",
  },
];

const LangSelector = (props) => {
  const theme = useTheme();
  const classes = {
    profileMenu: {},
    menuItem: {
      backgroundColor: theme.palette.background.paper,
      "&:hover": {
        backgroundColor: theme.palette.background.default,
      },
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
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
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
        keepMounted
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={classes.profileMenu}
        disableScrollLock
      >
        <MenuItem sx={classes.menuItem} onClick={() => handleClose("us")}>
          <span className="fi fi-us" sx={classes.flagIcon} />
          EN
        </MenuItem>
        <MenuItem sx={classes.menuItem} onClick={() => handleClose("es")}>
          <span className="fi fi-es" sx={classes.flagIcon} />
          ES
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LangSelector;
