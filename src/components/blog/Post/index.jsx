import PropTypes from 'prop-types'

import { MarkdownToHtml } from '../../../styles'

import PostStyles from './styles'

const Post = ({ post: { content, author, date } }) => (
  <PostStyles>
    <MarkdownToHtml dangerouslySetInnerHTML={{ __html: content }} />
    <div className="post-info">Author: {author} | Date: { date }</div>
  </PostStyles>
)

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
}

export default Post
