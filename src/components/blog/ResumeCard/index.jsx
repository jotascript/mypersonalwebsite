import PropTypes from 'prop-types'
import { Link } from '../../../infra/components'

import ResumeCardStyles from './styles'

const ResumeCard = ({ postResume: { slug, title, excerpt, author, date } }) => (
  <ResumeCardStyles>
    <Link href={`/blog/post/${slug}`}>
      <a><h1>{title}</h1></a>
    </Link>
    <div className="resume">
      <div>{excerpt}</div>
      <span>{author} | {date}</span>
    </div>
  </ResumeCardStyles>
)

ResumeCard.propTypes = {
  postResume: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}

export default ResumeCard
