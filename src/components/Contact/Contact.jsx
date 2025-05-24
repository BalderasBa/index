import { contact } from "../../data";
// import "./Contact.css";
// import { Mail, CallSharp, Facebook } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  if (!contact.email) return null;

  return (
    <section
      id="contact"
      className="flex flex-col mt-8 w-full max-w-[80%] mx-auto"
    >
      <h5 className="mb-8 text-center uppercase">{t("contact.get")}</h5>
      <h2 className="mb-8 text-center uppercase">{t("contact.section")}</h2>

      <div className="grid grid-cols-[30%_58%] gap-[12%] max-w-full lg:grid-cols-1 lg:gap-8 sm:w-full">
        <div className="flex flex-col gap-5">
          <article className="p-5 rounded-[1.2rem] text-center border border-transparent transition duration-300 hover:bg-transparent">
            {/* <Mail /> */}
            <h4>{t("contact.email")}</h4>
            <h5>hallousse.yehya@gmail.com</h5>
            <a
              className="block cursor-pointer px-6 py-3 font-medium text-sm uppercase transition-transform duration-200 ease-in-out mt-[10px] bg-transparent btn--outline"
              href={`${contact.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.button")}
            </a>
          </article>
          <article className="p-5 rounded-[1.2rem] text-center border border-transparent transition duration-300 hover:bg-transparent">
            {/* <CallSharp /> */}
            <h4>{t("contact.whatsapp")}</h4>
            <h5>+213 776920565</h5>
            <a
              className="block cursor-pointer px-6 py-3 font-medium text-sm uppercase transition-transform duration-200 ease-in-out mt-[10px] bg-transparent btn--outline"
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
            className="w-full p-6 rounded-[1.5rem] bg-transparent border border-[var(--clr-primary)] text-[var(--clr-fg-alt)] resize-none"
            placeholder={t("contact.form.place1")}
            required
          />
          <input
            type="email"
            name="email"
            className="w-full p-6 rounded-[1.5rem] bg-transparent border border-[var(--clr-primary)] text-[var(--clr-fg-alt)] resize-none"
            placeholder={t("contact.form.place2")}
            required
          />
          <textarea
            name="message"
            className="w-full p-6 rounded-[1.5rem] bg-transparent border border-[var(--clr-primary)] text-[var(--clr-fg-alt)] resize-none"
            rows={7}
            placeholder={t("contact.form.place3")}
            required
          />
          <button
            type="submit"
            className="block cursor-pointer px-6 py-3 font-medium text-sm uppercase transition-transform duration-200 ease-in-out mt-[10px] bg-transparent btn--outline"
          >
            {t("contact.send")}
          </button>
        </from>
      </div>
    </section>
  );
};

export default Contact;
