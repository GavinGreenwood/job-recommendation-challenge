# Job Recommendation Challenge

## 📋 Overview
This project is a TypeScript-based solution to a coding challenge to build a simple job recommendation system. The goal is to match members to jobs based on a common `job_id` and print out their names along with the jobs they're matched to.

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

## 📝 Notes
- The solution is designed to be simple and straightforward, focusing on fetching and processing data efficiently within the given time constraints.
- **Unit Testing**: While the current implementation tests console logs as per the requirements, a preferred approach would be to separate the logic into a service layer. The service would handle all the business logic and be tested with type-safe unit tests. The console logger would then act as a presentation layer, which typically wouldn't be unit tested.
- **Data Handling**: Although the current implementation accepts the data as is, the `bio` field in the member data is written in natural language. Ideally, this would be passed through a large language model (LLM) to extract structured, type-safe data. Additionally, both the jobs and members could be wrapped in objects with controlled schemas. These schemas could include additional fields like `job_id` or `member_id`, which would make searching and matching much easier and more efficient. By controlling these fields, the system could ensure consistent data validation and enable more advanced querying capabilities.