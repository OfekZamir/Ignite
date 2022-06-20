import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";

//Components
import Game from "../components/Game";

export const Home = () => {
  //Fetch

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  const { popular, upcoming, newGames } = useSelector((state) => state.games);
  return (
    <div>
      <GameList>
        <h2>Upcomming Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h1>Home</h1>
      </GameList>
    </div>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
