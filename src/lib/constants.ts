// src/lib/constants.ts

export const SITE_CONFIG = {
  name: "Erick Gonzalez",
  title: "Software Engineer -- Fullstack",
  description: "WIth experience in the government sector. Worked on Frontend and Backend development at UPLAPH, Focused on building robust, scalable solutions with expertise in system integration and performance optimization.",
  email: "alfonso@dev.com",
  github: "https://github.com/ErickjGonzalez",
  linkedin: "https://www.linkedin.com/in/erick-jesus-alvarado-gonz%C3%A1lez-8189043b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgJRA99fzRaqmZwk2KxVmcw%3D%3D",
  cvUrl: "Cv_ErickAlvarado_IngSoftware_EN.pdf", 
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },        
 { label: "Proyects", href: "#projects" }, 
  { label: "Skills", href: "#skills" }, 
  { label: "Experience", href: "#experience" }, 
   { label: "About me", href: "#about" },     
];
export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string; 
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "SIRRA Simulator",
    shortDescription: "Web simulator based on AI principles.",
    description:
      "Uses the UCB algorithm, which is part of a branch of AI called reinforcement learning. This system learns from past choices to help you make better decisions when choosing a restaurant.",
    image: "/images/projects/SIRRA.png",
    technologies: ["Laravel", "php", "Tailwind", "Machine Learning"],
    githubUrl: "https://github.com/ErickjGonzalez/IA",
    liveUrl: "https://web-production-5d08f.up.railway.app/",
  },
  {
    id: 2,
   name: "Censuses BackEnd",
    shortDescription: "Web system for managing census data and geographic statistics – backend part.",
    description:
      "built with Laravel, this system handles the storage, processing, and management of census data and geographic statistics, providing a solid and reliable API for the frontend to consume.",
    image: "/images/projects/backend.jpg",
    technologies: ["Laravel", "Postgree", "API REST"],
    githubUrl: "https://github.com/ErickjGonzalez/Censo-Backend",
    
  },
  {
    id: 3,
    name: "Censuses FrontEnd",
    shortDescription: "Web system for managing census data and geographic statistics – frontend part.",
    description:
      "built with React, this is the visual side of the system where users can view, manage and interact with census data and geographic statistics in a clean and easy-to-use interface.",
    image: "/images/projects/frontend.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Axios"],
    githubUrl: "https://github.com/ErickjGonzalez/Censo-FrontEnd",
    liveUrl: "https://censo-front-end.vercel.app/",
  },

  {
    id: 4,
   name: "UPPDATE",
    shortDescription: "Web-based system for the administrative management of a university.",
    description:
       "This system allows directors, teachers and staff to manage and update all the general information of the university, from academic data to institutional information, all in one place. Demo credentials — Admin: admin@upp.com / password123 | Staff: ana@rectorado.edu / password123 | Director: mayraa.directora@upp.edu.mx / password123, comunicacion@gmail.com, Password123",
    image: "/images/projects/UppD.png",
    technologies: ["Laravel", "Mysql", "API REST", "Tailwind"],
    githubUrl: "https://github.com/ErickjGonzalez/UPPDATE",
    liveUrl: "https://erickglez.nfy.fyi/login"
  },
{
  id: 5,
    name: "UPPDATE for Android",
    shortDescription: "Android app for university applicants.",
    description:
      "his app lets students who want to apply to the university browse all the information they need, such as available careers, scholarships, and general information about the university, all pulled directly from the web system in real time.",
    image: "/images/projects/UPPDATE2.png",
    technologies: ["Android(kotlin/java)", "Retrofit", "Jetpack Compose"],
    githubUrl: "https://github.com/ErickjGonzalez/UPPDATE-android-version",
   
  },

  {
  id: 6,
    name: "Vehicle Registration System" ,
    shortDescription: "Vehicle Registration System with Web Services",
    description:
      "this system allows you to register and manage students, directors and teachers, as well as their vehicles. You can add, edit, delete and search for records easily. It also includes a map feature where you can look up the address of any user or vehicle directly on the page.",
    image: "/images/projects/Regist.png",
    technologies: ["VB", "C#", "Web service", "Sql server", "ASP .net"],
    githubUrl: "https://github.com/ErickjGonzalez/Registro-vehicular-con-web-services",
    liveUrl: "http://registrovehicularconws.runasp.net/",
  },
];