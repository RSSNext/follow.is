'use server'

export async function getGithubStar(username: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}`)

  const data = await response.json()
  if (data && typeof data.stargazers_count === 'number') {
    return data.stargazers_count
  }
  return 0
}
