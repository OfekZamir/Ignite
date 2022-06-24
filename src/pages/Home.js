import React, { useEffect } from "react";
import GameDetail from "../components/GaneDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

//Components
import Game from "../components/Game";
import { fadeIn } from "../animation";

export const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //Fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <div>
      <GameList variants={fadeIn} initial="hidden" animate="show">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2 id="title">Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  releaseDate={game.released}
                  image={game.background_image}
                  key={game.id}
                  id={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2 id="title">Upcomming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>

        <h2 id="title">Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>
        <h2 id="title">New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              key={game.id}
              id={game.id}
            />
          ))}
        </Games>
      </GameList>
    </div>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  #title {
    text-align: center;
    text-decoration: underline;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
