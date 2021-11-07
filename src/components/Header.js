import React, { useState } from "react";
import DarkMode from "./DarkMode";


const Header = ({ searchWord }) => {
    const [color, setColor] = useState("")

    const handleKeypress = (e) => {

        if (e.keyCode === 13 || e.which === 13) {
            searchWord(color)
        }
    }
    return (
        <div className="header">
            <div className="header__title">
                <h1>ColorPicker</h1>
                <DarkMode />
            </div>
            <div className="header__box">
                <input placeholder="Enter color value" type="search" value={color} onChange={(e) => setColor(e.target.value)} onKeyPress={(e) => handleKeypress(e)} />

                <button className="button" onClick={() => searchWord(color)}>Search</button>
            </div>
        </div>
    )
}

export default Header;