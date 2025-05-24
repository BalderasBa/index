// import { LanguageOutlined } from "@material-ui/icons";
// import "./Langue.css";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Langue() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center px-4 py-2 ml-4 rounded-2xl">
      {/* <LanguageOutlined className="lng" /> */}
      <select
        name=""
        id=""
        className="cursor-pointer"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option
          class="text-[#333] dark:text-[#c6c6c6] dark:bg-[#333] cursor-pointer"
          value="en"
        >
          {t("lang.en")}
        </option>
        <option
          class="text-[#333] dark:text-[#c6c6c6] dark:bg-[#333] cursor-pointer"
          value="ar"
        >
          {t("lang.ar")}
        </option>
        <option
          class="text-[#333] dark:text-[#c6c6c6] dark:bg-[#333] cursor-pointer"
          value="fr"
        >
          {t("lang.fr")}
        </option>
      </select>
    </div>
  );
}
export default Langue;
