/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./Footer.css";
import { about } from "../../data";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="text-center mt-[4em] py-[3em] bg-[var(--clr-primary)] 
    sm:mt-[3em] sm:py-[2em]"
    >
      <a
        href="#"
        className="text-[0.9rem] font-semibold text-[var(--clr-bg-alt)] transition-colors duration-200 ease-in hover:text-[var(--clr-fg-alt)]"
      >
        {t("footer.creat")} &#9829; {about.name && t("footer.by")}
      </a>
    </footer>
  );
};

export default Footer;
