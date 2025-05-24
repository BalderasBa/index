import { about } from "../../data";
// import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { name, role, description, resume, social } = about;
  const { t } = useTranslation();

  return (
    <div className="flex items-center flex-col bg-[url('https://i.ibb.co/vLR2rm9/me.png')] bg-no-repeat bg-contain bg-right">
      {name && (
        <h1>
          <span className="text-[#9856b0]">{t("about.name")}</span>
        </h1>
      )}

      {role && <h2 className="mt-4">{t("about.role")}</h2>}
      <p className="text-base max-w-[600px]">
        {description && t("about.desc")}
      </p>

      <div className="flex items-center mt-[2em] leading-[2em] indent-[10px]">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="relative pb-[0.3em] before:content-[''] before:absolute before:bottom-0 before:h-[0.2em] before:w-0 before:bg-[var(--clr-primary)] before:transition-[width] before:duration-200 before:ease-in hover:before:w-full text-[#555] dark:text-[#c6c6c6]"
              >
                {/* <GitHubIcon /> */}
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label="github"
                className="relative pb-[0.3em] before:content-[''] before:absolute before:bottom-0 before:h-[0.2em] before:w-0 before:bg-[var(--clr-primary)] before:transition-[width] before:duration-200 before:ease-in hover:before:w-full text-[#555] dark:text-[#c6c6c6]"
              >
                {/* <Twitter /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="relative pb-[0.3em] before:content-[''] before:absolute before:bottom-0 before:h-[0.2em] before:w-0 before:bg-[var(--clr-primary)] before:transition-[width] before:duration-200 before:ease-in hover:before:w-full text-[#555] dark:text-[#c6c6c6]"
              >
                {/* <LinkedInIcon /> */}
              </a>
            )}
            {social.youtube && (
              <a
                href={social.youtube}
                aria-label="youtube"
                className="relative pb-[0.3em] before:content-[''] before:absolute before:bottom-0 before:h-[0.2em] before:w-0 before:bg-[var(--clr-primary)] before:transition-[width] before:duration-200 before:ease-in hover:before:w-full text-[#555] dark:text-[#c6c6c6]"
              >
                {/* <YouTube /> */}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
