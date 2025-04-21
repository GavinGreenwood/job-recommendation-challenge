import axios from 'axios';

export interface Member {
  name: string;
  bio: string;
}

export interface Job {
  title: string;
  location: string;
}

export async function fetchMembers(): Promise<Member[]> {
  // ToDo: should move this url to a config file
  const response = await axios.get<Member[]>('https://bn-hiring-challenge.fly.dev/members.json');
  return response.data;
}

export async function fetchJobs(): Promise<Job[]> {
 // ToDo: should move this url to a config file
  const response = await axios.get<Job[]>('https://bn-hiring-challenge.fly.dev/jobs.json');
  return response.data;
}