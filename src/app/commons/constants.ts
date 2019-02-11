export const getSequence: (length?: number) => string = (lenght = 7) =>
  Math.random()
    .toString(36)
    .substring(lenght);

export const ROUTES_MAP = {
  courses: 'courses',
  newId: 'new',
  auth: 'auth'
};

export const NO_DATA_PLACEHOLDER = 'No data. Feel free to add new one.';

export const DATA_COUNT_OPTIONS: number[] = [30, 60];

const PORT = 3000;

export const BACK_URL = `http://localhost:${PORT}/api`;
