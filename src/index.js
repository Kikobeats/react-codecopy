import React, { useState } from 'react'
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

function CodeCopy (props) {
  const [isHover, setHover] = useState(props.interactive)
  const [label, setLabel] = useState(props.labels.copy)
  const IconComponent = createClipboardIcon(props)
  const { labels, theme, children, text, interactive, ...restProps } = props
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <ClipboardWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <CopyToClipboard text={text} onCopy={() => setLabel(labels.copied)}>
          <ClipboardButton
            isHover={isHover || props.interactive}
            aria-label={label}
            onMouseLeave={() => setLabel(labels.copy)}
            {...restProps}
          >
            <IconComponent />
          </ClipboardButton>
        </CopyToClipboard>
        {children}
      </ClipboardWrapper>
    </ThemeProvider>
  )
}

CodeCopy.defaultProps = {
  iconComponent: ClipboardIcon,
  interactive: false,
  theme: 'light',
  labels: {
    copy: 'Copy to clipboard',
    copied: 'Copied!'
  }
}

export default CodeCopy
