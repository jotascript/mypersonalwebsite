import styled from 'styled-components'

/**
 * Return a stylized component
 *
 * @param {object} props - All component can receive props
 * @param {boolean} props.background
 *
 */
export default styled.div`
  ${({ background }) => !background
    ? ''
    : `
    border-radius: 4px;
    background-color: var(--color-opacity-05);
    padding: 16px;
  `};
  margin-bottom: 24px;

  h1, h2, h3 {
    margin-bottom: 24px;
  }

  hr {
    margin: 24px 16px;
    border-color: var(--color-opacity-05);
  }

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }

  > ul, ol {
    margin-left: 32px;
    margin-bottom: 16px;

    li {
      margin: 8px 0px;
    }

    ul, ol {
      margin-left: 16px;
      margin-bottom: unset;
    }
  }

  blockquote {
    border-left: 5px solid var(--color-opacity-15);
    background-color: var(--color-opacity-05);
    padding: 8px 16px;
    margin-bottom: 16px;

    p {
      margin-bottom: unset;
    }
  }

  code {
    background-color: var(--color-opacity-25);
    padding: 0px 4px;
  }

  img {
    margin-bottom: 16px;
    max-width: 300px;

  }

  img[alt="left"] {
    float: left;
    margin-right: 16px;
    margin-bottom: unset;
  }

  img[alt="right"] {
    float: right;
    margin-left: 16px;
    margin-bottom: unset;
  }

  pre {
    font-size: 13px;
    color: unset;
    padding: 16px;
    background-color: var(--color-opacity-05);
    border: 1px solid var(--color-opacity-15);
    border-radius: 4px;
    margin-bottom: 16px;

    code {
      background-color: unset;
      padding: unset;
    }
  }
`
