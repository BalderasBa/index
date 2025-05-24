import { header } from "../../data";
import Navbar from "../Navbar/Navbar";
// import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { homepage, title } = header;
  const { t } = useTranslation();
  return (
    <header className="sticky flex items-center h-16 md:h-24 px-5 justify-between top-0  z-50 bg-[#fcfcfc20] transition-all  duration-200  ease-in-out  border-b  border-transparent hover:border-b-2 hover:border-b-primary hover:bg-[#fcfcfc] dark:hover:bg-[#23283e]">
      <h3>
        {homepage ? (
          <a
            href={homepage}
            className="relative text-[#9856b0] pb-[0.3em] before:content-[''] 
before:absolute before:bottom-0 before:h-[0.2em] before:w-0 
before:bg-[#9856b0]  before:transition-[width]  before:duration-200  before:ease-in  hover:before:w-full"
          >
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
