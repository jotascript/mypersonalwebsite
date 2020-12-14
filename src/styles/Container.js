import styled from 'styled-components'

/**
 * Return a stylized component
 *
 * @param {object} props - All component can receive props
 * @param {boolean} props.background
 *
 */
export default styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1024px;
  background-color: ${({ background }) => background ? 'var(--color-opacity-05)' : 'transparent'};
  border-radius: 4px;

  @media (min-width: 1025px) {
    margin-top: 32px;
  }
`
