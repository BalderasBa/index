import uniqid from "uniqid";
import { projects } from "../../data";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
// import "./Portofolio.css";
import { useTranslation } from "react-i18next";

const Portofolio = () => {
  const { t } = useTranslation();
  if (!projects.length) return null;

  return (
    <section id="projects" className="mt-8 projects">
      <h2 className="mb-8 text-center uppercase">{t("projects.section")}</h2>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
