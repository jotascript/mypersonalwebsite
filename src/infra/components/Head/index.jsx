import PropTypes from 'prop-types'
import NextHead from 'next/head'

const Head = ({ title }) => (
  <NextHead>
    <title>{title}</title>
  </NextHead>
)

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
