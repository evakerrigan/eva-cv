import { Project } from "../data/workProjects";
import happyMappy from "../assets/projects/project-happy-mappy.jpg";
import multi from "../assets/projects/project-multi.jpg";
import paykongAdmin from "../assets/projects/project-paykong-admin.jpg";
import paykongAgent from "../assets/projects/project-paykong-agent.jpg";
import paykongPay from "../assets/projects/project-paykong-pay.jpg";

interface ProjectItemProps {
  project: Project;
}

const getImage = (imageName: string) => {
  switch (imageName) {
    case "happyMappy":
      return happyMappy;
    case "multi":
      return multi;
    case "paykong-admin":
      return paykongAdmin;
    case "paykong-agent":
      return paykongAgent;
    case "paykong-pay":
      return paykongPay;
    default:
      return "";
  }
};

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const image = getImage(project.image);

  return (
    <li className="project-item">
      {project.image === "nda" ? (
        <div className="project-image-nda">NDA</div>
      ) : (
        <div className="project-image">
          <img src={image} alt="project" />
        </div>
      )}
      <div className="project-details-wrapper">
        {project.image === "nda" ? (
          <div className="project-details-wrapper-mobile">
            <div className="project-image-nda-mobile">NDA</div>
            <h4>
              {project.title}
              {project.titleEtc}
            </h4>
          </div>
        ) : (
          <div className="project-image-mobile">
            <img src={image} alt="project" />
            <h4>
              {project.link ? (
                <>
                  <a href={project.link} target="_blank">
                    {project.title}
                  </a>
                  {project.titleEtc}
                </>
              ) : (
                <>
                  {project.title}
                  {project.titleEtc}
                </>
              )}
            </h4>
          </div>
        )}
        <p>{project.description}</p>
        {project.details.length > 0 && (
          <ul className="project-details">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {project.stack.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
    </li>
  );
};
