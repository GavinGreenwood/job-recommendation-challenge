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

    const consoleErrorSpy = jest.spyOn(console, 'error') as jest.SpiedFunction<
      typeof console.error
    >;

    await recommendJobs();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching data:',
      mockError
    );

    consoleErrorSpy.mockRestore();
  });

  it('should log an error if fetchJobs fails', async () => {
    const mockError = new Error('fetchJobs failed');
    jest.mocked(fetchMembers).mockResolvedValue([]);
    jest.mocked(fetchJobs).mockRejectedValue(mockError);

    const consoleErrorSpy = jest.spyOn(console, 'error') as jest.SpiedFunction<
      typeof console.error
    >;

    await recommendJobs();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching data:',
      mockError
    );

    consoleErrorSpy.mockRestore();
  });

  it('should match user Joe to the job UX Designer in London', async () => {
    const mockMembers = [
      { name: 'Joe', bio: "I'm a designer from London, UK" },
    ];
    const mockJobs = [
      { title: 'Software Developer', location: 'London' },
      { title: 'Marketing Internship', location: 'York' },
      { title: 'Data Scientist', location: 'London' },
      { title: 'Legal Internship', location: 'London' },
      { title: 'Project Manager', location: 'Manchester' },
      { title: 'Sales Internship', location: 'London' },
      { title: 'UX Designer', location: 'London' },
      { title: 'Software Developer', location: 'Edinburgh' },
    ];

    jest.mocked(fetchMembers).mockResolvedValue(mockMembers);
    jest.mocked(fetchJobs).mockResolvedValue(mockJobs);

    const consoleLogSpy = jest.spyOn(console, 'log') as jest.SpiedFunction<
      typeof console.log
    >;

    await recommendJobs();

    expect(consoleLogSpy.mock.calls[0][0]).toBe('Recommended job(s) for Joe:');
    expect(consoleLogSpy.mock.calls[1][0]).toBe('- UX Designer in London');

    consoleLogSpy.mockRestore();
  });

  it('when no job is found, it should log "No recommended jobs for Joe"', async () => {
    const mockMembers = [
      { name: 'Joe', bio: "I'm a designer from London, UK" },
    ];
    const mockJobs = [
      { title: 'Software Developer', location: 'London' },
    ];

    jest.mocked(fetchMembers).mockResolvedValue(mockMembers);
    jest.mocked(fetchJobs).mockResolvedValue(mockJobs);

    const consoleLogSpy = jest.spyOn(console, 'log') as jest.SpiedFunction<
      typeof console.log
    >;

    await recommendJobs();

    expect(consoleLogSpy.mock.calls[0][0]).toBe('No recommended jobs for Joe');

    consoleLogSpy.mockRestore();
  });
});
