import { PortfolioDocument } from '../schemas/portfolio.schema';

export function getPortfolioModel(model: PortfolioDocument) {
  return {
    createdAt: Reflect.get(model, 'createdAt'),
    id: model.id,
    userId: model.userId,
    aboutMe: model.aboutMe,
    resumeUrl: model.resumeUrl,
    avatarPath: model.avatarPath,
    firstName: model.firstName,
    surname: model.surname,
    patronymic: model.patronymic,
    fullName: model.fullName,
    mainDegreeOfQualification: model.mainDegreeOfQualification,
    profession: model.profession,
    city: model.city,
    citizenship: model.citizenship,
    phone: model.phone,
    email: model.email,
    personLocation: model.personLocation,
    educationList: model.educationList.map((item) => ({
      degreeOfEducation: item.degreeOfEducation,
      educationalInstitution: item.educationalInstitution,
      educationDepartment: item.educationDepartment,
      educationDuration: {
        start: item.educationDuration.start,
        end: item.educationDuration.end,
      },
      educationFaculty: item.educationFaculty,
      id: Reflect.get(item, '_id'),
    })),
    skillList: model.skillList.map((item) => ({
      id: Reflect.get(item, '_id'),
      skillDescription: item.skillDescription,
      skillLevel: item.skillLevel,
      skillName: item.skillName,
    })),
    projectExperienceList: model.projectExperienceList.map((item) => ({
      id: Reflect.get(item, '_id'),
      projectDescription: item.projectDescription,
      projectName: item.projectName,
    })),
    jobExperienceList: model.jobExperienceList.map((item) => ({
      companyLocation: item.companyLocation,
      companyName: item.companyName,
      id: Reflect.get(item, '_id'),
      jobDescription: item.jobDescription,
      jobDuration: {
        start: item.jobDuration.start,
        end: item.jobDuration.end,
      },
      jobTitle: item.jobTitle,
    })),
    knowledgeOfLanguageList: model.knowledgeOfLanguageList.map((item) => ({
      id: Reflect.get(item, '_id'),
      isNativeLanguage: item.isNativeLanugage,
      language: item.language,
      languageDegree: item.languageDegree,
    })),
    testsOfExamsOrTraining: model.testsOfExamsOrTraining.map((item) => ({
      description: item.description,
      duration: {
        start: item.duration.start,
        end: item.duration.end,
      },
      id: Reflect.get(item, '_id'),
      title: item.title,
    })),
  };
}
