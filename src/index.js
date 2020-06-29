import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styled, { ThemeProvider, css } from 'styled-components'

import ClipboardButton from './button'
import ClipboardIcon from './icon'
import getTheme from './theme'

export const svgStyle = css`
  border-radius: 0;
  margin-top: -3px;
  position: relative;
  top: 4px;
  padding: 0;
  vertical-align: initial;
  min-height: initial;
  ${({ theme }) => theme === 'dark' && 'fill: white;'};
`

const ClipboardIconComponent = styled(ClipboardIcon)`
  ${svgStyle};
`

const ClipboardWrapper = styled.div`
  position: relative;
  overflow: visible;
`

const CodeCopy = ({ iconComponent: IconComponent, ...props }) => {
  const [isHover, setHover] = useState(props.interactive)
  const [label, setLabel] = useState(props.labels.copy)
  const { labels, theme, children, text, interactive, ...restProps } = props
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <ClipboardWrapper
        className='codecopy_wrapper'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <CopyToClipboard
          className='codecopy_button'
          text={text}
          onCopy={() => setLabel(labels.copied)}
        >
          <ClipboardButton
            isHover={isHover || props.interactive}
            aria-label={label}
            onMouseLeave={() => setLabel(labels.copy)}
            {...restProps}
          >
            <IconComponent theme={theme} />
          </ClipboardButton>
        </CopyToClipboard>
        {children}
      </ClipboardWrapper>
    </ThemeProvider>
  )
}

CodeCopy.defaultProps = {
  iconComponent: ClipboardIconComponent,
  interactive: false,
  theme: 'light',
  labels: {
    copy: 'Copy to clipboard',
    copied: 'Copied!'
  }
}

export default CodeCopy
