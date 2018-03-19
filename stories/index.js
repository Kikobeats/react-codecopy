import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { Copy } from 'react-feather'

import { createCodeCopy } from '../src'

import styled from 'styled-components'

const Pre = styled.pre`
  padding: 30px;
  border-radius: 2px;
  overflow-x: auto;
  font-family: Nitti, 'Microsoft YaHei', 微软雅黑, monospace;
  font-size: 13px;
  line-height: 20px;

  background: #fafbfc;
  color: #4a4c4b;
`

const codeComponent = ({ children, ...props }) => (
  <Pre>
    <code>{children}</code>
  </Pre>
)

const createStory = CodeCopy => (
  <div>
    <CodeCopy>
      {`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}
    </CodeCopy>
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
  .add('default', () =>
    createStory(
      createCodeCopy({
        codeComponent
      })
    )
  )
  .add('custom icon', () =>
    createStory(
      createCodeCopy({
        codeComponent,
        iconComponent: props => <Copy size={16} {...props} />
      })
    )
  )
  .add('custom labels', () =>
    createStory(
      createCodeCopy({
        codeComponent,
        labels: {
          copy: 'click to copy',
          copied: 'copied, yay!'
        }
      })
    )
  )
  .add('custom theme', () =>
    createStory(
      createCodeCopy({
        theme: {
          button: {
            color: '#4a4c4b',
            bg: '#eff3f6',
            gradient: 'linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%)',
            border: '1px solid rgba(27, 31, 35, 0.2)',
            hover: {
              bg: 'rgb(230, 235, 241)',
              gradient:
                'linear-gradient(-180deg, rgb(240, 243, 246) 0%, rgb(230, 235, 241) 90%)',
              border: 'rgba(27, 31, 35, 0.35)'
            },
            active: {
              bg: 'rgb(233, 236, 239)',
              border: 'rgba(27, 31, 35, 0.35)'
            }
          },
          tooltip: {
            bg: '#1b1f23',
            color: '#fff'
          }
        },
        codeComponent,
        iconComponent: props => <Copy size={16} {...props} />
      })
    )
  )
