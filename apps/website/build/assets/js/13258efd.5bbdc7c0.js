"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [9244],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => m, kt: () => d });
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
      function i(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
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
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var l = r.createContext({}),
        p = function (e) {
          var t = r.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        m = function (e) {
          var t = p(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            m = s(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(n),
            d = o,
            f = u["".concat(l, ".").concat(d)] || u[d] || c[d] || i;
          return n
            ? r.createElement(f, a(a({ ref: t }, m), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, m));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = u;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : o),
            (a[1] = s);
          for (var p = 2; p < i; p++) a[p] = n[p];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      u.displayName = "MDXCreateElement";
    },
    1319: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => m,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => s,
          metadata: () => p,
          toc: () => c,
        });
      var r = n(7896),
        o = n(1461),
        i = (n(2784), n(876)),
        a = ["components"],
        s = {
          id: "no-commonjs-dynamic-import",
          title: "no-commonjs-dynamic-import",
          tags: ["No Hard Maintenance"],
        },
        l = void 0,
        p = {
          unversionedId:
            "plugins/migrate-to-typescript/rules/no-commonjs-dynamic-import",
          id: "plugins/migrate-to-typescript/rules/no-commonjs-dynamic-import",
          title: "no-commonjs-dynamic-import",
          description: "Rule Details",
          source:
            "@site/docs/plugins/migrate-to-typescript/rules/no-esm-dynamic-import.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-import",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-import",
          draft: !1,
          tags: [
            {
              label: "No Hard Maintenance",
              permalink: "/eslint-extensions/docs/tags/no-hard-maintenance",
            },
          ],
          version: "current",
          frontMatter: {
            id: "no-commonjs-dynamic-import",
            title: "no-commonjs-dynamic-import",
            tags: ["No Hard Maintenance"],
          },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "no-commonjs-module-exports",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-module-exports",
          },
          next: {
            title: "no-esm-export-default",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-esm-export-default",
          },
        },
        m = {},
        c = [
          { value: "Rule Details", id: "rule-details", level: 2 },
          { value: "When to use it", id: "when-to-use-it", level: 3 },
          {
            value: "When <em>not</em> to use it",
            id: "when-not-to-use-it",
            level: 3,
          },
          { value: "Credit \ud83d\ude4f", id: "credit-", level: 4 },
        ],
        u = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h2", { id: "rule-details" }, "Rule Details"),
          (0, i.kt)(
            "p",
            null,
            "The ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "import"),
            " keyword from ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "es"),
            " is used to import modules from different files. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used."
          ),
          (0, i.kt)(
            "p",
            null,
            "This rule checks every call to ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "import('xxxx')"),
            " that uses expressions for the module name argument."
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "correct"),
            " code for this rule \u2705"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// correct \u2705\nimport myModule from "my-module";\nimport { myModule } from "my-module";\nimport "my-module";\nimport("my-module");\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "incorrect"),
            " code for this rule \u26d4\ufe0f"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// incorrect \u26d4\ufe0f\nimport(name);\nimport("../" + name);\nimport(`../${name}`);\nimport(name());\n'
            )
          ),
          (0, i.kt)("h3", { id: "when-to-use-it" }, "When to use it"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "Use for every project that works with modules and is consistently being developed and maintained."
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "when-not-to-use-it" },
            "When ",
            (0, i.kt)("em", { parentName: "h3" }, "not"),
            " to use it"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "When writing specific script that should not execute often."
            )
          ),
          (0, i.kt)("h4", { id: "credit-" }, "Credit \ud83d\ude4f"),
          (0, i.kt)(
            "sup",
            null,
            (0, i.kt)(
              "p",
              null,
              "Inspired with \ud83d\udc9c ",
              "\xa0",
              (0, i.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md",
                },
                "from eslint-plugin-import"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
