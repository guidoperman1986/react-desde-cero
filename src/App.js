import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';

const App = () => {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]); */

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
