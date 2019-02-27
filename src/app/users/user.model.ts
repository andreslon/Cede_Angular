export interface UserBaseModel {
  userId: string;
  name: string;
  lastName: string;
  nit: string;
  nitType: number;
  nitDate: Date;
  contract?: any;
  birthDay: Date;
  userStatus: number;
  genre: number;
  email?: any;
  appointments?: any;
} 
