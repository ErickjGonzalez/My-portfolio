import { SkillsList } from "../types/skill.types";

export const useSkills = (): SkillsList => {
  const skills: SkillsList = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Laravel" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Mysql" },
    { name: "Kotlin" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Git" },
     { name: "ASP .NET" },
    { name: "Python" }, 
    { name: "Scrum" },
  ];
  return skills;
};