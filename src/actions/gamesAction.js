import axios from "axios";
import {
  popularGamesURL,
  upcomming_gamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const UpcommingData = await axios.get(upcomming_gamesURL());
  const newGamessData = await axios.get(newGamesURL());

  // const popularData = await axios.get("../json/popular.json");
  // const UpcommingData = await axios.get("../json/upcoming.json");
  // const newGamessData = await axios.get("../json/newGames.json");

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: UpcommingData.data.results,
      newGames: newGamessData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  console.log(searchGames.data.results);
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
