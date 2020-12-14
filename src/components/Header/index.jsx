import PropTypes from 'prop-types'

import HeaderComponentStyles from './styles'

const Header = ({ githubInfos }) => (
  <HeaderComponentStyles>
    <div>
      <img
        className="avatar"
        src={githubInfos.avatar_url}
        alt={githubInfos.name}
      />
    </div>
    <div>
      <div className="name">{githubInfos.name}</div>
      <span>{githubInfos.bio}</span>
    </div>
  </HeaderComponentStyles>
)

Header.propTypes = {
  githubInfos: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string
  })
}

export default Header
