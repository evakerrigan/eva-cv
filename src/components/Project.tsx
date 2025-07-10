import { ProjectItem } from './ProjectItem';
import workProjectsData from '../data/workProjects.json';
import otherProjectsData from '../data/otherProjects.json';
import { Project as ProjectType } from '../data/types';
import '../styles/projects.css';

const workProjects: ProjectType[] = workProjectsData;
const otherProjects: ProjectType[] = otherProjectsData;

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
