import { getDevClass } from "./class.js"

export async function getGithubData(username) {
  const query = {
    query: `
      query($login:String!) {
        user(login:$login) {
          avatarUrl
          createdAt
          followers { totalCount }
          following { totalCount }
          repositories(first:100, ownerAffiliations: OWNER) {
            totalCount
            nodes {
              isFork
              stargazerCount
              languages(first:10, orderBy:{field:SIZE,direction:DESC}) {
                edges {
                  size
                  node { name }
                }
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history { totalCount }
                  }
                }
              }
            }
          }
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `,
    variables: { login: username }
  }

  const githubRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(query)
  })

  return await githubRes.json()
}

// ESTA É A NOVA FUNÇÃO QUE CONCENTRA A LÓGICA
export async function getUserStats(username) {
  const githubData = await getGithubData(username)
  const user = githubData.data?.user

  if (!user) {
    throw new Error("USER_NOT_FOUND")
  }

  // --- Lógica de Idade ---
  const createdAt = new Date(user.createdAt)
  const now = new Date()
  let ageYears = now.getFullYear() - createdAt.getFullYear()
  const monthDiff = now.getMonth() - createdAt.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < createdAt.getDate())) {
    ageYears--
  }

  // --- Processamento de Repositórios ---
  let languageCount = {}
  let totalCommits = 0
  let totalStars = 0

  user.repositories.nodes.forEach(repo => {
    if (repo.isFork) return
    totalStars += repo.stargazerCount
    if (repo.defaultBranchRef?.target?.history?.totalCount) {
      totalCommits += repo.defaultBranchRef.target.history.totalCount
    }
    repo.languages.edges.forEach(lang => {
      languageCount[lang.node.name] = (languageCount[lang.node.name] || 0) + lang.size
    })
  })

  const topLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(l => l[0])

  const dev = getDevClass(topLanguages)

  // --- Cálculo de RPG ---
  const score =
    user.contributionsCollection.totalCommitContributions +
    user.repositories.totalCount * 3 +
    Math.sqrt(user.followers.totalCount * 5) * 20 +
    Math.sqrt(totalStars) * 2

  const level = Math.floor(score / 50)
  const xp = Math.floor(score % 50)

  let tier = "Bronze"
  if (level >= 80) tier = "Legendary"
  else if (level >= 40) tier = "Diamond"
  else if (level >= 20) tier = "Platinum"
  else if (level >= 10) tier = "Gold"
  else if (level >= 5) tier = "Silver"

  return {
    user: username,
    avatar: user.avatarUrl,
    age: ageYears,
    rpg: {
      level,
      xp,
      tier,
      devClass: dev.classe,
      subclass: dev.subclass,
      guild: dev.guild
    },
    stats: {
      repos: user.repositories.totalCount,
      commits: user.contributionsCollection.totalCommitContributions,
      stars: totalStars,
      followers: user.followers.totalCount,
      following: user.following.totalCount
    },
    top_languages: topLanguages
  }
}
