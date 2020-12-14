import {
  getAllPosts as BlogGetAllPosts,
  getPostBySlug as BlogGetPostBySlug
} from './postAPI'
import markdownToHtml from './markdownToHtml'

export { BlogGetAllPosts, BlogGetPostBySlug, markdownToHtml }
