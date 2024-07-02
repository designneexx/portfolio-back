import { Duration } from '../schemas/duration.schema';
export declare class CreateJobExperienceDto {
    jobTitle: string | null;
    companyName: string | null;
    jobDescription: string | null;
    jobDuration: Duration;
    companyLocation: string | null;
}
