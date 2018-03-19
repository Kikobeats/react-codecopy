import styled, { keyframes } from 'styled-components'

const tooltipAppear = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

export default styled.button`
  color: #24292e;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);

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
  border: 1px solid rgba(27, 31, 35, 0.2);
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
    background-color: rgb(230, 235, 241);
    background-image: linear-gradient(
      -180deg,
      rgb(240, 243, 246) 0%,
      rgb(230, 235, 241) 90%
    );
    background-position: 0px -0.5em;
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: none;
  }

  &:active {
    background-color: rgb(233, 236, 239);
    background-image: none;
    box-shadow: none;
    border-color: rgba(27, 31, 35, 0.35);
  }

  &::before {
    position: absolute;
    z-index: 1000001;
    display: none;
    width: 0;
    height: 0;
    color: #1b1f23;
    pointer-events: none;
    content: '';
    border: 6px solid transparent;
    opacity: 0;
    top: auto;
    right: 50%;
    bottom: -7px;
    margin-right: -6px;
    border-bottom-color: #1b1f23;
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
    color: #fff;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: break-word;
    white-space: pre;
    pointer-events: none;
    content: attr(aria-label);
    background: #1b1f23;
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
`
