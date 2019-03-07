export enum DataChunkSize {
  chunk30 = 30,
  chunk60 = 60
}

export const dataChunkSizes: DataChunkSize[] = Object.values(
  DataChunkSize
).filter(item => !isNaN(item));

export interface ICoursesControls {
  filterQuery: string;
  searchQuery: string;
  dataChunkSize: DataChunkSize;
  dataCount: number;
}
