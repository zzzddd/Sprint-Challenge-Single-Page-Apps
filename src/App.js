import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
// import EpisodeList from "./components/EpisodesList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <Menu />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/location" component={LocationList}/>
      <Route path="/character" component={CharacterList}/>
      {/* <Route path="/episode" component={EpisodeList}/> */}
    </main>
  );
}




