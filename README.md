# react-codecopy

<p align="center">
  <img src="demo.gif" alt="react-codecopy">
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/react-codecopy.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/react-codecopy/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/react-codecopy)
[![Dependency status](https://img.shields.io/david/Kikobeats/react-codecopy.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-codecopy)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/react-codecopy.svg?style=flat-square)](https://david-dm.org/Kikobeats/react-codecopy#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/react-codecopy.svg?style=flat-square)](https://www.npmjs.org/package/react-codecopy)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> "Copy to clipboard button" for your code snippets


## Install

```bash
$ npm install react-codecopy --save
```

## Usage

### Using Constructor

```jsx
const {reactCodecopy} = require('react-codecopy')

const CodeComponent = ({children, ...props}) => (
  <pre>
    <code>{children}</code>
  </pre>
)

const CodeCopy = createCodeCopy(CodeComponent)

<CodeCopy>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}</CodeCopy>
```

### Passing `Code` component

```jsx
const CodeCopy = require('react-codecopy')

const CodeComponent = ({children, ...props}) => (
  <pre>
    <code>{children}</code>
  </pre>
)

<CodeCopy codeComponent={CodeComponent}>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script src="//cdn.jsdelivr.net/npm/microlinkjs@latest/umd/microlink.min.js"></script>`}</CodeCopy>
```

## License

**react-codecopy** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/react-codecopy/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/react-codecopy/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
