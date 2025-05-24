import { useContext, useState } from "react";
// import Brightness2Icon from "@material-ui/icons/Brightness2";
// import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact } from "../../data";
// import "./Navbar.css";
import Langue from "../langue/Langue";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);
  const { t } = useTranslation();
  return (
    <nav className="flex relative gap-4 justify-between items-center">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="hidden flex-col justify-center items-center fixed inset-0 w-full h-full z-40 bg-[#fcfcfc] dark:bg-[#23283e] mr-10"
      >
        {projects.length ? (
          <li className="my-2">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="capitalize font-semibold text-[#9856b0] dark:text-[#c1cfff]"
            >
              {t("navbar.portfolio")}
            </a>
          </li>
        ) : null}
        {skills.length ? (
          <li className="ml-4 md:my-2">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="capitalize relative text-[#9856b0] pb-[0.3em] before:content-[''] 
before:absolute before:bottom-0 before:h-[0.2em] before:w-0 
before:bg-[#9856b0]  before:transition-[width]  before:duration-200  before:ease-in  hover:before:w-full"
            >
              {t("navbar.skills")}
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="ml-4 md:my-2">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="capitalize relative text-[#9856b0] pb-[0.3em] before:content-[''] 
before:absolute before:bottom-0 before:h-[0.2em] before:w-0 
before:bg-[#9856b0]  before:transition-[width]  before:duration-200  before:ease-in  hover:before:w-full"
            >
              {t("navbar.contact")}
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="block text-sm font-medium uppercase bg-transparent transition-transform duration-200 ease-in-out cursor-pointer btn--icon"
        aria-label="toggle theme"
      >
        {/* {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
        dark/light
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="block z-50 text-sm font-medium uppercase bg-transparent transition-transform duration-200 ease-in-out cursor-pointer btn--icon"
        aria-label="toggle navigation"
      >
        menu/close
        {/* {showNavList ? <CloseIcon /> : <MenuIcon />} */}
      </button>
      <Langue />
    </nav>
  );
};

export default Navbar;
