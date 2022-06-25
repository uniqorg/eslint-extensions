"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [6321],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => u, kt: () => d });
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
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        u = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        l = {
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
            p = e.parentName,
            u = c(e, ["components", "mdxType", "originalType", "parentName"]),
            f = s(r),
            d = o,
            m = f["".concat(p, ".").concat(d)] || f[d] || l[d] || i;
          return r
            ? n.createElement(m, a(a({ ref: t }, u), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, u));
        });
      function d(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = r.length,
            a = new Array(i);
          a[0] = f;
          var c = {};
          for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
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
    2777: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => p,
          default: () => d,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => l,
        });
      var n = r(7896),
        o = r(1461),
        i = (r(2784), r(876)),
        a = ["components"],
        c = { sidebar_position: 1 },
        p = "Introduction",
        s = {
          unversionedId: "plugins/migrate-to-typescript/rules/index",
          id: "plugins/migrate-to-typescript/rules/index",
          title: "Introduction",
          description: "",
          source: "@site/docs/plugins/migrate-to-typescript/rules/index.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "migrate2typescriptSidebar",
          next: {
            title: "Introduction",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/",
          },
        },
        u = {},
        l = [],
        f = { toc: l };
      function d(e) {
        var t = e.components,
          r = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, f, r, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "introduction" }, "Introduction")
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
