"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [6661],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => l, kt: () => m });
      var n = r(2784);
      function i(e, t, r) {
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
      function o(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      var a = n.createContext({}),
        p = function (e) {
          var t = n.useContext(a),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : c(c({}, t), e)), r;
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
            i = e.mdxType,
            o = e.originalType,
            a = e.parentName,
            l = s(e, ["components", "mdxType", "originalType", "parentName"]),
            f = p(r),
            m = i,
            g = f["".concat(a, ".").concat(m)] || f[m] || u[m] || o;
          return r
            ? n.createElement(g, c(c({ ref: t }, l), {}, { components: r }))
            : n.createElement(g, c({ ref: t }, l));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var o = r.length,
            c = new Array(o);
          c[0] = f;
          var s = {};
          for (var a in t) hasOwnProperty.call(t, a) && (s[a] = t[a]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : i),
            (c[1] = s);
          for (var p = 2; p < o; p++) c[p] = r[p];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    9952: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => m,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => u,
        });
      var n = r(7896),
        i = r(1461),
        o = (r(2784), r(876)),
        c = ["components"],
        s = { sidebar_position: 1 },
        a = "Introduction",
        p = {
          unversionedId: "plugins/migrate-to-typescript/configs/index",
          id: "plugins/migrate-to-typescript/configs/index",
          title: "Introduction",
          description: "",
          source: "@site/docs/plugins/migrate-to-typescript/configs/index.md",
          sourceDirName: "plugins/migrate-to-typescript/configs",
          slug: "/plugins/migrate-to-typescript/configs/",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "no-require",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-require",
          },
          next: {
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
          r = (0, i.Z)(e, c);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, f, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "introduction" }, "Introduction")
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
