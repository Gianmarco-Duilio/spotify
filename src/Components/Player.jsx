import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PiHeartStraightFill } from "react-icons/pi";
import { BiHeart } from "react-icons/bi";
import Button from "react-bootstrap/Button";

function Player() {
  const selectedSong = useSelector((state) => state.select.select);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <Row>
              {selectedSong ? (
                <Col xs={3}>
                  <div className=" d-flex flex-row align-items-center">
                    <img src={selectedSong.album.cover_small} className="card-img-left" alt={selectedSong.title} />
                    <div className="card-body">
                      <h5 className="card-title text-white ms-2">{selectedSong.album.title}</h5>
                      <p className="card-text text-white  ms-2">Artist: {selectedSong.artist.name}</p>
                    </div>
                    <Button
                      className="mt-4"
                      style={{ border: "none", background: "none" }}
                      onClick={handleAddToFavorites}
                    >
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
                  </div>
                </Col>
              ) : (
                <Col xs={3}></Col>
              )}
              <div className="col-4 col-md-4 playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/play.png" alt="play" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/next.png" alt="next" />
                  </a>
                  <a href="#">
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
              <Col xs={3}> </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
