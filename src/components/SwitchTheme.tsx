import { useEffect, useState } from "react";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkToggle, setDarkToggle] = useState(
    colorTheme === "light" ? false : true
  );
  const toggleTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkToggle(checked);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log("theme", theme);
  }, [colorTheme, theme]);

  return (
    <div className="absolute md:right-4 top-2 right-2 md:inline-block">
      <div className="relative inline-block w-11 h-5">
        <input
          checked={darkToggle}
          onChange={(e) => toggleTheme(e.target.checked)}
          id="switch"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-300 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
          aria-label="Toggle dark mode"
        />
        <label
          htmlFor="switch"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
          aria-hidden="true"
        >
          &nbsp;
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
