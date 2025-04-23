# Job Recommendation Challenge

## 📋 Overview
This project is a TypeScript-based solution to a coding challenge to build a simple job recommendation system. The goal is to match members to jobs based on their bios and the job descriptions provided in JSON format. The solution is designed to be efficient and straightforward, focusing on fetching and processing data within a limited time frame.

## ⚙️ How It Works
- Fetches job and member data from the provided APIs:
  - `https://bn-hiring-challenge.fly.dev/members.json`
  - `https://bn-hiring-challenge.fly.dev/jobs.json`
- Matches members to jobs based on the provided data.
- Results are printed to the console showing the member's name and their recommended job(s).

## 🚀 Installation & Running

```bash
# Clone the repository
git clone <your_repo_url>
cd job-recommendation-challenge

# Install dependencies
npm install

# Run unit tests
npm test

# Run the recommendation script
npm start
```

## ✅ Test Results
The following are the results of the unit tests:

```bash
recommendJobs
    √ should call fetchMembers and fetchJobs (5 ms)
    √ should log an error if fetchMembers fails (18 ms)
    √ should log an error if fetchJobs fails (3 ms)
    √ should match user Joe to the job UX Designer in London (2 ms)
    √ when no job is found, it should log "No recommended jobs for Joe" (2 ms)
```

## 📊 Recommendation Script Output
Below is the output of running the recommendation script:

```bash
Recommended job(s) for Joe:
- UX Designer in London
Recommended job(s) for Marta:
- Legal Internship in London
- Sales Internship in London
No recommended jobs for Hassan
No recommended jobs for Grace
Recommended job(s) for Daisy:
- Software Developer in London
- Software Developer in Edinburgh
```

## 📝 Notes
- The solution is designed to be simple and straightforward, focusing on fetching and processing data efficiently within the given time constraints.
- **Unit Testing**: While the current implementation tests console logs as per the requirements, a preferred approach would be to separate the logic into a service layer. The service would handle all the business logic and be tested with type-safe unit tests. The console logger would then act as a presentation layer, which typically wouldn't be unit tested.
- **Data Handling**: Although the current implementation accepts the data as is, the `bio` field in the member data is written in natural language. Ideally, this would be passed through a large language model (LLM) to extract structured, type-safe data. Additionally, both the jobs, locations (*and exclude*) and members could be wrapped in objects with controlled schemas. These schemas could include additional fields like `job_id` or `member_id`, which would make searching and matching much easier and more efficient. By controlling these fields, the system could ensure consistent data validation and enable more advanced querying capabilities.