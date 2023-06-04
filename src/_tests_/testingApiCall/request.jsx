const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({});
export  async function FetchData() {
    const data = await octokit.paginate(
      'https://api.github.com/search/users?q=SergeyHak',
      {
        per_page: 100,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );  
  }