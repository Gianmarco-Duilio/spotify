import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";

const Main = () => {
  const searchResults = useSelector((state) => state.search.available);
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hiphop, setHipHop] = useState([]);

  const handleSection = async (artistName, setSection) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const { data } = await response.json();
        setSection(data.slice(0, 4));
      } else {
        throw new Error("Errore nel recupero delle canzoni");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  useEffect(() => {
    handleSection("nirvana", setRock);
    handleSection("michaeljackson", setPop);
    handleSection("icecube", setHipHop);
  }, []);

  return (
    <div className="mainPage">
      <div className="row">
        <div className="col-lg-12 mainLinks d-none d-md-flex">
          <a href="#" className="nav-link">
            TRENDING
          </a>
          <a href="#" className="nav-link">
            PODCAST
          </a>
          <a href="#" className="nav-link">
            MOODS AND GENRES
          </a>
          <a href="#" className="nav-link">
            NEW RELEASES
          </a>
          <a href="#" className="nav-link">
            DISCOVER
          </a>
        </div>
      </div>

      <div className="mainPage">
        {searchResults.length > 0 && (
          <div id="searchSection">
            <h2 className="text-white">Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {searchResults.map((songInfo) => (
                <AlbumCard key={songInfo.id} songInfo={songInfo} />
              ))}
            </div>
          </div>
        )}

        <div id="rockSection">
          <h2 className="text-white">Rock</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {rock.map((songInfo) => (
              <AlbumCard key={songInfo.id} songInfo={songInfo} />
            ))}
          </div>
        </div>

        <div id="popSection">
          <h2 className="text-white">Pop</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {pop.map((songInfo) => (
              <AlbumCard key={songInfo.id} songInfo={songInfo} />
            ))}
          </div>
        </div>

        <div id="hipHopSection">
          <h2 className="text-white">Hip Hop</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {hiphop.map((songInfo) => (
              <AlbumCard key={songInfo.id} songInfo={songInfo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
