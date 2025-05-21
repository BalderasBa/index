import uniqid from "uniqid";
  // import GitHubIcon from "@material-ui/icons/GitHub";
  // import LaunchIcon from "@material-ui/icons/Launch";
// import "./ProjectContainer.css";

const ProjectContainer = ({ project }) => (
  <div className="project">
    <img className="back-img" src={project.backgroundImg} alt={project.name} />
    <h3>{project.name}</h3>

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        {/* <GitHubIcon fontSize="large" /> */}
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        {/* <LaunchIcon fontSize="large" /> */}
      </a>
    )}
  </div>
);

export default ProjectContainer;
