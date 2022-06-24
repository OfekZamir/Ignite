import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import linux from "../img/linux.svg";

//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const [platformList, setPlatformList] = useState();
  const navigate = useNavigate();

  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 0; i < 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="start" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="start" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //UniqueValues
  function onlyUnique(value, index, self) {
    console.log(self.indexOf(value) === index);
    return self.indexOf(value) === index;
  }
  //Get distinct platforms
  function distinctPlatforms() {
    console.log(
      game.platforms
        .map((data) => data.platform.name.split(" ")[0])
        .filter(onlyUnique)
        .sort()
    );
    return game.platforms
      .map((data) => data.platform.name.split(" ")[0])
      .filter(onlyUnique)
      .sort();
  }
  //Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation":
        return playstation;
      case "Xbox":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo":
        return nintendo;
      case "Android":
        return apple;
      case "iOS":
        return apple;
      case "macOS":
        return apple;
      case "Linux":
        return linux;
      default:
        return gamepad;
    }
  };
  console.log(apple);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>
                  Rating:
                  {game.rating}
                </p>
                <Stars>{getStars()}</Stars>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {distinctPlatforms().map((data) => (
                    <img key={data} src={getPlatform(data)} />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff1254;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin: 0rem 1rem;
    width: 3rem;
    svg path {
      fill: red;
    }
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Stars = styled.div`
  padding-top: 1rem;
  img {
    width: 1rem;
    height: 1rem;
    display: inline;
  }
`;
export default GameDetail;
