import React from "react";
import "./styles/Global/Global.css";
import Header from "./Components/CommonComponents/Header";
import Landing from "./Components/Landingcomponents/Landing";
import Welcome from "./Components/Landingcomponents/Welcome";
import Candidates from "./Components/Landingcomponents/Candidates";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <Welcome />
      <Candidates />
    </>
  );
}

export default App;
