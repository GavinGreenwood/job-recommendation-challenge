import { fetchMembers, fetchJobs } from './dataFetcher/dataFetcher';
import { jest } from '@jest/globals';
import { recommendJobs } from './index';

jest.mock('./dataFetcher/dataFetcher', () => ({
  fetchMembers: jest.fn(),
  fetchJobs: jest.fn(),
}));


describe('recommendJobs', () => {
 it('should call fetchMembers and fetchJobs', async () => {
   const mockMembers = [{ name: 'Joe', bio: 'Designer' }];
   const mockJobs = [{ title: 'UX Designer', location: 'London' }];

   jest.mocked(fetchMembers).mockResolvedValue(mockMembers);
   jest.mocked(fetchJobs).mockResolvedValue(mockJobs);

   await recommendJobs();

   expect(fetchMembers).toHaveBeenCalled();
   expect(fetchJobs).toHaveBeenCalled();
 });

 it('should log an error if fetchMembers fails', async () => {
  const mockError = new Error('fetchMembers failed');
  jest.mocked(fetchMembers).mockRejectedValue(mockError);
  jest.mocked(fetchJobs).mockResolvedValue([]);

  const consoleErrorSpy = jest.spyOn(console, 'error') as jest.SpiedFunction<typeof console.error>;

  await recommendJobs();

  expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', mockError);

  consoleErrorSpy.mockRestore();
});

it('should log an error if fetchJobs fails', async () => {
  const mockError = new Error('fetchJobs failed');
  jest.mocked(fetchMembers).mockResolvedValue([]);
  jest.mocked(fetchJobs).mockRejectedValue(mockError);

  const consoleErrorSpy = jest.spyOn(console, 'error') as jest.SpiedFunction<typeof console.error>;

  await recommendJobs();

  expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', mockError);

  consoleErrorSpy.mockRestore();
});
});