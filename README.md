# react-codecopy

<p align="center">
  <img src="demo.gif" alt="react-codecopy">
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/react-codecopy.svg?style=flat-square)
[![NPM Status](https://img.shields.io/npm/dm/react-codecopy.svg?style=flat-square)](https://www.npmjs.org/package/react-codecopy)

> "Copy to clipboard" button for your code snippets. Inspired in [codecopy](https://github.com/zenorocha/codecopy).


## Install

```bash
$ npm install react-codecopy --save
```

## Usage

```jsx
import CodeCopy from 'react-codecopy'

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

return (
  <Code {...props}>{`<!-- Microlink SDK Vanilla/UMD bundle -->
  <script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}
  </Code>
)
```

## API

### CodeCopy([options])

#### options

##### iconComponent

Type: `component`</br>
Default: `ClipboardIcon`

The clipboard icont to use.

##### text

Type: `string`</br>

The text to be copied.

##### onCopy

Type: `function`

A function to be called after text is being copied to the clipboard.

##### copy

Type: `function`</br>
Default: `text => navigator.clipboard.writeText(text)`

The clipboard method to delegate into the copy action.

In case you need to support old browser, consider to call [copee](https://github.com/styfle/copee).

##### theme

Type: `string`</br>
Default: `light`

It determines the theme to be used, being possible `'light'` and `'dark'`.

## Related

- [codecopy](https://github.com/Kikobeats/codecopy) – "Copy to clipboard" button for your code snippets.

## License

**react-codecopy** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/react-codecopy/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/react-codecopy/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
