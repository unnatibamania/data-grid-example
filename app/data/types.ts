export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  joiningDate: Date;
  department: string;
  skills: string[];
  previousExperience: number;
  agreedToTerms: boolean;
  canWorkOnWeekends: boolean;
  avatarUrl?: string;
  [key: string]: string | number | boolean | string[] | Date | undefined;
}
