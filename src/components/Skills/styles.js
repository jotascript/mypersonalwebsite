import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    width: 100%;
    margin-bottom: 24px;
    flex-direction: row;
  }

  .topic {
    color: var(--color-primary);
    padding: 4px 8px;
    margin: 4px;
    font-size: 18px;

    @media (max-width: 770px) {
      display: flex;
      align-self: center;
      justify-content: center;
      font-size: unset;
      padding: 2px;
      writing-mode: vertical-rl;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;

    @media (max-width: 770px) {
      flex-direction: row;
      overflow-x: auto;
    }

    .skill {
      min-width: 250px;
      width: 250px;
      color: var(--color-text);
      background-color: var(--color-opacity-05);
      padding: 8px;
      border-radius: 4px;
      margin: 4px;

      @media (min-width: 770px) {
        &:first-child {
          margin-top: unset;
        }
      }

      .name {
        font-size: 14px;
        margin: 4px 0px;
      }

      .levels {
        display: flex;
        align-items: center;
        justify-content: center;

        .level {
          flex: 1;
          height: 4px;
          background-color: var(--color-opacity-20);
          margin: 0px 2px;
          transition: .3s;

          &-high {
            background-color: var(--color-secondary);
          }

          &:first-child {
            margin-left: 0px;
            margin-right: 2px;
          }

          &:last-child {
            margin-left: 2px;
            margin-right: 0px;
          }
        }
      }
    }
  }

`
