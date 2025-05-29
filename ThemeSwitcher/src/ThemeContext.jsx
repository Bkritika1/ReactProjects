// import {  createContext, , useReducer } from "react";


// export const ThemeContext = createContext(null);


// export default function ThemeProvider({ Children }) {
//     const [Theme, dispatch] = useReducer(
//         ThemeReducer,
//         initialTheme
//     )


//     return (
//         <ThemeContext.Provider value={{ Theme, dispatch }} >
//             {Children}
//         </ThemeContext.Provider>
//     )
// }

// function ThemeReducer(Theme, action) {
//     switch (action.type) {
//         case 'changeTheme':
//             return Theme.color === 'black' ? { color: 'white', backgroundColor: 'black' } : { color: 'black', backgroundColor: 'white' };
//         default:
//             return Theme;
//     }

// }

// const initialTheme = {
//     color: 'black',
//     backgroundColor: 'white'
// }


import { createContext, useReducer } from "react";

export const ThemeContext = createContext(null);

const initialTheme = {
    color: 'black',
    backgroundColor: 'white'
};

function ThemeReducer(Theme, action) {
    switch (action.type) {
        case 'changeTheme':
            return Theme.color === 'black'
                ? { color: 'white', backgroundColor: 'black' }
                : { color: 'black', backgroundColor: 'white' };
        default:
            return Theme;
    }
}

export default function ThemeProvider({ children }) {
    const [Theme, dispatch] = useReducer(ThemeReducer, initialTheme);

    return (
        <ThemeContext.Provider value={{ Theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}
