
import React, { useEffect, useState } from "react";


const DarkMode = () => {
    let clickedClass = "clicked";

    const body = document.body;
    const lightTheme = "light-theme";
    const darkTheme = "dark-theme";

    let theme;

    const [iconTheme, setIcon] = useState("bx-sun")

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }


    useEffect(() => {
        setIcon("light-theme")
        if (theme === lightTheme || theme === darkTheme) {
            body.classList.add(theme);
        } else {
            body.classList.add(lightTheme);
        }

    }, [])

    const switchTheme = (e) => {

        if (theme === darkTheme) {

            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            setIcon(theme)
        } else {

            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark-theme");
            theme = darkTheme;
            setIcon(theme)

        }
    };

    return (
        <>
            {iconTheme === "light-theme" ? <i class={`bx bx-sun change-theme`} id="theme-button"
                onClick={(e) => switchTheme(e)}></i> : iconTheme === "dark-theme" && <i class={`bx bx-moon change-theme`} id="theme-button"
                    onClick={(e) => switchTheme(e)}></i>}

        </>
    );
};

export default DarkMode;