"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [5140],
  {
    876: (t, e, n) => {
      n.d(e, { Zo: () => c, kt: () => d });
      var r = n(2784);
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function p(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var a = r.createContext({}),
        l = function (t) {
          var e = r.useContext(a),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : s(s({}, e), t)), n;
        },
        c = function (t) {
          var e = l(t.components);
          return r.createElement(a.Provider, { value: e }, t.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return r.createElement(r.Fragment, {}, e);
          },
        },
        g = r.forwardRef(function (t, e) {
          var n = t.components,
            i = t.mdxType,
            o = t.originalType,
            a = t.parentName,
            c = p(t, ["components", "mdxType", "originalType", "parentName"]),
            g = l(n),
            d = i,
            y = g["".concat(a, ".").concat(d)] || g[d] || u[d] || o;
          return n
            ? r.createElement(y, s(s({ ref: e }, c), {}, { components: n }))
            : r.createElement(y, s({ ref: e }, c));
        });
      function d(t, e) {
        var n = arguments,
          i = e && e.mdxType;
        if ("string" == typeof t || i) {
          var o = n.length,
            s = new Array(o);
          s[0] = g;
          var p = {};
          for (var a in e) hasOwnProperty.call(e, a) && (p[a] = e[a]);
          (p.originalType = t),
            (p.mdxType = "string" == typeof t ? t : i),
            (s[1] = p);
          for (var l = 2; l < o; l++) s[l] = n[l];
          return r.createElement.apply(null, s);
        }
        return r.createElement.apply(null, n);
      }
      g.displayName = "MDXCreateElement";
    },
    3221: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => p,
          metadata: () => l,
          toc: () => u,
        });
      var r = n(7896),
        i = n(1461),
        o = (n(2784), n(876)),
        s = ["components"],
        p = { sidebar_position: 1 },
        a = "Tutorial Intro",
        l = {
          unversionedId: "plugins/migrate-to-typescript/configs/intro",
          id: "plugins/migrate-to-typescript/configs/intro",
          title: "Tutorial Intro",
          description:
            "Let's discover eslint-plugin-migrate-to-typescript in less than 5 minutes.",
          source: "@site/docs/plugins/migrate-to-typescript/configs/intro.md",
          sourceDirName: "plugins/migrate-to-typescript/configs",
          slug: "/plugins/migrate-to-typescript/configs/intro",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/intro",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "Introduction",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/",
          },
          next: {
            title: "node-js-with-ts",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/node-js-with-ts",
          },
        },
        c = {},
        u = [
          { value: "Getting Started", id: "getting-started", level: 2 },
          { value: "What you&#39;ll need", id: "what-youll-need", level: 3 },
          {
            value: "Add plugin to your existing eslintrc",
            id: "add-plugin-to-your-existing-eslintrc",
            level: 2,
          },
        ],
        g = { toc: u };
      function d(t) {
        var e = t.components,
          n = (0, i.Z)(t, s);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, g, n, { components: e, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "tutorial-intro" }, "Tutorial Intro"),
          (0, o.kt)(
            "p",
            null,
            "Let's discover ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "eslint-plugin-migrate-to-typescript in less than 5 minutes"
            ),
            "."
          ),
          (0, o.kt)("h2", { id: "getting-started" }, "Getting Started"),
          (0, o.kt)(
            "p",
            null,
            "Get started by ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "install plugin in your project"
            ),
            "."
          ),
          (0, o.kt)(
            "p",
            null,
            "with ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "npm")
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "# eslint-plugins depends on (peer-deps) your\n# project to have eslint and @typescript-eslint/parser\nnpm install --save-dev eslint @typescript-eslint/parser\nnpm install --save-dev eslint-plugin-migrate-to-typescript\n"
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "Or with ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "yarn")
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "yarn add -D eslint @typescript-eslint/parser\nyarn add -D eslint-plugin-migrate-to-typescript\n"
            )
          ),
          (0, o.kt)("h3", { id: "what-youll-need" }, "What you'll need"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "Using ",
              (0, o.kt)(
                "inlineCode",
                { parentName: "li" },
                "@typescript-eslint/parser"
              ),
              " as your ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "eslint"),
              " parser."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "depends on ",
              (0, o.kt)(
                "a",
                { parentName: "li", href: "https://nodejs.org/en/download/" },
                "Node.js"
              ),
              ", supported versions for ",
              (0, o.kt)(
                "inlineCode",
                { parentName: "li" },
                "@typescript-eslint/parser"
              ),
              " are:"
            )
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// from @typescript-eslint/parser 5.x.x package.json\n  "engines": {\n    "node": "^12.22.0 || ^14.17.0 || >=16.0.0"\n  },\n'
            )
          ),
          (0, o.kt)(
            "h2",
            { id: "add-plugin-to-your-existing-eslintrc" },
            "Add plugin to your existing eslintrc"
          ),
          (0, o.kt)("p", null, "For npm configuration"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// package.json\n{\n  ...,\n  "eslintConfig": {\n    ...,\n    "parser": "@typescript-eslint/parser",\n    "plugins": [..., "migrate-to-typescript"],\n    "extends": [\n      ...,\n      // for projects that starting/in the middle of migration to typescript\n      "migrate-to-typescript/js-with-ts",\n      // or\n      // for projects that are fully working with typescript\n      "migrate-to-typescript/ts-only",\n      // or\n      // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating\n      "migrate-to-typescript/js-only-and-ts-for-type-checking",\n    ]\n  }\n}\n'
            )
          ),
          (0, o.kt)("p", null, "For eslintrc.json"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// eslintrc.json\n{\n  ...,\n  "parser": "@typescript-eslint/parser",\n  "plugins": [..., "migrate-to-typescript"],\n  "extends": [\n    ...,\n    // for projects that starting/in the middle of migration to typescript\n    "migrate-to-typescript/js-with-ts",\n    // or\n    // for projects that are fully working with typescript\n    "migrate-to-typescript/ts-only",\n    // or\n    // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating\n    "migrate-to-typescript/js-only-and-ts-for-type-checking",\n  ],\n  ...\n}\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
