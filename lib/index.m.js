var n
Object.defineProperty(exports, '__esModule', { value: !0 }),
(exports.createCodeCopy = void 0)
var e = (function () {
    function n (n, e) {
      for (var o = 0; o < e.length; o++) {
        var t = e[o]
        ;(t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(n, t.key, t)
      }
    }
    return function (e, o, t) {
      return o && n(e.prototype, o), t && n(e, t), e
    }
  })(),
  o =
    Object.assign ||
    function (n) {
      for (var e = arguments, o = 1; o < arguments.length; o++) {
        var t = e[o]
        for (var r in t) { Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]) }
      }
      return n
    },
  t = ((n =
    (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
    60103),
    function (e, o, t, r) {
      var i = arguments,
        a = e && e.defaultProps,
        l = arguments.length - 3
      if ((o || l === 0 || (o = {}), o && a)) { for (var p in a) void 0 === o[p] && (o[p] = a[p]) } else o || (o = a || {})
      if (l === 1) o.children = r
      else if (l > 1) {
        for (var s = Array(l), c = 0; c < l; c++) s[c] = i[c + 3]
        o.children = s
      }
      return {
        $$typeof: n,
        type: e,
        key: void 0 === t ? null : '' + t,
        ref: null,
        props: o,
        _owner: null
      }
    }),
  r = f(
    [
      '\n  border-radius: 0;\n  margin-top: -3px;\n  position: relative;\n  top: 2px;\n  padding: 0;\n  vertical-align: initial;\n  min-height: initial;\n'
    ],
    [
      '\n  border-radius: 0;\n  margin-top: -3px;\n  position: relative;\n  top: 2px;\n  padding: 0;\n  vertical-align: initial;\n  min-height: initial;\n'
    ]
  ),
  i = f(
    ['\n  position: relative;\n  overflow: visible;\n'],
    ['\n  position: relative;\n  overflow: visible;\n']
  ),
  a = f(
    ['\nfrom {\n  opacity: 0;\n}\n\nto {\n  opacity: 1;\n}\n'],
    ['\nfrom {\n  opacity: 0;\n}\n\nto {\n  opacity: 1;\n}\n']
  ),
  l = f(
    [
      '\n  color: #24292e;\n  background-color: #eff3f6;\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n\n  position: absolute;\n  display: inline-block;\n  right: 5px;\n  top: 5px;\n  padding: 3px 6px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 0.25em;\n\n  box-shadow: none;\n  min-height: initial;\n  transition: opacity 0.3s ease-in-out;\n  opacity: ',
      ";\n  z-index: 1;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: rgb(230, 235, 241);\n    background-image: linear-gradient(\n      -180deg,\n      rgb(240, 243, 246) 0%,\n      rgb(230, 235, 241) 90%\n    );\n    background-position: 0px -0.5em;\n    border-color: rgba(27, 31, 35, 0.35);\n    box-shadow: none;\n  }\n\n  &:active {\n    background-color: rgb(233, 236, 239);\n    background-image: none;\n    box-shadow: none;\n    border-color: rgba(27, 31, 35, 0.35);\n  }\n\n  &::before {\n    position: absolute;\n    z-index: 1000001;\n    display: none;\n    width: 0;\n    height: 0;\n    color: #1b1f23;\n    pointer-events: none;\n    content: '';\n    border: 6px solid transparent;\n    opacity: 0;\n    top: auto;\n    right: 50%;\n    bottom: -7px;\n    margin-right: -6px;\n    border-bottom-color: #1b1f23;\n  }\n\n  &::after {\n    position: absolute;\n    z-index: 1000000;\n    display: none;\n    padding: 0.5em 0.75em;\n    font: normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n      'Segoe UI Symbol';\n    -webkit-font-smoothing: subpixel-antialiased;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: break-word;\n    white-space: pre;\n    pointer-events: none;\n    content: attr(aria-label);\n    background: #1b1f23;\n    border-radius: 3px;\n    opacity: 0;\n    top: 100%;\n    right: 50%;\n    margin-top: 6px;\n    transform: translateX(50%);\n  }\n\n  &:hover::after,\n  &:hover::before {\n    display: inline-block;\n    text-decoration: none;\n    animation-name: ",
      ';\n    animation-duration: 0.1s;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease-in;\n    animation-delay: 0.4s;\n  }\n'
    ],
    [
      '\n  color: #24292e;\n  background-color: #eff3f6;\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n\n  position: absolute;\n  display: inline-block;\n  right: 5px;\n  top: 5px;\n  padding: 3px 6px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-repeat: repeat-x;\n  background-position: -1px -1px;\n  background-size: 110% 110%;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 0.25em;\n\n  box-shadow: none;\n  min-height: initial;\n  transition: opacity 0.3s ease-in-out;\n  opacity: ',
      ";\n  z-index: 1;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: rgb(230, 235, 241);\n    background-image: linear-gradient(\n      -180deg,\n      rgb(240, 243, 246) 0%,\n      rgb(230, 235, 241) 90%\n    );\n    background-position: 0px -0.5em;\n    border-color: rgba(27, 31, 35, 0.35);\n    box-shadow: none;\n  }\n\n  &:active {\n    background-color: rgb(233, 236, 239);\n    background-image: none;\n    box-shadow: none;\n    border-color: rgba(27, 31, 35, 0.35);\n  }\n\n  &::before {\n    position: absolute;\n    z-index: 1000001;\n    display: none;\n    width: 0;\n    height: 0;\n    color: #1b1f23;\n    pointer-events: none;\n    content: '';\n    border: 6px solid transparent;\n    opacity: 0;\n    top: auto;\n    right: 50%;\n    bottom: -7px;\n    margin-right: -6px;\n    border-bottom-color: #1b1f23;\n  }\n\n  &::after {\n    position: absolute;\n    z-index: 1000000;\n    display: none;\n    padding: 0.5em 0.75em;\n    font: normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n      'Segoe UI Symbol';\n    -webkit-font-smoothing: subpixel-antialiased;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: break-word;\n    white-space: pre;\n    pointer-events: none;\n    content: attr(aria-label);\n    background: #1b1f23;\n    border-radius: 3px;\n    opacity: 0;\n    top: 100%;\n    right: 50%;\n    margin-top: 6px;\n    transform: translateX(50%);\n  }\n\n  &:hover::after,\n  &:hover::before {\n    display: inline-block;\n    text-decoration: none;\n    animation-name: ",
      ';\n    animation-duration: 0.1s;\n    animation-fill-mode: forwards;\n    animation-timing-function: ease-in;\n    animation-delay: 0.4s;\n  }\n'
    ]
  ),
  p = require('react'),
  s = b(p),
  c = require('react-copy-to-clipboard'),
  d = require('styled-components'),
  u = b(d)
function b (n) {
  return n && n.__esModule ? n : { default: n }
}
function f (n, e) {
  return Object.freeze(
    Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
  )
}
var g = u.default.svg(r),
  m = function (n) {
    return s.default.createElement(
      g,
      o(
        {
          height: 16,
          viewBox: '0 0 14 16',
          version: '1.1',
          width: 16,
          'aria-hidden': 'true'
        },
        n
      ),
      t('path', {
        fillRule: 'evenodd',
        d:
          'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z'
      })
    )
  },
  h = u.default.div(i),
  v = (0, d.keyframes)(a),
  x = u.default.button(
    l,
    function (n) {
      return n.isHover ? '1' : '0'
    },
    v
  ),
  y = (function (n) {
    function r (n) {
      !(function (n, e) {
        if (!(n instanceof r)) { throw new TypeError('Cannot call a class as a function') }
      })(this)
      var e = (function (n, e) {
        if (!n) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        }
        return !e || (typeof e !== 'object' && typeof e !== 'function') ? n : e
      })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, n))
      return (e.state = { isHover: !1, label: n.labels.copy }), e
    }
    return (
      (function (n, e) {
        if (typeof e !== 'function' && e !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof e
          )
        }(n.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
        e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(n, e)
              : (n.__proto__ = e))
      })(r, p.Component),
      e(r, [
        {
          key: 'render',
          value: function () {
            var n = this,
              e = this.state,
              r = this.props,
              i = r.labels,
              a = r.codeComponent
            return t(
              h,
              {
                onMouseEnter: function () {
                  return n.setState({ isHover: !0 })
                },
                onMouseLeave: function () {
                  return n.setState({ isHover: !1 })
                }
              },
              void 0,
              t(
                c.CopyToClipboard,
                {
                  text: this.props.children,
                  onCopy: function () {
                    return n.setState({ label: i.copied })
                  }
                },
                void 0,
                t(
                  x,
                  {
                    isHover: e.isHover,
                    'aria-label': e.label,
                    onMouseLeave: function () {
                      return n.setState({ label: i.copy })
                    }
                  },
                  void 0,
                  t(m, {})
                )
              ),
              s.default.createElement(
                a,
                o({ key: this.props.children }, this.props)
              )
            )
          }
        }
      ]),
      r
    )
  })()
;(y.defaultProps = {
  labels: { copy: 'Copy to clipboard', copied: 'Copied!' }
}),
(exports.createCodeCopy = function (n) {
  return function (e) {
    return (0, p.createElement)(y, o({ codeComponent: n }, e))
  }
}),
(exports.default = y)
// # sourceMappingURL=index.m.js.map
