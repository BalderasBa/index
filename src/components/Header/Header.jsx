import { header } from "../../data";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { homepage, title } = header;
  const { t } = useTranslation();
  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {t("navbar.logo")}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
