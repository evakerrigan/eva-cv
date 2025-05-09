import { ProjectItem } from './ProjectItem';
import { workProjects } from '../data/workProjects';
import { otherProjects } from '../data/otherProjects';
import '../styles/projects.css';

export const Project = () => {
  return (
    <div className="project-wrapper wrapper">
      <h2 className="layout-title">Рабочие проекты</h2>
      <ol className="project-list">
        {workProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ol>
      <h2 className="layout-title">Другие проекты</h2>
      <ol className="project-list">
        {otherProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ol>
    </div>
  );
};
