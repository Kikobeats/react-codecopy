import React, { createElement, Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styled, { css } from 'styled-components'

import ClipboardIcon from './icon'
import ClipboardButton from './button'

const svgStyle = css`
  border-radius: 0;
  margin-top: -3px;
  position: relative;
  top: 2px;
  padding: 0;
  vertical-align: initial;
  min-height: initial;
`

const createClipboardIcon = iconComponent =>
  styled(iconComponent)`
    ${svgStyle};
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
    const {
      labels,
      codeComponent: CodeComponent,
      iconComponent: IconComponent
    } = this.props

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
            <IconComponent />
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

export const createCodeCopy = ({
  codeComponent,
  iconComponent = ClipboardIcon
}) => props =>
  createElement(CodeCopy, {
    codeComponent,
    iconComponent: createClipboardIcon(iconComponent),
    ...props
  })

export default CodeCopy
