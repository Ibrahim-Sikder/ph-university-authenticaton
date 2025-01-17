export interface TUser {
  id: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
//   passwordChangedAt?: Date;
  role: 'superAdmin' | 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}


  
  export type NewUser = {
    password: string,
    role:string,
    id:string
  }
  