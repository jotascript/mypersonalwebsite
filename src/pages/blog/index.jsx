import PropTypes from 'prop-types'
import { format } from 'date-fns'

import Head from '../../infra/components/Head'

import { BlogGetAllPosts } from '../../lib'
import { GithubService } from '../../services'

import { Container } from '../../styles'
import { Header, BlogResumeCard } from '../../components'

const Blog = ({ githubInfos, postResumes }) => {
  return (
    <Container>
      <Head title="Blog" />
      <Header githubInfos={githubInfos}/>
      <Container>
        {
          Array.isArray(postResumes) && postResumes.map(resumeProps => (
            <BlogResumeCard
              key={`resume-${resumeProps.title}`}
              postResume={resumeProps}
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
  postResumes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      excerpt: PropTypes.string,
      date: PropTypes.string
    })
  )
}

Blog.defaultProps = {
  postResumes: []
}

export async function getStaticProps() {
  const githubInfos = await GithubService.myInfos()

  const allPosts = BlogGetAllPosts(['slug', 'title', 'excerpt', 'date'])
  const postResumes = allPosts.map(post => {
    post.date = format(new Date(post.date), 'dd MMMM yyyy')
    return post
  })

  return {
    props: {
      githubInfos,
      postResumes,
    }
  }
}

export default Blog
