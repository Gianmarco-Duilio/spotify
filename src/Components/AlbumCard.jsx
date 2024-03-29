import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { PiHeartStraightFill } from "react-icons/pi";
import { BiHeart } from "react-icons/bi";
import { addToSelected } from "../redux/actions";

function AlbumCard({ songInfo }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  const handleCardClick = () => {
    dispatch(addToSelected(songInfo));
    console.log("Card selezionata:", songInfo);
  };

  return (
    <div className="col text-center" id={songInfo.id} onClick={handleCardClick}>
      {" "}
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p>
        Track: "{songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}{" "}
        <Button style={{ border: "none", background: "none" }} onClick={handleAddToFavorites}>
          {isFavorite ? (
            <PiHeartStraightFill
              style={{
                color: "red",
              }}
            />
          ) : (
            <BiHeart
              style={{
                color: "grey",
              }}
            />
          )}
        </Button>
      </p>
    </div>
  );
}

export default AlbumCard;
