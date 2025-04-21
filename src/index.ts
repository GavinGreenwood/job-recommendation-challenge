import {
  fetchMembers,
  fetchJobs,
  Member,
  Job,
} from './dataFetcher/dataFetcher';

export async function recommendJobs() {
  try {
    const members: Member[] = await fetchMembers();
    const jobs: Job[] = await fetchJobs();

    for (const member of members) {
      // Filter jobs where the location and title words are contained in the member's bio
      const recommendedJobs = jobs.filter((job) => {
        const jobTitleWords = job.title.split(' ');
        const bioLowerCase = member.bio.toLowerCase();

        // Check if location is contained in the bio
        const isLocationInBio = bioLowerCase.includes(
          job.location.toLowerCase()
        );

        // Check if any job title word is contained in the bio
        const isTitleInBio = jobTitleWords.some((word) =>
          bioLowerCase.includes(word.toLowerCase())
        );

        return isLocationInBio && isTitleInBio;
      });

      if (recommendedJobs.length > 0) {
        console.log(`Recommended job(s) for ${member.name}:`);
        recommendedJobs.forEach((job) =>
          console.log(`- ${job.title} in ${job.location}`)
        );
      } else {
        console.log(`No recommended jobs for ${member.name}`);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

recommendJobs();
