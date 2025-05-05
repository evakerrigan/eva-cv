import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <div className="skills-wrapper wrapper">
      <h2>Ключевые навыки</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill">{skill}</span>
          </li>
        ))}
       
      </ul>
    </div>
  );
};
