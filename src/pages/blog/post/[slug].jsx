import PropTypes from 'prop-types'
import { BlogGetAllPosts, BlogGetPostBySlug, markdownToHtml } from '../../../lib'
import { GithubService } from '../../../services'

import Head from '../../../infra/components/Head'
import { Header, BlogPost } from '../../../components'
import { Container } from '../../../styles'

const Post = ({ githubInfos, post }) => {
  return (
    <Container>
      <Head title={`${post.title} | Blog`} />
      <Header githubInfos={githubInfos} />
      <BlogPost post={post} />
    </Container>
  )
}

Post.propTypes = {
  githubInfos: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
}

export default Post

export async function getStaticProps({ params }) {
  const githubInfos = await GithubService.myInfos()

  const post = BlogGetPostBySlug(params.slug, ['title', 'author', 'date', 'content'], { date: 'formatted' })
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      githubInfos,
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = BlogGetAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
