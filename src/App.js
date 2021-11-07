import React, { useState } from "react";
import ColorKeywords from "./data/ColorKeywords"
import './assets/scss/styles.scss';
import HexCodes from './data/HexCodes';
import PalleteGrid from './components/PallateGrid';
import Header from './components/Header';

const App = () => {


  const [colorPallate, setColorPallate] = useState([])

  const searchWord = (color) => {

    if (color.trim().length) {
      let i = 0;
      let foundWord = [];
      for (i; i < ColorKeywords.length; i++) {
        foundWord = ColorKeywords[i].filter(d => d === color.trim().toLowerCase())
        if (foundWord.length > 0) {
          setColorPallate(HexCodes[i])
          return;
        }
      }

      if (foundWord.length === 0) {
        alert("Wrong Input")
        setColorPallate([])
      }
    }

  }

  return (
    <div className="container">
      <Header searchWord={searchWord} />
      {colorPallate.length > 0 && <PalleteGrid colorPallate={colorPallate} />}
    </div>
  )
}

export default App;
