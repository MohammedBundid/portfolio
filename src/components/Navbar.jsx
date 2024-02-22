import { useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillLampFill,
  BsSun,
  BsFillSunFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { scheme, toggleScheme } = useTheme();

  return (
    <>
      <header className={`px-2 w-full ${scheme ? "dark-mode" : "light-mode"}`}>
        <nav className="py-1  flex justify-between gap-4">
          <Link to={"/"} className="text-3xl font-medium capitalize">
            mohammed
          </Link>
          <ul className="flex items-center gap-2">
            {!scheme ? (
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={toggleScheme}
                />
              </li>
            ) : (
              <li>
                <BsFillSunFill
                  className="cursor-pointer text-2xl"
                  onClick={toggleScheme}
                />
              </li>
            )}
            <li>
              <Link to={"/about"}>about</Link>
            </li>
            <li>
              <Link to={"/skills"}>skills</Link>
            </li>

            {/* <li>
              <Link to={"/blog"}>blog</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>portfolio</Link>
            </li>
            <li>
              <Link
                className="text-xl px-2 py-1 rounded-md bg-sky-700 text-white"
                to={"/signup"}
              >
                signup
              </Link>
            </li> */}

          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
