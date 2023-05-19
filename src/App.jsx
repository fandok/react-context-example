import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
};

const Header = () => {
  return <User />;
};

const User = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <h1
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      menggunakan theme: {theme}
    </h1>
  );
};

export default App;
