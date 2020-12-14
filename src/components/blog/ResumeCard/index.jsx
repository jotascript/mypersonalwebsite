import PropTypes from 'prop-types'
import Link from 'next/link'

import ResumeCardStyles from './styles'

const ResumeCard = ({ title, excerpt, date }) => (
  <ResumeCardStyles>
    <Link href="#">
      <a><h1>{title}</h1></a>
    </Link>
    <div className="resume">
      <div>{excerpt}</div>
      <span>{date}</span>
    </div>
  </ResumeCardStyles>
)

ResumeCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default ResumeCard
