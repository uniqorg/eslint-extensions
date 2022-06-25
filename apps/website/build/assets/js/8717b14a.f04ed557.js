"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [948],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
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
      function l(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var s = r.createContext({}),
        p = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        c = function (e) {
          var t = p(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        g = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            c = a(e, ["components", "mdxType", "originalType", "parentName"]),
            g = p(n),
            m = o,
            f = g["".concat(s, ".").concat(m)] || g[m] || u[m] || l;
          return n
            ? r.createElement(f, i(i({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, i({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var l = n.length,
            i = new Array(l);
          i[0] = g;
          var a = {};
          for (var s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : o),
            (i[1] = a);
          for (var p = 2; p < l; p++) i[p] = n[p];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    457: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => u,
        });
      var r = n(7896),
        o = n(1461),
        l = (n(2784), n(876)),
        i = ["components"],
        a = {
          slug: "long-blog-post",
          title: "Long Blog Post",
          authors: "endi",
          tags: ["hello", "docusaurus"],
        },
        s = void 0,
        p = {
          permalink: "/eslint-extensions/blog/long-blog-post",
          source: "@site/blog/2019-05-29-long-blog-post.md",
          title: "Long Blog Post",
          description: "This is the summary of a very long blog post,",
          date: "2019-05-29T00:00:00.000Z",
          formattedDate: "May 29, 2019",
          tags: [
            { label: "hello", permalink: "/eslint-extensions/blog/tags/hello" },
            {
              label: "docusaurus",
              permalink: "/eslint-extensions/blog/tags/docusaurus",
            },
          ],
          readingTime: 2.05,
          truncated: !0,
          authors: [
            {
              name: "Endilie Yacop Sucipto",
              title: "Maintainer of Docusaurus",
              url: "https://github.com/endiliey",
              imageURL: "https://github.com/endiliey.png",
              key: "endi",
            },
          ],
          frontMatter: {
            slug: "long-blog-post",
            title: "Long Blog Post",
            authors: "endi",
            tags: ["hello", "docusaurus"],
          },
          prevItem: {
            title: "MDX Blog Post",
            permalink: "/eslint-extensions/blog/mdx-blog-post",
          },
          nextItem: {
            title: "First Blog Post",
            permalink: "/eslint-extensions/blog/first-blog-post",
          },
        },
        c = { authorsImageUrls: [void 0] },
        u = [],
        g = { toc: u };
      function m(e) {
        var t = e.components,
          n = (0, o.Z)(e, i);
        return (0, l.kt)(
          "wrapper",
          (0, r.Z)({}, g, n, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("p", null, "This is the summary of a very long blog post,"),
          (0, l.kt)(
            "p",
            null,
            "Use a ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "\x3c!--"),
            " ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "truncate"),
            " ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "--\x3e"),
            " comment to limit blog post size in the list view."
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
