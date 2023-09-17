import axios from "axios";
import { getPages } from "../store/pages/slice";
import { useAppDispatch } from "./store";

export const usePagesActions = () => {
  const dispatch = useAppDispatch();

  const displayPages = async () => {
    let { data } = await axios.get(`http://localhost:5000/pages`);
    dispatch(getPages(data));
  };

  return {
    displayPages,
  };
};
