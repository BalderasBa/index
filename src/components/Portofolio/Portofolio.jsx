import uniqid from "uniqid";
import { projects } from "../../data";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
// import "./Portofolio.css";
import { useTranslation } from "react-i18next";

const Portofolio = () => {
  const { t } = useTranslation();
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">{t("projects.section")}</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
