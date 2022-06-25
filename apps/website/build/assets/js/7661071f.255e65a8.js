"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [9642],
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
      function l(e) {
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
      function s(e, t) {
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
      var u = r.createContext({}),
        i = function (e) {
          var t = r.useContext(u),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = i(e.components);
          return r.createElement(u.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        g = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            u = e.parentName,
            c = s(e, ["components", "mdxType", "originalType", "parentName"]),
            g = i(n),
            m = o,
            b = g["".concat(u, ".").concat(m)] || g[m] || p[m] || a;
          return n
            ? r.createElement(b, l(l({ ref: t }, c), {}, { components: n }))
            : r.createElement(b, l({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            l = new Array(a);
          l[0] = g;
          var s = {};
          for (var u in t) hasOwnProperty.call(t, u) && (s[u] = t[u]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (l[1] = s);
          for (var i = 2; i < a; i++) l[i] = n[i];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    2843: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => u,
          default: () => m,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => p,
        });
      var r = n(7896),
        o = n(1461),
        a = (n(2784), n(876)),
        l = ["components"],
        s = {
          slug: "welcome",
          title: "Welcome",
          authors: ["slorber", "yangshun"],
          tags: ["facebook", "hello", "docusaurus"],
        },
        u = void 0,
        i = {
          permalink: "/eslint-extensions/blog/welcome",
          source: "@site/blog/2021-08-26-welcome/index.md",
          title: "Welcome",
          description:
            "Docusaurus blogging features are powered by the blog plugin.",
          date: "2021-08-26T00:00:00.000Z",
          formattedDate: "August 26, 2021",
          tags: [
            {
              label: "facebook",
              permalink: "/eslint-extensions/blog/tags/facebook",
            },
            { label: "hello", permalink: "/eslint-extensions/blog/tags/hello" },
            {
              label: "docusaurus",
              permalink: "/eslint-extensions/blog/tags/docusaurus",
            },
          ],
          readingTime: 0.405,
          truncated: !1,
          authors: [
            {
              name: "S\xe9bastien Lorber",
              title: "Docusaurus maintainer",
              url: "https://sebastienlorber.com",
              imageURL: "https://github.com/slorber.png",
              key: "slorber",
            },
            {
              name: "Yangshun Tay",
              title: "Front End Engineer @ Facebook",
              url: "https://github.com/yangshun",
              imageURL: "https://github.com/yangshun.png",
              key: "yangshun",
            },
          ],
          frontMatter: {
            slug: "welcome",
            title: "Welcome",
            authors: ["slorber", "yangshun"],
            tags: ["facebook", "hello", "docusaurus"],
          },
          nextItem: {
            title: "MDX Blog Post",
            permalink: "/eslint-extensions/blog/mdx-blog-post",
          },
        },
        c = { authorsImageUrls: [void 0, void 0] },
        p = [],
        g = { toc: p };
      function m(e) {
        var t = e.components,
          s = (0, o.Z)(e, l);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, g, s, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "a",
              { parentName: "p", href: "https://docusaurus.io/docs/blog" },
              "Docusaurus blogging features"
            ),
            " are powered by the ",
            (0, a.kt)(
              "a",
              {
                parentName: "p",
                href: "https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog",
              },
              "blog plugin"
            ),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "Simply add Markdown files (or folders) to the ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "blog"),
            " directory."
          ),
          (0, a.kt)(
            "p",
            null,
            "Regular blog authors can be added to ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "authors.yml"),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "The blog post date can be extracted from filenames, such as:"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "2019-05-30-welcome.md"
              )
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "2019-05-30-welcome/index.md"
              )
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "A blog post folder can be convenient to co-locate blog post images:"
          ),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)("img", {
              alt: "Docusaurus Plushie",
              src: n(1308).Z,
              width: "1500",
              height: "500",
            })
          ),
          (0, a.kt)("p", null, "The blog supports tags as well!"),
          (0, a.kt)(
            "p",
            null,
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "And if you don't want a blog"
            ),
            ": just delete this directory, and use ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "blog: false"),
            " in your Docusaurus config."
          )
        );
      }
      m.isMDXComponent = !0;
    },
    1308: (e, t, n) => {
      n.d(t, { Z: () => r });
      const r =
        n.p +
        "assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg";
    },
  },
]);
