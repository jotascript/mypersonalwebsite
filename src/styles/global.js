import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  colors: {
    background: '#262626',
    primary: '#26F7FD',
    secondary: '#FF63E9',
    text: '#EEE',
    textMinor: '#c5c5c5',
    opacity05: 'rgba(255, 255, 255, 0.05)',
    opacity10: 'rgba(255, 255, 255, 0.10)',
    opacity15: 'rgba(255, 255, 255, 0.15)',
    opacity20: 'rgba(255, 255, 255, 0.20)',
    opacity25: 'rgba(255, 255, 255, 0.25)',
  },
}

export const lightTheme = {
  colors: {
    background: '#EEE',
    primary: '#3E82FC',
    secondary: '#FF63E9',
    text: '#262626',
    textMinor: '#949494',
    opacity05: 'rgba(0, 0, 0, 0.05)',
    opacity10: 'rgba(0, 0, 0, 0.10)',
    opacity15: 'rgba(0, 0, 0, 0.15)',
    opacity20: 'rgba(0, 0, 0, 0.20)',
    opacity25: 'rgba(0, 0, 0, 0.25)',
  },
}

export default createGlobalStyle`
  :root {
    ${({ theme: { colors } }) => `
    --color-primary: ${colors.primary};
    --color-alternative: ${colors.alternative};
    --color-secondary: ${colors.secondary};
    --color-background: ${colors.background};
    --color-text: ${colors.text};
    --color-text-minor: ${colors.textMinor};
    --color-opacity-05: ${colors.opacity05};
    --color-opacity-10: ${colors.opacity10};
    --color-opacity-15: ${colors.opacity15};
    --color-opacity-20: ${colors.opacity20};
    --color-opacity-25: ${colors.opacity25};
    `}
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-secondary);
    text-decoration: none;
  }
`
