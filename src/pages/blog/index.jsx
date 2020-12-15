import PropTypes from 'prop-types'

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
  githubInfos: PropTypes.object.isRequired,
  postResumes: PropTypes.object.isRequired
}

Blog.defaultProps = {
  postResumes: []
}

export async function getStaticProps() {
  const githubInfos = await GithubService.myInfos()

  const postResumes = BlogGetAllPosts(['slug', 'title', 'excerpt', 'date'], {
    date: 'formatted',
  })

  return {
    props: {
      githubInfos,
      postResumes,
    }
  }
}

export default Blog
