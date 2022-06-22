//Base URL
const base_url = "https://api.rawg.io/api/";

const key = "key=7d69d6bf0f3e4b0aa6fa91d641703f93";
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `games?${key}&dates=${currentDate},${nextYear}&ordering=-added-release&page_size=10`;
const newGames = `games?${key}&dates=${lastYear},${currentDate}&ordering=-release&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomming_gamesURL = () => `${base_url}${upcomming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${key}`;
export const gameScreenshotsURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key}`;
