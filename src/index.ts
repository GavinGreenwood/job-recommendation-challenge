import { fetchMembers, fetchJobs, Member, Job } from './dataFetcher/dataFetcher';

export async function recommendJobs() {
  try {
    const members: Member[] = await fetchMembers();
    const jobs: Job[] = await fetchJobs();

    // Process the data as needed
    // console.log('Members:', members);
    // console.log('Jobs:', jobs);
  } catch (error) {
    // console.error('Error fetching data:', error);
  }
}

recommendJobs();