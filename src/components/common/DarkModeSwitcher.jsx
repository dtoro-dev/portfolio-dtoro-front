import { FormControlLabel, Switch } from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/themeContext";

const DarkModeSwitcher = ({ onClose }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  
  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          name="checkedDarkMode"
          color="primary"
          onChange={() => {
            if (onClose) {
              onClose();
            }
            setIsDarkMode(!isDarkMode);
          }}
        />
      }
      label={t("dark_mode")}
    />
  );
};

export default DarkModeSwitcher;
