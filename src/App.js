import "./App.css";
import React, { useEffect } from "react";

import NavBar from "./components/navigation/NavBar";
import MainRouter from "./components/router/Router";

const data = [
  {
    aProject: false,
    rProject: true,
    pProject: false,
    oneDay: false,
    max1Week: true,
    someWeeks: false,
    someMonths: false,
    oneToTenPeople: false,
    tenToThirtyPeople: false,
    thirtyPlusPeople: false,
    information: false,
    consultation: false,
    coDetermination: false,
    inform: false,
    analyse: false,
    discussion: false,
    networking: false,
    plan: false,
    working: false,
    opinions: false,
    conflicts: false,
    suitable: false,
    name: "Test name",
    description: "Test description",
  },
  {
    aProject: false,
    rProject: true,
    pProject: false,
    oneDay: false,
    max1Week: true,
    someWeeks: true,
    someMonths: false,
    oneToTenPeople: false,
    tenToThirtyPeople: false,
    thirtyPlusPeople: false,
    information: false,
    consultation: false,
    coDetermination: false,
    inform: true,
    analyse: false,
    discussion: false,
    networking: false,
    plan: false,
    working: true,
    opinions: false,
    conflicts: false,
    suitable: false,
    name: "Test name2",
    description: "Test description2",
  },
];

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem("data")) sessionStorage.setItem("data", JSON.stringify(data));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <MainRouter />
    </div>
  );
}

export default App;
