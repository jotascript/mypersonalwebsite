import PropTypes from 'prop-types'

import Head from '../../infra/components/Head'

import { GithubService } from '../../services'

import { Container } from '../../styles'
import { Header, BlogResumeCard } from '../../components'

const Blog = ({ githubInfos, resumePosts }) => {
  return (
    <Container>
      <Head title="Blog" />
      <Header githubInfos={githubInfos}/>
      <Container>
        {
          Array.isArray(resumePosts) && resumePosts.map(resumePostProps => (
            <BlogResumeCard
              key={`resume-${resumePostProps.title}`}
              {...resumePostProps}
            />
          ))
        }
      </Container>
    </Container>
  )
}

Blog.propTypes = {
  githubInfos: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string
  }),
  resumePosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.string
    })
  )
}

Blog.defaultProps = {
  resumePosts: []
}

export async function getStaticProps() {
  const githubInfos = await GithubService.myInfos()

  const resumePosts = [
    {
      title: 'Primeiro post',
      excerpt: 'Este é o primeiro post do blog',
      date: '12/12/2020'
    }
  ]

  return {
    props: {
      githubInfos,
      resumePosts,
    }
  }
}

export default Blog
