import styled, { css, keyframes } from 'styled-components'

const tooltipAppear = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

export default styled.button`
  ${({ theme: { button, tooltip } }) => css`
    color: ${button.color};
    background-color: ${button.bg};
    background-image: ${button.gradient};

    position: absolute;
    display: inline-block;
    right: 6px;
    top: 6px;
    padding: 3px 6px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-repeat: repeat-x;
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: ${button.border};
    border-radius: 0.25em;

    box-shadow: none;
    min-height: initial;
    transition: opacity 0.3s ease-in-out;
    opacity: ${props => (props.isHover ? '1' : '0')};
    z-index: 1;

    &:focus {
      outline: 0;
    }

    &:hover {
      background-color: ${button.hover.bg};
      background-image: ${button.hover.gradient};
      background-position: 0px -0.5em;
      border-color: ${button.hover.border};
      box-shadow: none;
    }

    &:active {
      background-color: ${button.active.bg};
      background-image: none;
      box-shadow: none;
      border-color: ${button.active.border};
    }

    &::before {
      position: absolute;
      z-index: 1000001;
      display: none;
      width: 0;
      height: 0;
      color: ${tooltip.bg};
      pointer-events: none;
      content: '';
      border: 6px solid transparent;
      opacity: 0;
      top: auto;
      right: 50%;
      bottom: -7px;
      margin-right: -6px;
      border-bottom-color: ${tooltip.bg};
    }

    &::after {
      position: absolute;
      z-index: 1000000;
      display: none;
      padding: 0.5em 0.75em;
      font: normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      -webkit-font-smoothing: subpixel-antialiased;
      color: ${tooltip.color};
      text-align: center;
      text-decoration: none;
      text-shadow: none;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: break-word;
      white-space: pre;
      pointer-events: none;
      content: attr(aria-label);
      background: ${tooltip.bg};
      border-radius: 3px;
      opacity: 0;
      top: 100%;
      right: 50%;
      margin-top: 6px;
      transform: translateX(50%);
    }

    &:hover::after,
    &:hover::before {
      display: inline-block;
      text-decoration: none;
      animation-name: ${tooltipAppear};
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      animation-delay: 0.4s;
    }
  `};
`
