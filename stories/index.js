import React from 'react'
import {storiesOf} from '@storybook/react'
import centered from '@storybook/addon-centered'

import {createCodeCopy} from '..'

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

const CodeComponent = ({children, ...props}) => (
  <Pre>
    <code>{children}</code>
  </Pre>
)

const CodeCopy = createCodeCopy(CodeComponent)

storiesOf('CodeCopy', module)
  .addDecorator(centered)
  .add('default', () => (
    <CodeCopy>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}
    </CodeCopy>
  ))
