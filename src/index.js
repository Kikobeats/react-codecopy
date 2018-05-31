import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styled, { ThemeProvider, css } from 'styled-components'

import ClipboardButton from './button'
import ClipboardIcon from './icon'
import getTheme from './theme'

const svgStyle = ({ theme }) => css`
  border-radius: 0;
  margin-top: -3px;
  position: relative;
  top: 2px;
  padding: 0;
  vertical-align: initial;
  min-height: initial;
  ${theme === 'dark' && `fill: white;`};
`

const createClipboardIcon = ({ theme, iconComponent }) =>
  styled(iconComponent)`
    ${svgStyle({ theme })};
  `

const ClipboardWrapper = styled.div`
  position: relative;
  overflow: visible;
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
    const { labels, theme, children, text, ...props } = this.props
    const IconComponent = createClipboardIcon(this.props)

    return (
      <ThemeProvider theme={getTheme(theme)}>
        <ClipboardWrapper
          onMouseEnter={() => this.setState({ isHover: true })}
          onMouseLeave={() => this.setState({ isHover: false })}
        >
          <CopyToClipboard
            text={text}
            onCopy={() => this.setState({ label: labels.copied })}
          >
            <ClipboardButton
              isHover={isHover}
              aria-label={label}
              onMouseLeave={() => this.setState({ label: labels.copy })}
              {...props}
            >
              <IconComponent />
            </ClipboardButton>
          </CopyToClipboard>
          {children}
        </ClipboardWrapper>
      </ThemeProvider>
    )
  }
}

CodeCopy.defaultProps = {
  iconComponent: ClipboardIcon,
  labels: {
    copy: 'Copy to clipboard',
    copied: 'Copied!'
  }
}

export default CodeCopy
