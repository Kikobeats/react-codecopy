import centered from '@storybook/addon-centered/react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { Copy } from 'react-feather'

import CodeCopy from '../src'

const normalStyle = css`
  background: rgba(27, 31, 35, 0.05);
  color: #4a4c4b;
`

const blackStyle = css`
  background: black;
  color: white;
`

const Pre = styled.pre`
  padding: 30px;
  border-radius: 2px;
  overflow-x: auto;
  font-family: Nitti, 'Microsoft YaHei', 微软雅黑, monospace;
  font-size: 13px;
  line-height: 20px;
  ${props => (props.theme.black ? blackStyle : normalStyle)};
`

const PreCode = props => (
  <Pre>
    <code {...props} />
  </Pre>
)

const Code = ({ children, ...props } = {}) => {
  return (
    <CodeCopy active text={children} {...props}>
      <PreCode>{children}</PreCode>
    </CodeCopy>
  )
}

const code = `<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`

const Story = ({ interactive = false, ...props }) => {
  const [isInteractive, setIsInteractive] = useState(interactive)

  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault()
          setIsInteractive(true)
        }}
      >
        enable
      </button>
      <button
        onClick={event => {
          event.preventDefault()
          setIsInteractive(false)
        }}
      >
        disable
      </button>
      <button
        onClick={event => {
          event.preventDefault()
          navigator.clipboard.readText().then(text => window.alert(text || '(nothing)'))
        }}
      >
        show clibpoard
      </button>
      <button
        onClick={event => {
          event.preventDefault()
          navigator.clipboard.writeText('')
        }}
      >
        clear clipboard
      </button>
      <Code {...props} interactive={isInteractive}>
        {code}
      </Code>
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'helvetica, sans-serif',
          paddingTop: '1rem',
          fontSize: '16px'
        }}
      >
        Hover the text to copy it. See on{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/Kikobeats/react-codecopy'
          style={{ color: '#0366d6' }}
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}

storiesOf('CodeCopy', module)
  .addDecorator(centered)
  .add('light', () => <Story />)
  .add('dark', () => <Story theme='dark' />)
  .add('interactive', () => <Story interactive='true' />)
  .add('custom icon', () => <Story iconComponent={props => <Copy size={16} {...props} />} />)
  .add('custom icon + dark', () => (
    <Story theme='dark' iconComponent={props => <Copy size={16} {...props} />} />
  ))
  .add('custom labels', () => <Story labels={{ copy: 'click to copy', copied: 'copied, yay!' }} />)
  .add('custom style', () => (
    <Story
      codeCopyProps={{
        style: {
          left: '6px'
        }
      }}
    />
  ))
