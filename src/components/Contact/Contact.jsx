import { contact } from "../../data";
// import "./Contact.css";
// import { Mail, CallSharp, Facebook } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  if (!contact.email) return null;

  return (
    <section className="section contact" id="contact">
      <h5 className="section__title">{t("contact.get")}</h5>
      <h2 className="section__title">{t("contact.section")}</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            {/* <Mail /> */}
            <h4>{t("contact.email")}</h4>
            <h5>hallousse.yehya@gmail.com</h5>
            <a
              className="btn btn--outline"
              href={`${contact.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.button")}
            </a>
          </article>
          <article className="contact__option">
            {/* <CallSharp /> */}
            <h4>{t("contact.whatsapp")}</h4>
            <h5>+213 776920565</h5>
            <a
              className="btn btn--outline"
              href={`${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.button")}
            </a>
          </article>
        </div>
        <from className="form" action="">
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.place1")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.place2")}
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder={t("contact.form.place3")}
            required
          />
          <button type="submit" className="btn btn--outline">
            {t("contact.send")}
          </button>
        </from>
      </div>
    </section>
  );
};

export default Contact;
