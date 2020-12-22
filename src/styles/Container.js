import styled from 'styled-components'

/**
 * Return a stylized component
 *
 * @param {object} props - All component can receive props
 * @param {boolean} props.background
 * @param {boolean} props.marginLeft
 *
 */
export default styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 1024px;
  background-color: ${({ background }) => background ? 'var(--color-opacity-05)' : 'transparent'};
  border-radius: 4px;

  > header {
    color: var(--color-primary);
    padding: 4px 8px;
    margin: 4px;
    font-size: 18px;

    &.secondary {
      color: var(--color-secondary);
    }
  }

  ${({ marginLeft }) => !marginLeft ? '' : `margin-left: ${marginLeft === '' ? '8px' : marginLeft}px`};
  ${({ marginRight }) => !marginRight ? '' : `margin-right: ${marginRight === '' ? '8px' : marginRight}px`};
  ${({ marginTop }) => !marginTop ? '' : `margin-top: ${marginTop === '' ? '8px' : marginTop}px`};
  ${({ marginBottom }) => !marginBottom ? '' : `margin-bottom: ${marginBottom === '' ? '8px' : marginBottom}px`};

  @media (min-width: 770px) {
    ${({ responsiveMarginLeft }) => !responsiveMarginLeft ? '' : `margin-left: ${responsiveMarginLeft === '' ? '8px' : responsiveMarginLeft}px`};
    ${({ responsiveMarginRight }) => !responsiveMarginRight ? '' : `margin-right: ${responsiveMarginRight === '' ? '8px' : responsiveMarginRight}px`};
    ${({ responsiveMarginTop }) => !responsiveMarginTop ? '' : `margin-top: ${responsiveMarginTop === '' ? '8px' : responsiveMarginTop}px`};
    ${({ responsiveMarginBottom }) => !responsiveMarginBottom ? '' : `margin-bottom: ${responsiveMarginBottom === '' ? '8px' : responsiveMarginBottom}px`};
  }

`
