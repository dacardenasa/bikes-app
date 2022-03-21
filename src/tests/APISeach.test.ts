import { fetchAPI } from '../services/api.search.service';
import { LOCATION_LIST } from '../constants/config';

describe('API search fetching data', () => {
  it('should fetch cases successfully', async () => {
    const response = await fetchAPI({ location: LOCATION_LIST.berlin });
    expect(response.length).toBeGreaterThan(0);
  });
  it('should fetch no resulst', async () => {
    jest.setTimeout(10000);
    const response = await fetchAPI({
      location: LOCATION_LIST.berlin,
      description: 'adasdasdadasd',
    });
    expect(response.length).toBeLessThanOrEqual(0);
  });
});
