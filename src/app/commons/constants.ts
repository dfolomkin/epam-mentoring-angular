import { ICourse } from './interfaces/course.interface';

export const coursesMock: ICourse[] = [
  {
    id: 1,
    title: 'Bitchip',
    description: 'Self-enabling full-range toolset',
    duration: 21,
    rating: 5,
    date: new Date('2018-12-31')
  },
  {
    id: 2,
    title: 'Bigtax',
    description: 'Expanded radical conglomeration',
    duration: 90,
    rating: 4.5,
    date: new Date('2019-01-05')
  },
  {
    id: 3,
    title: 'Solarbreeze',
    description: 'Self-enabling multimedia migration',
    duration: 92,
    rating: 4,
    date: new Date('2018-10-13')
  },
  {
    id: 4,
    title: 'Duobam',
    description: 'Realigned optimal utilisation',
    duration: 47,
    rating: 5,
    date: new Date('2018-10-13')
  },
  {
    id: 5,
    title: 'Redhold',
    description: 'Polarised dedicated installation',
    duration: 34,
    rating: 5,
    date: new Date('2019-06-26')
  },
  {
    id: 6,
    title: 'Bitchip',
    description: 'Right-sized incremental extranet',
    duration: 40,
    rating: 3.5,
    date: new Date('2018-07-21')
  },
  {
    id: 7,
    title: 'Opela',
    description: 'Automated solution-oriented encoding',
    duration: 63,
    rating: 5,
    date: new Date('2019-11-08')
  },
  {
    id: 8,
    title: 'Greenlam',
    description: 'Secured didactic monitoring',
    duration: 80,
    rating: 4,
    date: new Date('2018-11-09')
  },
  {
    id: 9,
    title: 'Tin',
    description: 'Seamless logistical utilisation',
    duration: 38,
    rating: 4.5,
    date: new Date('2018-04-13')
  },
  {
    id: 10,
    title: 'Domainer',
    description: 'Organic reciprocal projection',
    duration: 86,
    rating: 5,
    date: new Date('2018-10-29')
  }
];

export const getSequence: (length?: number) => string = (lenght = 7) =>
  Math.random()
    .toString(36)
    .substring(lenght);
