import styled from 'styled-components'

/**
 * Return a stylized component
 *
 * @param {object} props - All component can receive props
 * @param {boolean} props.row
 *
 */
export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};

  @media (max-width: 770px) {
    flex-direction: column;
  }
`
