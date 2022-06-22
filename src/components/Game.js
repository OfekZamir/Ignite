import React from "react";
//Stying animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, releaseDate, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  console.log(typeof stringPathId);
  return (
    <StyledGames layoutid={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{releaseDate}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGames>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 10vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Game;
