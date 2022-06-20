import axios from "axios";
import { popularGamesURL, upcomming_gamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const UpcommingData = await axios.get(upcomming_gamesURL());
  const newGamessData = await axios.get(newGamesURL());

  // const popularData = await axios.get("../json/popular.json");
  // const UpcommingData = await axios.get("../json/upcoming.json");
  // const newGamessData = await axios.get("../json/newGames.json");
  console.log(newGamessData);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: UpcommingData.data.results,
      newGames: newGamessData.data.results,
    },
  });
};
