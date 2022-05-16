import Twitter  from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../data";
import "./About.css";
import { YouTube } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const About = () => {
  const { name, role, description, resume, social } = about;
  const { t } = useTranslation();

  return (
    <div className="about center">
      {name && (
        <h1>
           <span className="about__name">{t("about.name")}</span>
        </h1>
      )}

      {role && <h2 className="about__role">{t("about.role")}</h2>}
      <p className="about__desc">{description && t("about.desc")}</p>

      <div className="about__contact center">
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
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label="github"
                className="link link--icon"
              >
                <Twitter />
              </a>
            )}
            
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
            {social.youtube && (
              <a
                href={social.youtube}
                aria-label="youtube"
                className="link link--icon"
              >
                <YouTube />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
