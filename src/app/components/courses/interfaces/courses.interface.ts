export interface ICourse {
  id: number;
  title: string;
  description: string;
  author: string;
  date: Date;
  duration: number;
  rating: number;
}

export interface ICoursesState {
  list: ICourse[];
  serverCount: number;
}

export interface IGetCoursesParams {
  searchQuery: string;
  startFrom: number;
  dataCount: number;
}
