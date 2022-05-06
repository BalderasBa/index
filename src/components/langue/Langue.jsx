import { LanguageOutlined } from "@material-ui/icons";
import React from "react";
import "./Langue.css";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Langue() {
  const { t } = useTranslation();
  return (
    <div className="langue">
      <LanguageOutlined className="lng"/>
      <select
        name=""
        id=""
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ar">SA</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
}
export default Langue;
