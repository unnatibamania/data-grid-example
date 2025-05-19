export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  joiningDate: string;
  department: string;
  skills: string[];
  previousExperience: number;
  agreedToTerms: boolean;
  canWorkOnWeekends: boolean;
}
