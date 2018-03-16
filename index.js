import React, { createElement, Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styled, { keyframes } from 'styled-components'

const Svg = styled.svg`
  border-radius: 0;
  margin-top: -3px;
  position: relative;
  top: 2px;
  padding: 0;
  vertical-align: initial;
  min-height: initial;
`

const ButtonIcon = props => (
  <Svg
    height={16}
    viewBox='0 0 14 16'
    version='1.1'
    width={16}
    aria-hidden='true'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z'
    />
  </Svg>
)

const ClipboardWrapper = styled.div`
  position: relative;
  overflow: visible;
`

const tooltipAppear = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

const ClipboardButton = styled.button`
  color: #24292e;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);

  position: absolute;
  display: inline-block;
  right: 5px;
  top: 5px;
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

const CodeCopy = class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isHover: false,
      label: props.labels.copy
    }
  }

  render () {
    const { isHover, label } = this.state
    const { labels, codeComponent: CodeComponent } = this.props

    return (
      <ClipboardWrapper
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <CopyToClipboard
          text={this.props.children}
          onCopy={() => this.setState({ label: labels.copied })}
        >
          <ClipboardButton
            isHover={isHover}
            aria-label={label}
            onMouseLeave={() => this.setState({ label: labels.copy })}
          >
            <ButtonIcon />
          </ClipboardButton>
        </CopyToClipboard>
        <CodeComponent key={this.props.children} {...this.props} />
      </ClipboardWrapper>
    )
  }
}

CodeCopy.defaultProps = {
  labels: {
    copy: 'Copy to clipboard',
    copied: 'Copied!'
  }
}

export const createCodeCopy = CodeComponent => props =>
  createElement(CodeCopy, {
    codeComponent: CodeComponent,
    ...props
  })

export default CodeCopy
