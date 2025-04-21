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
});