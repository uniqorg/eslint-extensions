"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3514],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => a, kt: () => d });
      var s = i(2784);
      function o(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function r(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                o(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var i,
          s,
          o = (function (e, t) {
            if (null == e) return {};
            var i,
              s,
              o = {},
              r = Object.keys(e);
            for (s = 0; s < r.length; s++)
              (i = r[s]), t.indexOf(i) >= 0 || (o[i] = e[i]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (s = 0; s < r.length; s++)
            (i = r[s]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (o[i] = e[i]));
        }
        return o;
      }
      var u = s.createContext({}),
        m = function (e) {
          var t = s.useContext(u),
            i = t;
          return e && (i = "function" == typeof e ? e(t) : n(n({}, t), e)), i;
        },
        a = function (e) {
          var t = m(e.components);
          return s.createElement(u.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return s.createElement(s.Fragment, {}, t);
          },
        },
        p = s.forwardRef(function (e, t) {
          var i = e.components,
            o = e.mdxType,
            r = e.originalType,
            u = e.parentName,
            a = l(e, ["components", "mdxType", "originalType", "parentName"]),
            p = m(i),
            d = o,
            g = p["".concat(u, ".").concat(d)] || p[d] || c[d] || r;
          return i
            ? s.createElement(g, n(n({ ref: t }, a), {}, { components: i }))
            : s.createElement(g, n({ ref: t }, a));
        });
      function d(e, t) {
        var i = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var r = i.length,
            n = new Array(r);
          n[0] = p;
          var l = {};
          for (var u in t) hasOwnProperty.call(t, u) && (l[u] = t[u]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : o),
            (n[1] = l);
          for (var m = 2; m < r; m++) n[m] = i[m];
          return s.createElement.apply(null, n);
        }
        return s.createElement.apply(null, i);
      }
      p.displayName = "MDXCreateElement";
    },
    1717: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => u,
          default: () => d,
          frontMatter: () => l,
          metadata: () => m,
          toc: () => c,
        });
      var s = i(7896),
        o = i(1461),
        r = (i(2784), i(876)),
        n = ["components"],
        l = {
          slug: "long-blog-post",
          title: "Long Blog Post",
          authors: "endi",
          tags: ["hello", "docusaurus"],
        },
        u = void 0,
        m = {
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
        a = { authorsImageUrls: [void 0] },
        c = [],
        p = { toc: c };
      function d(e) {
        var t = e.components,
          i = (0, o.Z)(e, n);
        return (0, r.kt)(
          "wrapper",
          (0, s.Z)({}, p, i, { components: t, mdxType: "MDXLayout" }),
          (0, r.kt)("p", null, "This is the summary of a very long blog post,"),
          (0, r.kt)(
            "p",
            null,
            "Use a ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "\x3c!--"),
            " ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "truncate"),
            " ",
            (0, r.kt)("inlineCode", { parentName: "p" }, "--\x3e"),
            " comment to limit blog post size in the list view."
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          ),
          (0, r.kt)(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
