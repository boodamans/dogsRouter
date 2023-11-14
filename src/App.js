import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import whiskey from './dogPics/whiskey.jpg';
import duke from './dogPics/duke.jpg';
import perry from './dogPics/perry.jpg';
import tubby from './dogPics/tubby.jpg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={App.defaultProps.dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={App.defaultProps.dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      img: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      img: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      img: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      img: tubby,
      facts: [
        "Tubby is really handsome.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby but claims not to anymore."
      ]
    }
  ]
};

export default App;
