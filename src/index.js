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
  const [{ isHover, label }, setState] = useState({
    isHover: props.interactive,
    label: props.labels.copy
  })

  const IconComponent = createClipboardIcon(props)
  const { labels, theme, children, text, interactive, ...restProps } = props
  const onMouseEnter = () => setState({ isHover: true })
  const onMouseLeave = () => setState({ isHover: false })

  const hover = isHover || props.interactive

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <ClipboardWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <CopyToClipboard text={text} onCopy={() => setState({ label: labels.copied })}>
          <ClipboardButton
            isHover={hover}
            aria-label={label}
            onMouseLeave={() => setState({ label: labels.copy })}
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
