"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [9671],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => m });
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
      function a(e) {
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
      var l = n.createContext({}),
        s = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        p = function (e) {
          var t = s(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
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
            l = e.parentName,
            p = c(e, ["components", "mdxType", "originalType", "parentName"]),
            f = s(r),
            m = o,
            d = f["".concat(l, ".").concat(m)] || f[m] || u[m] || i;
          return r
            ? n.createElement(d, a(a({ ref: t }, p), {}, { components: r }))
            : n.createElement(d, a({ ref: t }, p));
        });
      function m(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = r.length,
            a = new Array(i);
          a[0] = f;
          var c = {};
          for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
          (c.originalType = e),
            (c.mdxType = "string" == typeof e ? e : o),
            (a[1] = c);
          for (var s = 2; s < i; s++) a[s] = r[s];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = "MDXCreateElement";
    },
    7724: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => u,
        });
      var n = r(7896),
        o = r(1461),
        i = (r(2784), r(876)),
        a = ["components"],
        c = { sidebar_position: 1 },
        l = "Plugins Introduction",
        s = {
          unversionedId: "intro",
          id: "intro",
          title: "Plugins Introduction",
          description: "Plugins list",
          source: "@site/docs/intro.md",
          sourceDirName: ".",
          slug: "/intro",
          permalink: "/eslint-extensions/docs/intro",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
        },
        p = {},
        u = [],
        f = { toc: u };
      function m(e) {
        var t = e.components,
          r = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, f, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "h1",
            { id: "plugins-introduction" },
            "Plugins Introduction"
          ),
          (0, i.kt)("p", null, "Plugins list"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              (0, i.kt)(
                "a",
                {
                  parentName: "li",
                  href: "/eslint-extensions/docs/plugins/migrate-to-typescript/intro",
                },
                "eslint-plugin-migrate-to-typescript"
              )
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
