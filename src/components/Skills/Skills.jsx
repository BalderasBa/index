import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid'
import { skills } from '../../data'
// import './Skills.css'

const Skills = () => {
  const { t } = useTranslation();

  if (!skills.length) return null

  return (
    <section className="px-4 py-12 my-8 section skills" id="skills">
      <h2 className="mb-8 text-3xl font-bold text-center section__title">
        {t("skills.section")}
      </h2>
      <ul className="flex flex-wrap gap-4 justify-center p-4">
        {skills.map((skill) => (
          <li
            key={uniqid()}
            className="p-4 text-xl font-bold text-white rounded-lg shadow-md transition-all duration-300 transform bg-primary hover:bg-opacity-80 hover:scale-105"
          >
            {skill}{" "}
            <span className="ml-2 text-yellow-300" data-percent>
              *****
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills
