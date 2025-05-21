// import "./Footer.css";
import { about } from "../../data";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <a href="#" className="footer__link">
        {t("footer.creat")} &#9829; {about.name && t("footer.by")}
      </a>
    </footer>
  );
};

export default Footer;
