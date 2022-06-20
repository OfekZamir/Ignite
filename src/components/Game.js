import React from "react";
//Stying animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, releaseDate, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGames onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{releaseDate}</p>
      <img src={image} alt={name} />
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 10vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
