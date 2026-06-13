export type ExperienceType = "education" | "internship" | "project" | "certification";

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  type: ExperienceType;
  description: string[];
  technologies?: string[];
  link?: string;
}