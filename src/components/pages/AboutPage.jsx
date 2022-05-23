import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h1>About this project</h1>
      <h2>This project was created for Agricathon 2022</h2>
      <br />

      <ListGroup style={{ width: "50%" }}>
        <ListGroup.Item>
          <h2>Creators</h2>
        </ListGroup.Item>
        <ListGroup.Item variant="primary">Natal Bumann</ListGroup.Item>
        <ListGroup.Item variant="success">Sven Zengaffinen</ListGroup.Item>
        <ListGroup.Item variant="primary">Ismael Jaggi</ListGroup.Item>
        <ListGroup.Item variant="success">Nicolas Bellwald</ListGroup.Item>
        <ListGroup.Item variant="primary">Csaba Agosthazy</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AboutPage;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
