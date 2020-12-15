import PropTypes from 'prop-types'

import PostStyles from './styles'

const Post = ({ post: { content, author, date } }) => (
  <PostStyles>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
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
