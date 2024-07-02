export interface PortfolioServiceResponse {
    portfolio: PortfolioStructureResonse;
    avatarPath: string;
    resumeUrl: string;
}
export interface PortfolioStructureResonse extends PortfolioStructure {
    resumeFileName: string;
}
export interface Duration {
    start: string;
    end: string;
}
export interface PortfolioStructure {
    citizenship: string;
    city: string;
    firstName: string;
    profession: string;
    surname: string;
    patronymic: string;
    fullName: string;
    email: string;
    phone: string;
    aboutMe: string;
    personLocation: string;
    mainDegreeOfQualification: string;
    knowledgeOfLanguageList: KnowledgeOfLanguageList[];
    jobExperienceList: JobExperienceList[];
    projectExperienceList: ProjectExperienceList[];
    educationList: EducationList[];
    skillList: SkillList[];
    testsOfExamsOrTraining: AdvancedTraining[];
}
export interface AdvancedTraining {
    description: string;
    duration: Duration;
    title: string;
}
export interface KnowledgeOfLanguageList {
    language: string;
    languageDegree: string;
    isNativeLanugage: boolean;
}
export interface JobExperienceList {
    jobTitle: string;
    jobDescription: string;
    companyName: string;
    jobDuration: Duration;
    companyLocation: string;
}
export interface ProjectExperienceList {
    projectName: string;
    projectDescription: string;
}
export interface EducationList {
    degreeOfEducation: string;
    educationalInstitution: string;
    educationDuration: Duration;
    educationFaculty: string;
    educationDepartment: string;
}
export interface SkillList {
    skillName: string;
    skillLevel: string;
    skillDescription: string;
}
