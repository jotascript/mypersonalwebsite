import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 16px;
  margin: 24px 0px;

  > div {
    padding: 16px;
  }

  .flex-1 {
    flex: 1;
  }

  .name {
    padding: 0px;
    color: var(--color-primary);
    font-weight: 900;
  }

  span {
    color: var(--color-text-minor);
  }

  .avatar {
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
  }

  @media (max-width: 770px) {
    margin: unset;
    padding: 4px;

    > div {
      padding: 8px;
    }
  }

  @media (min-width: 200px) {
    .name {
      font-size: 16px;
    }

    span {
      font-size: 11px;
    }

    .avatar {
      width: 36px;
      height: 36px;
    }
  }

  @media (min-width: 375px) {
    .name {
      font-size: 18px;
    }

    .avatar {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 768px) {
    padding: 8px;

    > div {
      padding: 8px;
    }

    .name {
      font-size: 26px;
    }

    span {
      font-size: 16px;
    }

    .avatar {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 900px) {
    .name {
      font-size: 38px;
    }

    span {
      font-size: 18px;
    }

    .avatar {
      width: 160px;
      height: 160px;
    }
  }
`
