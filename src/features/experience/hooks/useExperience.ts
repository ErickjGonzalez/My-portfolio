import { ExperienceItem } from "../types/experience.types";

export const useExperience = (): ExperienceItem[] => {
  const items: ExperienceItem[] = [
    {
      id: "edu1",
      title: "Software Engineering",
      subtitle: "Polytechnic University of Pachuca",
      period: "2022 - 2026",
      type: "education",
      description: [
        "Graduated (Degree in process)",
        "Proyect:  Developed a web system and an interconnected Android application using REST APIs and Retrofit (Kotlin/Java).",
        "Analytical and problem-solving skills applied to real-world scenarios.",
      ],
      technologies: ["Backend", "Mysql", "Frontend", "Android", "web"],
    },
    {
      id: "intern1",
      title: "Backend Developer (Intern)",
      subtitle: "UPLAPH",
      period: "Oct 2025 - Mar 2026",
      type: "internship",
      description: [
        " Developed a unified platform of components and tools in React for managing users, data, and services of the INEGI census system, improving operational efficiency.",
        "Developed and integrated APIs for communication between frontend and backend, ensuring an efficientand structured data flow with a 30% improvement.",
        "frequent updates and code reviews, following the Scrum methodology using Jira, ensuring code quality before integration and deployment.",
      ],
      technologies: [ "Laravel", "PostgreSQL", "Git", "Postman"],
    },
    {
      id: "project1",
      title: "Frontend Developer (Intern)",
      subtitle: "UPLAPH",
      period: "Oct 2025 - Mar 2026",
      type: "project",
      description: [
        " Redesigned views to improve visual experience and usability, and implemented validations and optimized logic to make sure records were efficient and consistent in the database.",
        "Optimized the performance of the data and presentation layers, achieving a 30% reduction in query latency and a 35% reduction in form rendering time.",
        
      ],
      technologies: ["React", "Node.js"],
      
    },
    {
      id: "cert1",
      title: "Full Stack Developer",
      subtitle: "Academic Project",
      period: "2025",
      type: "certification",
      description: [
        "Designed and implemented client-server communication, including user management, content administration, and data validation.",
        "Developed a web system and an interconnected Android application using REST APIs and Retrofit (Kotlin/Java).",
        "Enabled real-time data synchronization between mobile and web platforms.",
      ],
      technologies: ["Laravel", "Kotlin-java", "MySQL"],
    },
  ];
  return items;
};