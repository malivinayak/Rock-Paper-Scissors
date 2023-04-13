import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext ';

export const NavBar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <nav className={isDarkMode ? 'bg-black' : 'bg-white'}>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">My App</h1>
                <div className="flex items-center">
                    <button
                        className={isDarkMode ?
                            "flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 ease-in-out" :
                            "flex items-center justify-center w-10 h-10 rounded-full bg-green-800 ease-in-out"}
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? (
                            <svg data-name="Layer 2" id="Layer_2" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" /></svg>
                        ) :
                        (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15a7 7 0 0 0 14 0v-2a5 5 0 0 1-5-5V5a3 3 0 0 0-6 0v3a5 5 0 0 1-5 5v2z" />
                        </svg>
                            )}
                    </button>
                </div>
            </div>
        </nav>
    );
}

