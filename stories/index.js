import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { Copy } from 'react-feather'
import styled, { css } from 'styled-components'

import CodeCopy from '../src'

const normalStyle = css`
  background: #fafbfc;
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

const Code = ({ theme, ...props } = {}) => (
  <CodeCopy theme={theme} text={props.children}>
    <PreCode {...props} />
  </CodeCopy>
)

const createStory = (props = {}) => (
  <div>
    <Code {...props}>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}</Code>
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
        href='https://github.com/Kikobeats/react-codecopy'
        style={{ color: '#0366d6' }}
      >
        GitHub
      </a>.
    </p>
  </div>
)

storiesOf('CodeCopy', module)
  .addDecorator(centered)
  .add('default', () => createStory())
  .add('custom icon', () =>
    createStory({
      iconComponent: props => <Copy size={16} {...props} />
    })
  )
  .add('custom labels', () =>
    createStory({
      labels: {
        copy: 'click to copy',
        copied: 'copied, yay!'
      }
    })
  )
  .add('black theme', () =>
    createStory({
      theme: 'dark'
    })
  )
