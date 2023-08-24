import axios from "axios";
import { changeMode } from "../store/theme/slice";
import { useAppDispatch } from "./store";

export const useThemeModeActions = () => {
  const dispatch = useAppDispatch();

  const changeThemeMode = async (mode) => {
    let { data } = await axios.get(`http://localhost:5000/theme?mode=${mode}`);
    
    dispatch(changeMode(data[0]));
  };

  return {
    changeThemeMode,
  };
};
