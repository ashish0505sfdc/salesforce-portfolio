export interface MetricCardData {
  id: string;
  value: string;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
  iconName: string;
}

export interface PillarData {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  businessImpact: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  location: string;
  isCurrent?: boolean;
  highlightSummary: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  techStack: string[];
}

export type CertCategory = 'all' | 'architect' | 'developer' | 'ai-data';

export interface CertificationItem {
  id: string;
  title: string;
  code: string;
  category: CertCategory;
  level: 'System Architect' | 'Domain Architect' | 'Specialist' | 'Associate' | 'Consultant' | 'Developer' | 'Admin';
  credentialId: string;
  issuedDate: string;
  verificationUrl: string;
  badgeColor: string;
  description: string;
  skillsValidated: string[];
}

export type SkillCategory = 'clouds' | 'architecture' | 'development' | 'integration' | 'devops';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  proficiency: number; // 0 to 100
  yearsOfExp: number;
  highlightBadge?: string;
  description: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  category: string;
  language: 'apex' | 'javascript' | 'json';
  summary: string;
  architecturalWhy: string;
  governorLimitSafeguards: string;
  code: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
