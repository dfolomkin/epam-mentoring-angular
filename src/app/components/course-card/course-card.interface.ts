export interface ICourseCard {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

export class CourseCard implements ICourseCard {
  public id: number;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;

  constructor() {}
}

export class User implements IUser {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor() {}
}
