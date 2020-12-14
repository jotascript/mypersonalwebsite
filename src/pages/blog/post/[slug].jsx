import { BlogGetAllPosts, BlogGetPostBySlug, markdownToHtml } from '../../../lib'

const Post = ({ post }) => {
  console.log(post)
  return null
}

export default Post

export async function getStaticProps({ params }) {
  const post = BlogGetPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
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
