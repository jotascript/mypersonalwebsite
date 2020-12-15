import styled from 'styled-components'

export default styled.article`
  display: flex;
  flex-flow: column;
  padding: 16px;
  border: 1px solid var(--color-opacity-05);
  border-radius: 4px;
  margin-bottom: 8px;

  .content {
    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 24px;
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
  }

  .post-info {
    color: var(--color-text-minor);
    margin-top: 8px;
    font-size: 12px;
  }
`
