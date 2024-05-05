import React, { useState } from 'react'

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

const native = text => navigator.clipboard.writeText(text)

const CodeCopy = ({ iconComponent: IconComponent, copy = native, onCopy, ...props }) => {
  const [isHover, setHover] = useState(props.interactive)
  const [label, setLabel] = useState(props.labels.copy)
  const { labels, theme, children, text, interactive, ...restProps } = props
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <ClipboardWrapper
        className='codecopy__wrapper'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ClipboardButton
          className={`codecopy__button codecopy__button__${theme}`}
          $isHover={isHover || props.interactive}
          aria-label={label}
          onMouseLeave={() => setLabel(labels.copy)}
          onClick={() => copy(text).then(() => setLabel(labels.copied))}
          {...restProps}
        >
          <IconComponent className='codecopy__icon' />
        </ClipboardButton>
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
