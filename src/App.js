import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import Player from "./Components/Player";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar updateSearchResults={updateSearchResults} />
          </Col>
          <Col>
            <Main searchResults={searchResults} />
          </Col>
        </Row>
      </Container>

      <Container fluid className="fixed-bottom">
        <Player />
      </Container>
    </>
  );
}

export default App;
