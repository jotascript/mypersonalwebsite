import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-flow: column;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 8px;

  h1 {
    margin-bottom: 8px;
  }

  .resume {
    color: var(--color-text);

    span {
      margin-top: 4px;
      color: var(--color-text-minor);
      font-size: 11px;
    }
  }
`
