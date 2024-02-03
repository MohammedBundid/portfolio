import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const storedScheme = localStorage.getItem("theme") === "dark";
    const [scheme, setScheme] = useState(storedScheme || false);

    useEffect(() => {
        localStorage.setItem("theme", scheme ? "dark" : "light");
    }, [scheme]);

    const toggleScheme = () => {
        setScheme((prevScheme) => !prevScheme);
    };

    return (
        <ThemeContext.Provider value={{ scheme, toggleScheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
