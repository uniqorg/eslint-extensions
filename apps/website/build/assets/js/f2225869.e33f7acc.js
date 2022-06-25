"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [7112],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => u, kt: () => d });
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
      function l(e) {
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
      function a(e, t) {
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
      var s = n.createContext({}),
        p = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = "function" == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        u = function (e) {
          var t = p(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            u = a(e, ["components", "mdxType", "originalType", "parentName"]),
            m = p(r),
            d = i,
            y = m["".concat(s, ".").concat(d)] || m[d] || c[d] || o;
          return r
            ? n.createElement(y, l(l({ ref: t }, u), {}, { components: r }))
            : n.createElement(y, l({ ref: t }, u));
        });
      function d(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ("string" == typeof e || i) {
          var o = r.length,
            l = new Array(o);
          l[0] = m;
          var a = {};
          for (var s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : i),
            (l[1] = a);
          for (var p = 2; p < o; p++) l[p] = r[p];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = "MDXCreateElement";
    },
    92: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => c,
        });
      var n = r(7896),
        i = r(1461),
        o = (r(2784), r(876)),
        l = ["components"],
        a = { id: "no-require", title: "no-require", tags: ["No CommonJS"] },
        s = void 0,
        p = {
          unversionedId: "plugins/migrate-to-typescript/rules/no-require",
          id: "plugins/migrate-to-typescript/rules/no-require",
          title: "no-require",
          description: "Rule Details",
          source:
            "@site/docs/plugins/migrate-to-typescript/rules/no-require.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/no-require",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-require",
          draft: !1,
          tags: [
            {
              label: "No CommonJS",
              permalink: "/eslint-extensions/docs/tags/no-common-js",
            },
          ],
          version: "current",
          frontMatter: {
            id: "no-require",
            title: "no-require",
            tags: ["No CommonJS"],
          },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "no-esm-export-default",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-esm-export-default",
          },
          next: {
            title: "Introduction",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/configs/",
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
          { value: "Credit \ud83d\ude4f", id: "credit-", level: 4 },
        ],
        m = { toc: c };
      function d(e) {
        var t = e.components,
          r = (0, i.Z)(e, l);
        return (0, o.kt)(
          "wrapper",
          (0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h2", { id: "rule-details" }, "Rule Details"),
          (0, o.kt)(
            "p",
            null,
            "Disallows invocation of ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "require()"),
            "."
          ),
          (0, o.kt)(
            "p",
            null,
            "Prefer the newer ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "ES"),
            " modules style ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "import"),
            "s over ",
            (0, o.kt)("inlineCode", { parentName: "p" }, "require()"),
            "."
          ),
          (0, o.kt)(
            "p",
            null,
            "Examples of ",
            (0, o.kt)("strong", { parentName: "p" }, "correct"),
            " code for this rule \u2705"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// correct \u2705\nimport myModule from "my-module";\n'
            )
          ),
          (0, o.kt)(
            "p",
            null,
            "Examples of ",
            (0, o.kt)("strong", { parentName: "p" }, "incorrect"),
            " code for this rule \u26d4\ufe0f"
          ),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// incorrect \u26d4\ufe0f\nrequire("my-module");\nrequire(someVar);\nrequire;\n'
            )
          ),
          (0, o.kt)("h3", { id: "when-to-use-it" }, "When to use it"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "When migrating your project/codebase to use ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules - When migrating to ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "typescript"),
              " which supports and recommends to use ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules syntax."
            )
          ),
          (0, o.kt)(
            "h3",
            { id: "when-not-to-use-it" },
            "When ",
            (0, o.kt)("em", { parentName: "h3" }, "not"),
            " to use it"
          ),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "When your project is ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "nodejs"),
              " that runs on ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "javascript"),
              " only."
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              "When your front-end application supports ",
              (0, o.kt)("inlineCode", { parentName: "li" }, "RequireJS"),
              " explicitly."
            )
          ),
          (0, o.kt)("h4", { id: "credit-" }, "Credit \ud83d\ude4f"),
          (0, o.kt)(
            "sup",
            null,
            (0, o.kt)(
              "p",
              null,
              "Inspired with \ud83d\udc9c ",
              "\xa0",
              (0, o.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md",
                },
                "from typescript-eslint"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
