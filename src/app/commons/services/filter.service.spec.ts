import { FilterService } from './filter.service';

describe('CoursesService', () => {
  let service: FilterService;

  beforeEach(() => {
    service = new FilterService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getFilterQuery()', () => {
    it('should set filterQuerySourse and provide its value to subscribers', () => {
      const filterQueryMock = 'test';
      let filterQuery: string;
      const subscpiption = service.filterQuerySourse.subscribe(query => {
        filterQuery = query;
      });

      service.setFilterQuery(filterQueryMock);

      expect(filterQuery).toBe(filterQueryMock);

      subscpiption.unsubscribe();
    });
  });
});
