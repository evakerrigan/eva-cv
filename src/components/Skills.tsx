import { skills } from "../data/skills";
import "../styles/skills.css";

export const Skills = () => {
  const formatSkillText = (text: string, highlightedWords: string[]) => {
    let formattedText = text;
    highlightedWords.forEach(word => {
      const regex = new RegExp(word, 'g');
      formattedText = formattedText.replace(regex, `<strong>${word}</strong>`);
    });
    return formattedText;
  };

  return (
    <div className="skills-wrapper wrapper">
      <h2>Ключевые навыки</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <span
              className="skill"
              dangerouslySetInnerHTML={{
                __html: formatSkillText(skill.text, skill.highlightedWords)
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
