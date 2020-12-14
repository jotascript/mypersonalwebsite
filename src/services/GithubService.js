import axios from 'axios'

class GithubService {
  static async myInfos() {
    const { data } = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}`)
    return data
  }
}

export default GithubService
