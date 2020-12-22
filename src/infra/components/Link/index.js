import PropTypes from 'prop-types'
import NextLink from 'next/link'

const Link = ({ href, children }) => (
  <NextLink href={href}>
    {children}
  </NextLink>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Link
