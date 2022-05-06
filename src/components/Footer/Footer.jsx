import "./Footer.css";
import { about } from "../../data";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <a href="#" className="link footer__link">
        {t("footer.creat")} &#9829; By {about.name}
      </a>
    </footer>
  );
};

export default Footer;
