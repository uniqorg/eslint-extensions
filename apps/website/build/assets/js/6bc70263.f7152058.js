"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3981],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => l, kt: () => m });
      var n = r(2784);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var a = n.createContext({}),
        p = function (e) {
          var t = n.useContext(a),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        l = function (e) {
          var t = p(e.components);
          return n.createElement(a.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            i = e.originalType,
            a = e.parentName,
            l = c(e, ["components", "mdxType", "originalType", "parentName"]),
            f = p(r),
            m = o,
            y = f["".concat(a, ".").concat(m)] || f[m] || u[m] || i;
          return r
            ? n.createElement(y, s(s({ ref: t }, l), {}, { components: r }))
            : n.createElement(y, s({ ref: t }, l));
        });
      function m(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = r.length,
            s = new Array(i);
          s[0] = f;
          var c = {};
          for (var a in t) hasOwnProperty.call(t, a) && (c[a] = t[a]);
          (c.originalType = e),
            (c.mdxType = "string" == typeof e ? e : o),
            (s[1] = c);
          for (var p = 2; p < i; p++) s[p] = r[p];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    5943: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => m,
          frontMatter: () => c,
          metadata: () => p,
          toc: () => u,
        });
      var n = r(7896),
        o = r(1461),
        i = (r(2784), r(876)),
        s = ["components"],
        c = {},
        a = void 0,
        p = {
          unversionedId:
            "plugins/migrate-to-typescript/configs/node-js-with-ts",
          id: "plugins/migrate-to-typescript/configs/node-js-with-ts",
          title: "node-js-with-ts",
          description: "",
          source:
            "@site/docs/plugins/migrate-to-typescript/configs/node-js-with-ts.md",
          sourceDirName: "plugins/migrate-to-typescript/configs",
          slug: "/plugins/migrate-to-typescript/configs/node-js-with-ts",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/node-js-with-ts",
          draft: !1,
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "Tutorial Intro",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/intro",
          },
        },
        l = {},
        u = [],
        f = { toc: u };
      function m(e) {
        var t = e.components,
          r = (0, o.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, f, r, { components: t, mdxType: "MDXLayout" })
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
