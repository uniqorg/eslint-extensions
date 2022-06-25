(self.webpackChunksite = self.webpackChunksite || []).push([
  [5742],
  {
    876: (e, t, n) => {
      "use strict";
      n.d(t, { Zo: () => u, kt: () => d });
      var r = n(2784);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = r.createContext({}),
        i = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : c(c({}, t), e)), n;
        },
        u = function (e) {
          var t = i(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            u = l(e, ["components", "mdxType", "originalType", "parentName"]),
            m = i(n),
            d = o,
            f = m["".concat(s, ".").concat(d)] || m[d] || p[d] || a;
          return n
            ? r.createElement(f, c(c({ ref: t }, u), {}, { components: n }))
            : r.createElement(f, c({ ref: t }, u));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            c = new Array(a);
          c[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : o),
            (c[1] = l);
          for (var i = 2; i < a; i++) c[i] = n[i];
          return r.createElement.apply(null, c);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    8680: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => m });
      var r = n(7896),
        o = n(1461),
        a = n(2784),
        c = n(6277),
        l = n(1077),
        s = n(7683);
      const i = "anchorWithStickyNavbar_fF9Z",
        u = "anchorWithHideOnScrollNavbar_Yh18";
      var p = ["as", "id"];
      function m(e) {
        var t = e.as,
          n = e.id,
          m = (0, o.Z)(e, p),
          d = (0, s.L)().navbar.hideOnScroll;
        return "h1" !== t && n
          ? a.createElement(
              t,
              (0, r.Z)({}, m, {
                className: (0, c.Z)("anchor", d ? u : i),
                id: n,
              }),
              m.children,
              a.createElement(
                "a",
                {
                  className: "hash-link",
                  href: "#" + n,
                  title: (0, l.I)({
                    id: "theme.common.headingLinkTitle",
                    message: "Direct link to heading",
                    description: "Title for link to heading",
                  }),
                },
                "\u200b"
              )
            )
          : a.createElement(t, (0, r.Z)({}, m, { id: void 0 }));
      }
    },
    5742: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => de });
      var r = n(2784),
        o = n(876),
        a = n(7896),
        c = n(1461),
        l = n(9854),
        s = ["mdxType", "originalType"];
      var i = n(9741),
        u = n(6277),
        p = n(361),
        m = n(7683);
      function d() {
        var e = (0, m.L)().prism,
          t = (0, p.I)().colorMode,
          n = e.theme,
          r = e.darkTheme || n;
        return "dark" === t ? r : n;
      }
      var f = n(252),
        g = n(4501),
        y = n.n(g),
        h = (0, f.Z)(/title=(["'])(.*?)\1/, { quote: 1, title: 2 }),
        v = (0, f.Z)(/\{([\d,-]+)\}/, { range: 1 }),
        b = {
          js: { start: "\\/\\/", end: "" },
          jsBlock: { start: "\\/\\*", end: "\\*\\/" },
          jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" },
          bash: { start: "#", end: "" },
          html: { start: "\x3c!--", end: "--\x3e" },
        };
      function k(e, t) {
        var n = e
          .map(function (e) {
            var n = b[e],
              r = n.start,
              o = n.end;
            return (
              "(?:" +
              r +
              "\\s*(" +
              t
                .flatMap(function (e) {
                  var t, n;
                  return [
                    e.line,
                    null == (t = e.block) ? void 0 : t.start,
                    null == (n = e.block) ? void 0 : n.end,
                  ].filter(Boolean);
                })
                .join("|") +
              ")\\s*" +
              o +
              ")"
            );
          })
          .join("|");
        return new RegExp("^\\s*(?:" + n + ")\\s*$");
      }
      function E(e, t) {
        var n = e.replace(/\n$/, ""),
          r = t.language,
          o = t.magicComments,
          a = t.metastring;
        if (a && v.test(a)) {
          var c = a.match(v).groups.range;
          if (0 === o.length)
            throw new Error(
              "A highlight range has been given in code block's metastring (``` " +
                a +
                "), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges."
            );
          var l = o[0].className,
            s = y()(c)
              .filter(function (e) {
                return e > 0;
              })
              .map(function (e) {
                return [e - 1, [l]];
              });
          return { lineClassNames: Object.fromEntries(s), code: n };
        }
        if (void 0 === r) return { lineClassNames: {}, code: n };
        for (
          var i = (function (e, t) {
              switch (e) {
                case "js":
                case "javascript":
                case "ts":
                case "typescript":
                  return k(["js", "jsBlock"], t);
                case "jsx":
                case "tsx":
                  return k(["js", "jsBlock", "jsx"], t);
                case "html":
                  return k(["js", "jsBlock", "html"], t);
                case "python":
                case "py":
                case "bash":
                  return k(["bash"], t);
                case "markdown":
                case "md":
                  return k(["html", "jsx", "bash"], t);
                default:
                  return k(Object.keys(b), t);
              }
            })(r, o),
            u = n.split("\n"),
            p = Object.fromEntries(
              o.map(function (e) {
                return [e.className, { start: 0, range: "" }];
              })
            ),
            m = Object.fromEntries(
              o
                .filter(function (e) {
                  return e.line;
                })
                .map(function (e) {
                  var t = e.className;
                  return [e.line, t];
                })
            ),
            d = Object.fromEntries(
              o
                .filter(function (e) {
                  return e.block;
                })
                .map(function (e) {
                  var t = e.className;
                  return [e.block.start, t];
                })
            ),
            f = Object.fromEntries(
              o
                .filter(function (e) {
                  return e.block;
                })
                .map(function (e) {
                  var t = e.className;
                  return [e.block.end, t];
                })
            ),
            g = 0;
          g < u.length;

        ) {
          var h = u[g].match(i);
          if (h) {
            var E = h.slice(1).find(function (e) {
              return void 0 !== e;
            });
            m[E]
              ? (p[m[E]].range += g + ",")
              : d[E]
              ? (p[d[E]].start = g)
              : f[E] && (p[f[E]].range += p[f[E]].start + "-" + (g - 1) + ","),
              u.splice(g, 1);
          } else g += 1;
        }
        n = u.join("\n");
        var N = {};
        return (
          Object.entries(p).forEach(function (e) {
            var t = e[0],
              n = e[1].range;
            y()(n).forEach(function (e) {
              null != N[e] || (N[e] = []), N[e].push(t);
            });
          }),
          { lineClassNames: N, code: n }
        );
      }
      var N = n(211);
      const B = "codeBlockContainer_ZGJx";
      var j = ["as"];
      function C(e) {
        var t = e.as,
          n = (0, c.Z)(e, j),
          o = (function (e) {
            var t = {
                color: "--prism-color",
                backgroundColor: "--prism-background-color",
              },
              n = {};
            return (
              Object.entries(e.plain).forEach(function (e) {
                var r = e[0],
                  o = e[1],
                  a = t[r];
                a && "string" == typeof o && (n[a] = o);
              }),
              n
            );
          })(d());
        return r.createElement(
          t,
          (0, a.Z)({}, n, {
            style: o,
            className: (0, u.Z)(n.className, B, N.k.common.codeBlock),
          })
        );
      }
      const Z = {
        codeBlockContent: "codeBlockContent_qZBB",
        codeBlockTitle: "codeBlockTitle_zAEH",
        codeBlock: "codeBlock_TAPP",
        codeBlockStandalone: "codeBlockStandalone_K9VJ",
        codeBlockLines: "codeBlockLines_AdAo",
        codeBlockLinesWithNumbering: "codeBlockLinesWithNumbering_p5De",
        buttonGroup: "buttonGroup_TNwR",
      };
      function w(e) {
        var t = e.children,
          n = e.className;
        return r.createElement(
          C,
          {
            as: "pre",
            tabIndex: 0,
            className: (0, u.Z)(Z.codeBlockStandalone, "thin-scrollbar", n),
          },
          r.createElement("code", { className: Z.codeBlockLines }, t)
        );
      }
      const O = {
        plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
        styles: [
          {
            types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
            style: { color: "#6c6783" },
          },
          { types: ["namespace"], style: { opacity: 0.7 } },
          { types: ["tag", "operator", "number"], style: { color: "#e09142" } },
          { types: ["property", "function"], style: { color: "#9a86fd" } },
          {
            types: ["tag-id", "selector", "atrule-id"],
            style: { color: "#eeebff" },
          },
          { types: ["attr-name"], style: { color: "#c4b9fe" } },
          {
            types: [
              "boolean",
              "string",
              "entity",
              "url",
              "attr-value",
              "keyword",
              "control",
              "directive",
              "unit",
              "statement",
              "regex",
              "at-rule",
              "placeholder",
              "variable",
            ],
            style: { color: "#ffcc99" },
          },
          { types: ["deleted"], style: { textDecorationLine: "line-through" } },
          { types: ["inserted"], style: { textDecorationLine: "underline" } },
          { types: ["italic"], style: { fontStyle: "italic" } },
          { types: ["important", "bold"], style: { fontWeight: "bold" } },
          { types: ["important"], style: { color: "#c4b9fe" } },
        ],
      };
      var T = { Prism: n(7175).Z, theme: O };
      function L(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function x() {
        return (
          (x =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          x.apply(this, arguments)
        );
      }
      var S = /\r\n|\r|\n/,
        P = function (e) {
          0 === e.length
            ? e.push({ types: ["plain"], content: "\n", empty: !0 })
            : 1 === e.length &&
              "" === e[0].content &&
              ((e[0].content = "\n"), (e[0].empty = !0));
        },
        _ = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        A = function (e, t) {
          var n = e.plain,
            r = Object.create(null),
            o = e.styles.reduce(function (e, n) {
              var r = n.languages,
                o = n.style;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = x({}, e[t], o);
                    e[t] = n;
                  }),
                e
              );
            }, r);
          return (
            (o.root = n), (o.plain = x({}, n, { backgroundColor: null })), o
          );
        };
      function I(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            -1 === t.indexOf(r) &&
            (n[r] = e[r]);
        return n;
      }
      const D = (function (e) {
          function t() {
            for (var t = this, n = [], r = arguments.length; r--; )
              n[r] = arguments[r];
            e.apply(this, n),
              L(this, "getThemeDict", function (e) {
                if (
                  void 0 !== t.themeDict &&
                  e.theme === t.prevTheme &&
                  e.language === t.prevLanguage
                )
                  return t.themeDict;
                (t.prevTheme = e.theme), (t.prevLanguage = e.language);
                var n = e.theme ? A(e.theme, e.language) : void 0;
                return (t.themeDict = n);
              }),
              L(this, "getLineProps", function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  a = x({}, I(e, ["key", "className", "style", "line"]), {
                    className: "token-line",
                    style: void 0,
                    key: void 0,
                  }),
                  c = t.getThemeDict(t.props);
                return (
                  void 0 !== c && (a.style = c.plain),
                  void 0 !== o &&
                    (a.style = void 0 !== a.style ? x({}, a.style, o) : o),
                  void 0 !== n && (a.key = n),
                  r && (a.className += " " + r),
                  a
                );
              }),
              L(this, "getStyleForToken", function (e) {
                var n = e.types,
                  r = e.empty,
                  o = n.length,
                  a = t.getThemeDict(t.props);
                if (void 0 !== a) {
                  if (1 === o && "plain" === n[0])
                    return r ? { display: "inline-block" } : void 0;
                  if (1 === o && !r) return a[n[0]];
                  var c = r ? { display: "inline-block" } : {},
                    l = n.map(function (e) {
                      return a[e];
                    });
                  return Object.assign.apply(Object, [c].concat(l));
                }
              }),
              L(this, "getTokenProps", function (e) {
                var n = e.key,
                  r = e.className,
                  o = e.style,
                  a = e.token,
                  c = x({}, I(e, ["key", "className", "style", "token"]), {
                    className: "token " + a.types.join(" "),
                    children: a.content,
                    style: t.getStyleForToken(a),
                    key: void 0,
                  });
                return (
                  void 0 !== o &&
                    (c.style = void 0 !== c.style ? x({}, c.style, o) : o),
                  void 0 !== n && (c.key = n),
                  r && (c.className += " " + r),
                  c
                );
              }),
              L(this, "tokenize", function (e, t, n, r) {
                var o = { code: t, grammar: n, language: r, tokens: [] };
                e.hooks.run("before-tokenize", o);
                var a = (o.tokens = e.tokenize(o.code, o.grammar, o.language));
                return e.hooks.run("after-tokenize", o), a;
              });
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.Prism,
                n = e.language,
                r = e.code,
                o = e.children,
                a = this.getThemeDict(this.props),
                c = t.languages[n];
              return o({
                tokens: (function (e) {
                  for (
                    var t = [[]],
                      n = [e],
                      r = [0],
                      o = [e.length],
                      a = 0,
                      c = 0,
                      l = [],
                      s = [l];
                    c > -1;

                  ) {
                    for (; (a = r[c]++) < o[c]; ) {
                      var i = void 0,
                        u = t[c],
                        p = n[c][a];
                      if (
                        ("string" == typeof p
                          ? ((u = c > 0 ? u : ["plain"]), (i = p))
                          : ((u = _(u, p.type)),
                            p.alias && (u = _(u, p.alias)),
                            (i = p.content)),
                        "string" == typeof i)
                      ) {
                        var m = i.split(S),
                          d = m.length;
                        l.push({ types: u, content: m[0] });
                        for (var f = 1; f < d; f++)
                          P(l),
                            s.push((l = [])),
                            l.push({ types: u, content: m[f] });
                      } else
                        c++, t.push(u), n.push(i), r.push(0), o.push(i.length);
                    }
                    c--, t.pop(), n.pop(), r.pop(), o.pop();
                  }
                  return P(l), s;
                })(void 0 !== c ? this.tokenize(t, r, c, n) : [r]),
                className: "prism-code language-" + n,
                style: void 0 !== a ? a.root : {},
                getLineProps: this.getLineProps,
                getTokenProps: this.getTokenProps,
              });
            }),
            t
          );
        })(r.Component),
        z = "codeLine_DPDv",
        V = "codeLineNumber_YxQB",
        M = "codeLineContent_SOIp";
      function R(e) {
        var t = e.line,
          n = e.classNames,
          o = e.showLineNumbers,
          c = e.getLineProps,
          l = e.getTokenProps;
        1 === t.length && "\n" === t[0].content && (t[0].content = "");
        var s = c({ line: t, className: (0, u.Z)(n, o && z) }),
          i = t.map(function (e, t) {
            return r.createElement(
              "span",
              (0, a.Z)({ key: t }, l({ token: e, key: t }))
            );
          });
        return r.createElement(
          "span",
          s,
          o
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement("span", { className: V }),
                r.createElement("span", { className: M }, i)
              )
            : r.createElement(r.Fragment, null, i, r.createElement("br", null))
        );
      }
      var H = n(1077);
      const W = {
        copyButtonCopied: "copyButtonCopied_Mzdr",
        copyButtonIcons: "copyButtonIcons_MVhB",
        copyButtonIcon: "copyButtonIcon_yxgH",
        copyButtonSuccessIcon: "copyButtonSuccessIcon_QJLJ",
      };
      function F(e) {
        var t = e.code,
          n = e.className,
          o = (0, r.useState)(!1),
          a = o[0],
          c = o[1],
          l = (0, r.useRef)(void 0),
          s = (0, r.useCallback)(
            function () {
              !(function (e, t) {
                var n = (void 0 === t ? {} : t).target,
                  r = void 0 === n ? document.body : n,
                  o = document.createElement("textarea"),
                  a = document.activeElement;
                (o.value = e),
                  o.setAttribute("readonly", ""),
                  (o.style.contain = "strict"),
                  (o.style.position = "absolute"),
                  (o.style.left = "-9999px"),
                  (o.style.fontSize = "12pt");
                var c = document.getSelection(),
                  l = !1;
                c.rangeCount > 0 && (l = c.getRangeAt(0)),
                  r.append(o),
                  o.select(),
                  (o.selectionStart = 0),
                  (o.selectionEnd = e.length);
                var s = !1;
                try {
                  s = document.execCommand("copy");
                } catch (i) {}
                o.remove(),
                  l && (c.removeAllRanges(), c.addRange(l)),
                  a && a.focus();
              })(t),
                c(!0),
                (l.current = window.setTimeout(function () {
                  c(!1);
                }, 1e3));
            },
            [t]
          );
        return (
          (0, r.useEffect)(function () {
            return function () {
              return window.clearTimeout(l.current);
            };
          }, []),
          r.createElement(
            "button",
            {
              type: "button",
              "aria-label": a
                ? (0, H.I)({
                    id: "theme.CodeBlock.copied",
                    message: "Copied",
                    description: "The copied button label on code blocks",
                  })
                : (0, H.I)({
                    id: "theme.CodeBlock.copyButtonAriaLabel",
                    message: "Copy code to clipboard",
                    description: "The ARIA label for copy code blocks button",
                  }),
              title: (0, H.I)({
                id: "theme.CodeBlock.copy",
                message: "Copy",
                description: "The copy button label on code blocks",
              }),
              className: (0, u.Z)(
                "clean-btn",
                n,
                W.copyButton,
                a && W.copyButtonCopied
              ),
              onClick: s,
            },
            r.createElement(
              "span",
              { className: W.copyButtonIcons, "aria-hidden": "true" },
              r.createElement(
                "svg",
                { className: W.copyButtonIcon, viewBox: "0 0 24 24" },
                r.createElement("path", {
                  d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z",
                })
              ),
              r.createElement(
                "svg",
                { className: W.copyButtonSuccessIcon, viewBox: "0 0 24 24" },
                r.createElement("path", {
                  d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
                })
              )
            )
          )
        );
      }
      const Y = "wordWrapButtonIcon_SMj9",
        q = "wordWrapButtonEnabled_vR9E";
      function G(e) {
        var t = e.className,
          n = e.onClick,
          o = e.isEnabled,
          a = (0, H.I)({
            id: "theme.CodeBlock.wordWrapToggle",
            message: "Toggle word wrap",
            description:
              "The title attribute for toggle word wrapping button of code block lines",
          });
        return r.createElement(
          "button",
          {
            type: "button",
            onClick: n,
            className: (0, u.Z)("clean-btn", t, o && q),
            "aria-label": a,
            title: a,
          },
          r.createElement(
            "svg",
            { className: Y, viewBox: "0 0 24 24", "aria-hidden": "true" },
            r.createElement("path", {
              fill: "currentColor",
              d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z",
            })
          )
        );
      }
      function J(e) {
        var t,
          n,
          o,
          c,
          l,
          s,
          i,
          p,
          f,
          g,
          y,
          v = e.children,
          b = e.className,
          k = void 0 === b ? "" : b,
          N = e.metastring,
          B = e.title,
          j = e.showLineNumbers,
          w = e.language,
          O = (0, m.L)().prism,
          L = O.defaultLanguage,
          x = O.magicComments,
          S =
            null !=
            (t =
              null != w
                ? w
                : null ==
                  (n = k.split(" ").find(function (e) {
                    return e.startsWith("language-");
                  }))
                ? void 0
                : n.replace(/language-/, ""))
              ? t
              : L,
          P = d(),
          _ =
            ((o = (0, r.useState)(!1)),
            (c = o[0]),
            (l = o[1]),
            (s = (0, r.useState)(!1)),
            (i = s[0]),
            (p = s[1]),
            (f = (0, r.useRef)(null)),
            (g = (0, r.useCallback)(
              function () {
                var e = f.current.querySelector("code");
                c
                  ? e.removeAttribute("style")
                  : (e.style.whiteSpace = "pre-wrap"),
                  l(function (e) {
                    return !e;
                  });
              },
              [f, c]
            )),
            (y = (0, r.useCallback)(
              function () {
                var e = f.current,
                  t =
                    e.scrollWidth > e.clientWidth ||
                    f.current.querySelector("code").hasAttribute("style");
                p(t);
              },
              [f]
            )),
            (0, r.useEffect)(
              function () {
                y();
              },
              [c, y]
            ),
            (0, r.useEffect)(
              function () {
                return (
                  window.addEventListener("resize", y, { passive: !0 }),
                  function () {
                    window.removeEventListener("resize", y);
                  }
                );
              },
              [y]
            ),
            { codeBlockRef: f, isEnabled: c, isCodeScrollable: i, toggle: g }),
          A =
            (function (e) {
              var t, n;
              return null !=
                (t =
                  null == e || null == (n = e.match(h))
                    ? void 0
                    : n.groups.title)
                ? t
                : "";
            })(N) || B,
          I = E(v, { metastring: N, language: S, magicComments: x }),
          z = I.lineClassNames,
          V = I.code,
          M =
            null != j
              ? j
              : (function (e) {
                  return Boolean(
                    null == e ? void 0 : e.includes("showLineNumbers")
                  );
                })(N);
        return r.createElement(
          C,
          {
            as: "div",
            className: (0, u.Z)(
              k,
              S && !k.includes("language-" + S) && "language-" + S
            ),
          },
          A && r.createElement("div", { className: Z.codeBlockTitle }, A),
          r.createElement(
            "div",
            { className: Z.codeBlockContent },
            r.createElement(
              D,
              (0, a.Z)({}, T, {
                theme: P,
                code: V,
                language: null != S ? S : "text",
              }),
              function (e) {
                var t = e.className,
                  n = e.tokens,
                  o = e.getLineProps,
                  a = e.getTokenProps;
                return r.createElement(
                  "pre",
                  {
                    tabIndex: 0,
                    ref: _.codeBlockRef,
                    className: (0, u.Z)(t, Z.codeBlock, "thin-scrollbar"),
                  },
                  r.createElement(
                    "code",
                    {
                      className: (0, u.Z)(
                        Z.codeBlockLines,
                        M && Z.codeBlockLinesWithNumbering
                      ),
                    },
                    n.map(function (e, t) {
                      return r.createElement(R, {
                        key: t,
                        line: e,
                        getLineProps: o,
                        getTokenProps: a,
                        classNames: z[t],
                        showLineNumbers: M,
                      });
                    })
                  )
                );
              }
            ),
            r.createElement(
              "div",
              { className: Z.buttonGroup },
              (_.isEnabled || _.isCodeScrollable) &&
                r.createElement(G, {
                  className: Z.codeButton,
                  onClick: function () {
                    return _.toggle();
                  },
                  isEnabled: _.isEnabled,
                }),
              r.createElement(F, { className: Z.codeButton, code: V })
            )
          )
        );
      }
      var $ = ["children"];
      function Q(e) {
        var t = e.children,
          n = (0, c.Z)(e, $),
          o = (0, i.Z)(),
          l = (function (e) {
            return r.Children.toArray(e).some(function (e) {
              return (0, r.isValidElement)(e);
            })
              ? e
              : Array.isArray(e)
              ? e.join("")
              : e;
          })(t),
          s = "string" == typeof l ? J : w;
        return r.createElement(s, (0, a.Z)({ key: String(o) }, n), l);
      }
      var K = n(9817);
      var U = n(8698);
      const X = "details_B4FW",
        ee = "isBrowser_Cof9",
        te = "collapsibleContent_VYua";
      var ne = ["summary", "children"];
      function re(e) {
        return !!e && ("SUMMARY" === e.tagName || re(e.parentElement));
      }
      function oe(e, t) {
        return !!e && (e === t || oe(e.parentElement, t));
      }
      function ae(e) {
        var t = e.summary,
          n = e.children,
          o = (0, c.Z)(e, ne),
          l = (0, i.Z)(),
          s = (0, r.useRef)(null),
          p = (0, U.u)({ initialState: !o.open }),
          m = p.collapsed,
          d = p.setCollapsed,
          f = (0, r.useState)(o.open),
          g = f[0],
          y = f[1];
        return r.createElement(
          "details",
          (0, a.Z)({}, o, {
            ref: s,
            open: g,
            "data-collapsed": m,
            className: (0, u.Z)(X, l && ee, o.className),
            onMouseDown: function (e) {
              re(e.target) && e.detail > 1 && e.preventDefault();
            },
            onClick: function (e) {
              e.stopPropagation();
              var t = e.target;
              re(t) &&
                oe(t, s.current) &&
                (e.preventDefault(), m ? (d(!1), y(!0)) : d(!0));
            },
          }),
          null != t ? t : r.createElement("summary", null, "Details"),
          r.createElement(
            U.z,
            {
              lazy: !1,
              collapsed: m,
              disableSSRStyle: !0,
              onCollapseTransitionEnd: function (e) {
                d(e), y(!e);
              },
            },
            r.createElement("div", { className: te }, n)
          )
        );
      }
      const ce = "details_SZgV";
      function le(e) {
        var t = Object.assign({}, e);
        return r.createElement(
          ae,
          (0, a.Z)({}, t, {
            className: (0, u.Z)("alert alert--info", ce, t.className),
          })
        );
      }
      var se = n(8680);
      function ie(e) {
        return r.createElement(se.Z, e);
      }
      const ue = "containsTaskList__YnT";
      const pe = "img__Ss2";
      const me = {
        head: function (e) {
          var t = r.Children.map(e.children, function (e) {
            return r.isValidElement(e)
              ? (function (e) {
                  var t;
                  if (
                    null != (t = e.props) &&
                    t.mdxType &&
                    e.props.originalType
                  ) {
                    var n = e.props,
                      o = (n.mdxType, n.originalType, (0, c.Z)(n, s));
                    return r.createElement(e.props.originalType, o);
                  }
                  return e;
                })(e)
              : e;
          });
          return r.createElement(l.Z, e, t);
        },
        code: function (e) {
          var t = [
            "a",
            "b",
            "big",
            "i",
            "span",
            "em",
            "strong",
            "sup",
            "sub",
            "small",
          ];
          return r.Children.toArray(e.children).every(function (e) {
            return (
              ("string" == typeof e && !e.includes("\n")) ||
              ((0, r.isValidElement)(e) && t.includes(e.props.mdxType))
            );
          })
            ? r.createElement("code", e)
            : r.createElement(Q, e);
        },
        a: function (e) {
          return r.createElement(K.Z, e);
        },
        pre: function (e) {
          var t;
          return r.createElement(
            Q,
            (0, r.isValidElement)(e.children) &&
              "code" ===
                (null == (t = e.children.props) ? void 0 : t.originalType)
              ? e.children.props
              : Object.assign({}, e)
          );
        },
        details: function (e) {
          var t = r.Children.toArray(e.children),
            n = t.find(function (e) {
              var t;
              return (
                r.isValidElement(e) &&
                "summary" === (null == (t = e.props) ? void 0 : t.mdxType)
              );
            }),
            o = r.createElement(
              r.Fragment,
              null,
              t.filter(function (e) {
                return e !== n;
              })
            );
          return r.createElement(le, (0, a.Z)({}, e, { summary: n }), o);
        },
        ul: function (e) {
          return r.createElement(
            "ul",
            (0, a.Z)({}, e, {
              className:
                ((t = e.className),
                (0, u.Z)(
                  t,
                  (null == t ? void 0 : t.includes("contains-task-list")) && ue
                )),
            })
          );
          var t;
        },
        img: function (e) {
          return r.createElement(
            "img",
            (0, a.Z)({ loading: "lazy" }, e, {
              className: ((t = e.className), (0, u.Z)(t, pe)),
            })
          );
          var t;
        },
        h1: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h1" }, e));
        },
        h2: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h2" }, e));
        },
        h3: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h3" }, e));
        },
        h4: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h4" }, e));
        },
        h5: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h5" }, e));
        },
        h6: function (e) {
          return r.createElement(ie, (0, a.Z)({ as: "h6" }, e));
        },
      };
      function de(e) {
        var t = e.children;
        return r.createElement(o.Zo, { components: me }, t);
      }
    },
    4501: (e, t) => {
      function n(e) {
        let t,
          n = [];
        for (let r of e.split(",").map((e) => e.trim()))
          if (/^-?\d+$/.test(r)) n.push(parseInt(r, 10));
          else if (
            (t = r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
          ) {
            let [e, r, o, a] = t;
            if (r && a) {
              (r = parseInt(r)), (a = parseInt(a));
              const e = r < a ? 1 : -1;
              ("-" !== o && ".." !== o && "\u2025" !== o) || (a += e);
              for (let t = r; t !== a; t += e) n.push(t);
            }
          }
        return n;
      }
      (t.default = n), (e.exports = n);
    },
  },
]);
