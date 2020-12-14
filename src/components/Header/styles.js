import styled from 'styled-components'

export default styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 16px;

  div {
    padding: 16px;
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

  @media (min-width: 300px) {
    .name {
      font-size: 16px;
    }

    span {
      font-size: 11px;
    }

    .avatar {
      width: 50px;
      height: 50px;
    }
  }

  @media (min-width: 400px) {
    .name {
      font-size: 18px;
    }

    .avatar {
      width: 65px;
      height: 65px;
    }
  }

  @media (min-width: 700px) {
    .name {
      font-size: 26px;
    }

    span {
      font-size: 16px;
    }

    .avatar {
      width: 105px;
      height: 105px;
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
      width: 150px;
      height: 150px;
    }
  }
`
