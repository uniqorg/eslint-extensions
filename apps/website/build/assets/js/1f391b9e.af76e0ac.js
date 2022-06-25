"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3085],
  {
    6157: (e, n, t) => {
      t.r(n), t.d(n, { default: () => u });
      var a = t(2784),
        l = t(6277),
        r = t(328),
        i = t(211),
        c = t(3982),
        o = t(5742),
        s = t(9589);
      const m = "mdxPageWrapper_SLvB";
      function u(e) {
        var n = e.content,
          t = n.metadata,
          u = t.title,
          d = t.description,
          v = t.frontMatter,
          f = v.wrapperClassName,
          g = v.hide_table_of_contents;
        return a.createElement(
          r.FG,
          {
            className: (0, l.Z)(
              null != f ? f : i.k.wrapper.mdxPages,
              i.k.page.mdxPage
            ),
          },
          a.createElement(r.d, { title: u, description: d }),
          a.createElement(
            c.Z,
            null,
            a.createElement(
              "main",
              { className: "container container--fluid margin-vert--lg" },
              a.createElement(
                "div",
                { className: (0, l.Z)("row", m) },
                a.createElement(
                  "div",
                  { className: (0, l.Z)("col", !g && "col--8") },
                  a.createElement(o.Z, null, a.createElement(n, null))
                ),
                !g &&
                  n.toc &&
                  a.createElement(
                    "div",
                    { className: "col col--2" },
                    a.createElement(s.Z, {
                      toc: n.toc,
                      minHeadingLevel: v.toc_min_heading_level,
                      maxHeadingLevel: v.toc_max_heading_level,
                    })
                  )
              )
            )
          )
        );
      }
    },
    9589: (e, n, t) => {
      t.d(n, { Z: () => m });
      var a = t(7896),
        l = t(1461),
        r = t(2784),
        i = t(6277),
        c = t(6986);
      const o = "tableOfContents_TN1Q";
      var s = ["className"];
      function m(e) {
        var n = e.className,
          t = (0, l.Z)(e, s);
        return r.createElement(
          "div",
          { className: (0, i.Z)(o, "thin-scrollbar", n) },
          r.createElement(
            c.Z,
            (0, a.Z)({}, t, {
              linkClassName: "table-of-contents__link toc-highlight",
              linkActiveClassName: "table-of-contents__link--active",
            })
          )
        );
      }
    },
    6986: (e, n, t) => {
      t.d(n, { Z: () => L });
      var a = t(7896),
        l = t(1461),
        r = t(2784),
        i = ["parentIndex"];
      function c(e) {
        var n = e.map(function (e) {
            return Object.assign({}, e, { parentIndex: -1, children: [] });
          }),
          t = Array(7).fill(-1);
        n.forEach(function (e, n) {
          var a = t.slice(2, e.level);
          (e.parentIndex = Math.max.apply(Math, a)), (t[e.level] = n);
        });
        var a = [];
        return (
          n.forEach(function (e) {
            var t = e.parentIndex,
              r = (0, l.Z)(e, i);
            t >= 0 ? n[t].children.push(r) : a.push(r);
          }),
          a
        );
      }
      function o(e) {
        var n = e.toc,
          t = e.minHeadingLevel,
          a = e.maxHeadingLevel;
        return n.flatMap(function (e) {
          var n = o({
            toc: e.children,
            minHeadingLevel: t,
            maxHeadingLevel: a,
          });
          return (function (e) {
            return e.level >= t && e.level <= a;
          })(e)
            ? [Object.assign({}, e, { children: n })]
            : n;
        });
      }
      var s = t(7683);
      function m(e) {
        var n = e.getBoundingClientRect();
        return n.top === n.bottom ? m(e.parentNode) : n;
      }
      function u(e, n) {
        var t,
          a,
          l = n.anchorTopOffset,
          r = e.find(function (e) {
            return m(e).top >= l;
          });
        return r
          ? (function (e) {
              return e.top > 0 && e.bottom < window.innerHeight / 2;
            })(m(r))
            ? r
            : null != (a = e[e.indexOf(r) - 1])
            ? a
            : null
          : null != (t = e[e.length - 1])
          ? t
          : null;
      }
      function d() {
        var e = (0, r.useRef)(0),
          n = (0, s.L)().navbar.hideOnScroll;
        return (
          (0, r.useEffect)(
            function () {
              e.current = n
                ? 0
                : document.querySelector(".navbar").clientHeight;
            },
            [n]
          ),
          e
        );
      }
      function v(e) {
        var n = (0, r.useRef)(void 0),
          t = d();
        (0, r.useEffect)(
          function () {
            if (!e) return function () {};
            var a = e.linkClassName,
              l = e.linkActiveClassName,
              r = e.minHeadingLevel,
              i = e.maxHeadingLevel;
            function c() {
              var e = (function (e) {
                  return Array.from(document.getElementsByClassName(e));
                })(a),
                c = (function (e) {
                  for (
                    var n = e.minHeadingLevel,
                      t = e.maxHeadingLevel,
                      a = [],
                      l = n;
                    l <= t;
                    l += 1
                  )
                    a.push("h" + l + ".anchor");
                  return Array.from(document.querySelectorAll(a.join()));
                })({ minHeadingLevel: r, maxHeadingLevel: i }),
                o = u(c, { anchorTopOffset: t.current }),
                s = e.find(function (e) {
                  return (
                    o &&
                    o.id ===
                      (function (e) {
                        return decodeURIComponent(
                          e.href.substring(e.href.indexOf("#") + 1)
                        );
                      })(e)
                  );
                });
              e.forEach(function (e) {
                !(function (e, t) {
                  t
                    ? (n.current &&
                        n.current !== e &&
                        n.current.classList.remove(l),
                      e.classList.add(l),
                      (n.current = e))
                    : e.classList.remove(l);
                })(e, e === s);
              });
            }
            return (
              document.addEventListener("scroll", c),
              document.addEventListener("resize", c),
              c(),
              function () {
                document.removeEventListener("scroll", c),
                  document.removeEventListener("resize", c);
              }
            );
          },
          [e, t]
        );
      }
      function f(e) {
        var n = e.toc,
          t = e.className,
          a = e.linkClassName,
          l = e.isChild;
        return n.length
          ? r.createElement(
              "ul",
              { className: l ? void 0 : t },
              n.map(function (e) {
                return r.createElement(
                  "li",
                  { key: e.id },
                  r.createElement("a", {
                    href: "#" + e.id,
                    className: null != a ? a : void 0,
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  r.createElement(f, {
                    isChild: !0,
                    toc: e.children,
                    className: t,
                    linkClassName: a,
                  })
                );
              })
            )
          : null;
      }
      const g = r.memo(f);
      var h = [
        "toc",
        "className",
        "linkClassName",
        "linkActiveClassName",
        "minHeadingLevel",
        "maxHeadingLevel",
      ];
      function L(e) {
        var n = e.toc,
          t = e.className,
          i =
            void 0 === t
              ? "table-of-contents table-of-contents__left-border"
              : t,
          m = e.linkClassName,
          u = void 0 === m ? "table-of-contents__link" : m,
          d = e.linkActiveClassName,
          f = void 0 === d ? void 0 : d,
          L = e.minHeadingLevel,
          N = e.maxHeadingLevel,
          p = (0, l.Z)(e, h),
          H = (0, s.L)(),
          E = null != L ? L : H.tableOfContents.minHeadingLevel,
          x = null != N ? N : H.tableOfContents.maxHeadingLevel,
          C = (function (e) {
            var n = e.toc,
              t = e.minHeadingLevel,
              a = e.maxHeadingLevel;
            return (0, r.useMemo)(
              function () {
                return o({ toc: c(n), minHeadingLevel: t, maxHeadingLevel: a });
              },
              [n, t, a]
            );
          })({ toc: n, minHeadingLevel: E, maxHeadingLevel: x });
        return (
          v(
            (0, r.useMemo)(
              function () {
                if (u && f)
                  return {
                    linkClassName: u,
                    linkActiveClassName: f,
                    minHeadingLevel: E,
                    maxHeadingLevel: x,
                  };
              },
              [u, f, E, x]
            )
          ),
          r.createElement(
            g,
            (0, a.Z)({ toc: C, className: i, linkClassName: u }, p)
          )
        );
      }
    },
  },
]);
