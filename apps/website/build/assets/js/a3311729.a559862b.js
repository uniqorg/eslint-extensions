"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [7416],
  {
    876: (e, t, n) => {
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
      function i(e) {
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
        p = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        u = function (e) {
          var t = p(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        c = {
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
            m = p(n),
            d = o,
            f = m["".concat(s, ".").concat(d)] || m[d] || c[d] || a;
          return n
            ? r.createElement(f, i(i({ ref: t }, u), {}, { components: n }))
            : r.createElement(f, i({ ref: t }, u));
        });
      function d(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ("string" == typeof e || o) {
          var a = n.length,
            i = new Array(a);
          i[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : o),
            (i[1] = l);
          for (var p = 2; p < a; p++) i[p] = n[p];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    28: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => u,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => l,
          metadata: () => p,
          toc: () => c,
        });
      var r = n(7896),
        o = n(1461),
        a = (n(2784), n(876)),
        i = ["components"],
        l = {
          id: "no-esm-export-default",
          title: "no-esm-export-default",
          tags: ["No Hard Maintenance", "No Regression"],
        },
        s = void 0,
        p = {
          unversionedId:
            "plugins/migrate-to-typescript/rules/no-esm-export-default",
          id: "plugins/migrate-to-typescript/rules/no-esm-export-default",
          title: "no-esm-export-default",
          description: "Rule Details",
          source:
            "@site/docs/plugins/migrate-to-typescript/rules/no-esm-export-default.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/no-esm-export-default",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-esm-export-default",
          draft: !1,
          tags: [
            {
              label: "No Hard Maintenance",
              permalink: "/eslint-extensions/docs/tags/no-hard-maintenance",
            },
            {
              label: "No Regression",
              permalink: "/eslint-extensions/docs/tags/no-regression",
            },
          ],
          version: "current",
          frontMatter: {
            id: "no-esm-export-default",
            title: "no-esm-export-default",
            tags: ["No Hard Maintenance", "No Regression"],
          },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "no-commonjs-dynamic-import",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-import",
          },
          next: {
            title: "no-require",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-require",
          },
        },
        u = {},
        c = [
          { value: "Rule Details", id: "rule-details", level: 2 },
          { value: "When to use it", id: "when-to-use-it", level: 3 },
          {
            value: "When <em>not</em> to use it",
            id: "when-not-to-use-it",
            level: 3,
          },
          {
            value: "How to use it manually (not as part of a config)",
            id: "how-to-use-it-manually-not-as-part-of-a-config",
            level: 3,
          },
          { value: "Credit \ud83d\ude4f", id: "credit-", level: 4 },
        ],
        m = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, o.Z)(e, i);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, a.kt)("h2", { id: "rule-details" }, "Rule Details"),
          (0, a.kt)("p", null, "Prohibit default exports."),
          (0, a.kt)(
            "p",
            null,
            "Examples of ",
            (0, a.kt)("strong", { parentName: "p" }, "correct"),
            " code for this rule \u2705"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              "export const x = 1;\nexport function myFunc() {}\n// default\nexport default = {}\n// TS exclusive examples\nexport interface INum {\n  num: number;\n}\nexport enum EMyEnum {\n  First = 1,\n}\n// typescript wrapper for commonjs export\n// (this is not a native ESM syntax!)\nexport = {}\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Examples of ",
            (0, a.kt)("strong", { parentName: "p" }, "incorrect"),
            " code for this rule \u26d4\ufe0f"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// incorrect \u26d4\ufe0f\nexport default {};\nexport default someVar;\nexport default "primitive";\nexport default () => {};\n'
            )
          ),
          (0, a.kt)("h3", { id: "when-to-use-it" }, "When to use it"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Your project contains both ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "commonjs"),
              " modules and ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules, happens most commonly in projects that contains both ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "JavaScript"),
              " and ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "TypeScript"),
              ", using ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "export default"),
              " might cause unexpected behaviors, more info at ",
              (0, a.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://www.typescriptlang.org/tsconfig#esModuleInterop",
                },
                "https://www.typescriptlang.org/tsconfig#esModuleInterop"
              ),
              "."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "You just don't like the ES modules approach for ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "export default"),
              "."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Using ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "named"),
              " exports support naming consistency and because of that, make your codebase more searchable while developing with an IDE."
            )
          ),
          (0, a.kt)(
            "h3",
            { id: "when-not-to-use-it" },
            "When ",
            (0, a.kt)("em", { parentName: "h3" }, "not"),
            " to use it"
          ),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              'When preferring modules that have a single export to "export default" ',
              (0, a.kt)("em", { parentName: "li" }, "plus"),
              " the project is fully using ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules, so no mix between ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "commonjs"),
              " modules and ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules."
            )
          ),
          (0, a.kt)(
            "h3",
            { id: "how-to-use-it-manually-not-as-part-of-a-config" },
            "How to use it manually (not as part of a config)"
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n    // eslintrc.json\n    ...,\n    "rules": {\n        "migrate-to-typescript/no-commonjs-module-exports": "warn"\n    },\n    ...more properties\n}\n// set to "warn" to push your project into full migration to esm\n// set to "error" when your project is fully esm\n'
            )
          ),
          (0, a.kt)("h4", { id: "credit-" }, "Credit \ud83d\ude4f"),
          (0, a.kt)(
            "sup",
            null,
            (0, a.kt)(
              "p",
              null,
              "Inspired with \ud83d\udc9c ",
              "\xa0",
              (0, a.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md",
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
