import { LanguageOutlined } from "@material-ui/icons";
import React from "react";
import "./Langue.css";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Langue() {
  const { t } = useTranslation();
  return (
    <div className="langue btn--outline">
      <LanguageOutlined className="lng" />
      <select
        name=""
        id=""
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option class="lang-option" value="en">{t("lang.en")}</option>
          <option class="lang-option" value="ar">{t("lang.ar")}</option>
        <option class="lang-option" value="fr">{t("lang.fr")}</option>
      </select>
    </div>
  );
}
export default Langue;
