import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext ';
import anime from "animejs";

export const NavBar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const moonPath =
        "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
    const circlePath =
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

    const changeTheme = () => {
        toggleDarkMode();

        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo"
        });

        morphTo(timeline, isDarkMode);

    }

    function morphTo(timeline, toggler) {
        timeline
            .add({
                targets: ".circle",
                d: [{ value: toggler ? circlePath : moonPath }]
            })
            .add(
                {
                    targets: "#darkMode",
                    rotate: toggler ? 40 : 320
                },
                "-=700"
            )
            .add(
                {
                    targets: ".scene",
                    backgroundColor: toggler ? "#f1f1f1" : "#333"
                },
                "-=700"
            );
    }

    return (
        <nav className={isDarkMode ? 'bg-black' : 'bg-white'}>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Rock Paper Scissor</h1>
                <div className="flex items-center">
                    <button
                        className={isDarkMode ?
                            "flex items-center justify-center w-15 h-10 rounded-full bg-blue-200 ease-in-out outline-0	" :
                            "flex items-center justify-center w-15 h-10 rounded-full bg-green-800 ease-in-out outline-0	"}
                        onClick={changeTheme}
                    >
                        <svg id="darkMode" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="circle" d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z" fill="#FFC700" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

