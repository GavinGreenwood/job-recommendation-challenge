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

# Run the recommendation script
npm start
```

## 📝 Notes
- Ensure that the folder name matches the repository name after cloning. If the repository name is different, adjust the `cd` command accordingly.
- The solution is designed to be simple and straightforward, focusing on fetching and processing data efficiently within the given time constraints.
- The matching logic is based on the structure of the data provided by the APIs.
- This implementation is not exhaustive and can be extended or optimized further as needed.