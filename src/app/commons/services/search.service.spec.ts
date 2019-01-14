import { SearchService } from './search.service';

describe('CoursesListService', () => {
  let service: SearchService;

  beforeEach(() => {
    service = new SearchService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSearchQuery()', () => {
    it('should set seachQuerySourse and provide its value to subscribers', () => {
      const searchQueryMock = 'test';
      let searchQuery: string;
      const subscpiption = service.searchQuerySourse.subscribe(search => {
        searchQuery = search;
      });

      service.setSearchQuery(searchQueryMock);

      expect(searchQuery).toBe(searchQueryMock);

      subscpiption.unsubscribe();
    });
  });
});
