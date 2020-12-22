import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-flow: column;
  padding: 16px;
  border: 1px solid var(--color-opacity-05);
  border-radius: 4px;
  margin-bottom: 8px;

  .post-info {
    color: var(--color-text-minor);
    margin-top: 8px;
    font-size: 12px;
  }
`
