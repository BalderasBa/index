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
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              {t("navbar.portfolio")}
            </a>
          </li>
        ) : null}
        {skills.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              {t("navbar.skills")}
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              {t("navbar.contact")}
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {/* {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
        btn
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        btn
        {/* {showNavList ? <CloseIcon /> : <MenuIcon />} */}
      </button>
      <Langue />
    </nav>
  );
};

export default Navbar;
