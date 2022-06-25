"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [7918],
  {
    5803: (e, t, a) => {
      a.r(t), a.d(t, { default: () => ie });
      var n = a(2784),
        l = a(6277),
        r = a(328),
        i = a(7963),
        s = a(211),
        c = a(7896),
        o = a(1077),
        d = a(7066);
      function m(e) {
        var t = e.previous,
          a = e.next;
        return n.createElement(
          "nav",
          {
            className: "pagination-nav docusaurus-mt-lg",
            "aria-label": (0, o.I)({
              id: "theme.docs.paginator.navAriaLabel",
              message: "Docs pages navigation",
              description: "The ARIA label for the docs pagination",
            }),
          },
          t &&
            n.createElement(
              d.Z,
              (0, c.Z)({}, t, {
                subLabel: n.createElement(
                  o.Z,
                  {
                    id: "theme.docs.paginator.previous",
                    description:
                      "The label used to navigate to the previous doc",
                  },
                  "Previous"
                ),
              })
            ),
          a &&
            n.createElement(
              d.Z,
              (0, c.Z)({}, a, {
                subLabel: n.createElement(
                  o.Z,
                  {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                  },
                  "Next"
                ),
                isNext: !0,
              })
            )
        );
      }
      var u = a(7614),
        v = a(9817),
        b = a(1215),
        p = a(7949),
        h = a(5663);
      var f = {
        unreleased: function (e) {
          var t = e.siteTitle,
            a = e.versionMetadata;
          return n.createElement(
            o.Z,
            {
              id: "theme.docs.versions.unreleasedVersionLabel",
              description:
                "The label used to tell the user that he's browsing an unreleased doc version",
              values: {
                siteTitle: t,
                versionLabel: n.createElement("b", null, a.label),
              },
            },
            "This is unreleased documentation for {siteTitle} {versionLabel} version."
          );
        },
        unmaintained: function (e) {
          var t = e.siteTitle,
            a = e.versionMetadata;
          return n.createElement(
            o.Z,
            {
              id: "theme.docs.versions.unmaintainedVersionLabel",
              description:
                "The label used to tell the user that he's browsing an unmaintained doc version",
              values: {
                siteTitle: t,
                versionLabel: n.createElement("b", null, a.label),
              },
            },
            "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."
          );
        },
      };
      function g(e) {
        var t = f[e.versionMetadata.banner];
        return n.createElement(t, e);
      }
      function E(e) {
        var t = e.versionLabel,
          a = e.to,
          l = e.onClick;
        return n.createElement(
          o.Z,
          {
            id: "theme.docs.versions.latestVersionSuggestionLabel",
            description:
              "The label used to tell the user to check the latest version",
            values: {
              versionLabel: t,
              latestVersionLink: n.createElement(
                "b",
                null,
                n.createElement(
                  v.Z,
                  { to: a, onClick: l },
                  n.createElement(
                    o.Z,
                    {
                      id: "theme.docs.versions.latestVersionLinkLabel",
                      description:
                        "The label used for the latest version suggestion link label",
                    },
                    "latest version"
                  )
                )
              ),
            },
          },
          "For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."
        );
      }
      function L(e) {
        var t,
          a = e.className,
          r = e.versionMetadata,
          i = (0, u.Z)().siteConfig.title,
          c = (0, b.gA)({ failfast: !0 }).pluginId,
          o = (0, p.J)(c).savePreferredVersionName,
          d = (0, b.Jo)(c),
          m = d.latestDocSuggestion,
          v = d.latestVersionSuggestion,
          h =
            null != m
              ? m
              : (t = v).docs.find(function (e) {
                  return e.id === t.mainDocId;
                });
        return n.createElement(
          "div",
          {
            className: (0, l.Z)(
              a,
              s.k.docs.docVersionBanner,
              "alert alert--warning margin-bottom--md"
            ),
            role: "alert",
          },
          n.createElement(
            "div",
            null,
            n.createElement(g, { siteTitle: i, versionMetadata: r })
          ),
          n.createElement(
            "div",
            { className: "margin-top--md" },
            n.createElement(E, {
              versionLabel: v.label,
              to: h.path,
              onClick: function () {
                return o(v.name);
              },
            })
          )
        );
      }
      function N(e) {
        var t = e.className,
          a = (0, h.E)();
        return a.banner
          ? n.createElement(L, { className: t, versionMetadata: a })
          : null;
      }
      function Z(e) {
        var t = e.className,
          a = (0, h.E)();
        return a.badge
          ? n.createElement(
              "span",
              {
                className: (0, l.Z)(
                  t,
                  s.k.docs.docVersionBadge,
                  "badge badge--secondary"
                ),
              },
              n.createElement(
                o.Z,
                {
                  id: "theme.docs.versionBadge.label",
                  values: { versionLabel: a.label },
                },
                "Version: {versionLabel}"
              )
            )
          : null;
      }
      function k(e) {
        var t = e.lastUpdatedAt,
          a = e.formattedLastUpdatedAt;
        return n.createElement(
          o.Z,
          {
            id: "theme.lastUpdated.atDate",
            description:
              "The words used to describe on which date a page has been last updated",
            values: {
              date: n.createElement(
                "b",
                null,
                n.createElement(
                  "time",
                  { dateTime: new Date(1e3 * t).toISOString() },
                  a
                )
              ),
            },
          },
          " on {date}"
        );
      }
      function _(e) {
        var t = e.lastUpdatedBy;
        return n.createElement(
          o.Z,
          {
            id: "theme.lastUpdated.byUser",
            description:
              "The words used to describe by who the page has been last updated",
            values: { user: n.createElement("b", null, t) },
          },
          " by {user}"
        );
      }
      function C(e) {
        var t = e.lastUpdatedAt,
          a = e.formattedLastUpdatedAt,
          l = e.lastUpdatedBy;
        return n.createElement(
          "span",
          { className: s.k.common.lastUpdated },
          n.createElement(
            o.Z,
            {
              id: "theme.lastUpdated.lastUpdatedAtBy",
              description:
                "The sentence used to display when a page has been last updated, and by who",
              values: {
                atDate:
                  t && a
                    ? n.createElement(k, {
                        lastUpdatedAt: t,
                        formattedLastUpdatedAt: a,
                      })
                    : "",
                byUser: l ? n.createElement(_, { lastUpdatedBy: l }) : "",
              },
            },
            "Last updated{atDate}{byUser}"
          ),
          !1
        );
      }
      var x = a(5893),
        H = a(6643);
      const T = "lastUpdated_w6xA";
      function U(e) {
        return n.createElement(
          "div",
          {
            className: (0, l.Z)(
              s.k.docs.docFooterTagsRow,
              "row margin-bottom--sm"
            ),
          },
          n.createElement("div", { className: "col" }, n.createElement(H.Z, e))
        );
      }
      function y(e) {
        var t = e.editUrl,
          a = e.lastUpdatedAt,
          r = e.lastUpdatedBy,
          i = e.formattedLastUpdatedAt;
        return n.createElement(
          "div",
          { className: (0, l.Z)(s.k.docs.docFooterEditMetaRow, "row") },
          n.createElement(
            "div",
            { className: "col" },
            t && n.createElement(x.Z, { editUrl: t })
          ),
          n.createElement(
            "div",
            { className: (0, l.Z)("col", T) },
            (a || r) &&
              n.createElement(C, {
                lastUpdatedAt: a,
                formattedLastUpdatedAt: i,
                lastUpdatedBy: r,
              })
          )
        );
      }
      function A(e) {
        var t = e.content.metadata,
          a = t.editUrl,
          r = t.lastUpdatedAt,
          i = t.formattedLastUpdatedAt,
          c = t.lastUpdatedBy,
          o = t.tags,
          d = o.length > 0,
          m = !!(a || r || c);
        return d || m
          ? n.createElement(
              "footer",
              { className: (0, l.Z)(s.k.docs.docFooter, "docusaurus-mt-lg") },
              d && n.createElement(U, { tags: o }),
              m &&
                n.createElement(y, {
                  editUrl: a,
                  lastUpdatedAt: r,
                  lastUpdatedBy: c,
                  formattedLastUpdatedAt: i,
                })
            )
          : null;
      }
      var w = a(9589),
        I = a(8698),
        M = a(6986),
        B = a(1461);
      const O = "tocCollapsibleButton_htYj",
        S = "tocCollapsibleButtonExpanded_pAh7";
      var P = ["collapsed"];
      function V(e) {
        var t = e.collapsed,
          a = (0, B.Z)(e, P);
        return n.createElement(
          "button",
          (0, c.Z)({ type: "button" }, a, {
            className: (0, l.Z)("clean-btn", O, !t && S, a.className),
          }),
          n.createElement(
            o.Z,
            {
              id: "theme.TOCCollapsible.toggleButtonLabel",
              description:
                "The label used by the button on the collapsible TOC component",
            },
            "On this page"
          )
        );
      }
      const R = "tocCollapsible_O_Qc",
        D = "tocCollapsibleContent_SlnY",
        q = "tocCollapsibleExpanded_klrc";
      function z(e) {
        var t = e.toc,
          a = e.className,
          r = e.minHeadingLevel,
          i = e.maxHeadingLevel,
          s = (0, I.u)({ initialState: !0 }),
          c = s.collapsed,
          o = s.toggleCollapsed;
        return n.createElement(
          "div",
          { className: (0, l.Z)(R, !c && q, a) },
          n.createElement(V, { collapsed: c, onClick: o }),
          n.createElement(
            I.z,
            { lazy: !0, className: D, collapsed: c },
            n.createElement(M.Z, {
              toc: t,
              minHeadingLevel: r,
              maxHeadingLevel: i,
            })
          )
        );
      }
      var F = a(8680),
        j = a(2267),
        J = a(7661),
        Q = a(77);
      function Y(e) {
        return n.createElement(
          "svg",
          (0, c.Z)({ viewBox: "0 0 24 24" }, e),
          n.createElement("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor",
          })
        );
      }
      const G = {
        breadcrumbsContainer: "breadcrumbsContainer_zCmv",
        breadcrumbHomeIcon: "breadcrumbHomeIcon_tMMf",
      };
      function W(e) {
        var t = e.children,
          a = e.href,
          l = "breadcrumbs__link";
        return e.isLast
          ? n.createElement("span", { className: l, itemProp: "name" }, t)
          : a
          ? n.createElement(
              v.Z,
              { className: l, href: a, itemProp: "item" },
              n.createElement("span", { itemProp: "name" }, t)
            )
          : n.createElement("span", { className: l }, t);
      }
      function X(e) {
        var t = e.children,
          a = e.active,
          r = e.index,
          i = e.addMicrodata;
        return n.createElement(
          "li",
          (0, c.Z)(
            {},
            i && {
              itemScope: !0,
              itemProp: "itemListElement",
              itemType: "https://schema.org/ListItem",
            },
            {
              className: (0, l.Z)("breadcrumbs__item", {
                "breadcrumbs__item--active": a,
              }),
            }
          ),
          t,
          n.createElement("meta", {
            itemProp: "position",
            content: String(r + 1),
          })
        );
      }
      function K() {
        var e = (0, Q.Z)("/");
        return n.createElement(
          "li",
          { className: "breadcrumbs__item" },
          n.createElement(
            v.Z,
            {
              "aria-label": (0, o.I)({
                id: "theme.docs.breadcrumbs.home",
                message: "Home page",
                description:
                  "The ARIA label for the home page in the breadcrumbs",
              }),
              className: (0, l.Z)("breadcrumbs__link", G.breadcrumbsItemLink),
              href: e,
            },
            n.createElement(Y, { className: G.breadcrumbHomeIcon })
          )
        );
      }
      function $() {
        var e = (0, j.s1)(),
          t = (0, J.Ns)();
        return e
          ? n.createElement(
              "nav",
              {
                className: (0, l.Z)(
                  s.k.docs.docBreadcrumbs,
                  G.breadcrumbsContainer
                ),
                "aria-label": (0, o.I)({
                  id: "theme.docs.breadcrumbs.navAriaLabel",
                  message: "Breadcrumbs",
                  description: "The ARIA label for the breadcrumbs",
                }),
              },
              n.createElement(
                "ul",
                {
                  className: "breadcrumbs",
                  itemScope: !0,
                  itemType: "https://schema.org/BreadcrumbList",
                },
                t && n.createElement(K, null),
                e.map(function (t, a) {
                  var l = a === e.length - 1;
                  return n.createElement(
                    X,
                    { key: a, active: l, index: a, addMicrodata: !!t.href },
                    n.createElement(W, { href: t.href, isLast: l }, t.label)
                  );
                })
              )
            )
          : null;
      }
      var ee = a(5742);
      const te = "docItemContainer_yxO3",
        ae = "docItemCol_h7Uf",
        ne = "tocMobile_AFi3";
      function le(e) {
        var t,
          a = e.content,
          l = a.metadata,
          i = a.frontMatter,
          s = a.assets,
          c = i.keywords,
          o = l.description,
          d = l.title,
          m = null != (t = s.image) ? t : i.image;
        return n.createElement(r.d, {
          title: d,
          description: o,
          keywords: c,
          image: m,
        });
      }
      function re(e) {
        var t = e.content,
          a = t.metadata,
          r = t.frontMatter,
          c = r.hide_title,
          o = r.hide_table_of_contents,
          d = r.toc_min_heading_level,
          u = r.toc_max_heading_level,
          v = a.title,
          b = !c && void 0 === t.contentTitle,
          p = (0, i.i)(),
          h = !o && t.toc && t.toc.length > 0,
          f = h && ("desktop" === p || "ssr" === p);
        return n.createElement(
          "div",
          { className: "row" },
          n.createElement(
            "div",
            { className: (0, l.Z)("col", !o && ae) },
            n.createElement(N, null),
            n.createElement(
              "div",
              { className: te },
              n.createElement(
                "article",
                null,
                n.createElement($, null),
                n.createElement(Z, null),
                h &&
                  n.createElement(z, {
                    toc: t.toc,
                    minHeadingLevel: d,
                    maxHeadingLevel: u,
                    className: (0, l.Z)(s.k.docs.docTocMobile, ne),
                  }),
                n.createElement(
                  "div",
                  { className: (0, l.Z)(s.k.docs.docMarkdown, "markdown") },
                  b &&
                    n.createElement(
                      "header",
                      null,
                      n.createElement(F.Z, { as: "h1" }, v)
                    ),
                  n.createElement(ee.Z, null, n.createElement(t, null))
                ),
                n.createElement(A, e)
              ),
              n.createElement(m, { previous: a.previous, next: a.next })
            )
          ),
          f &&
            n.createElement(
              "div",
              { className: "col col--3" },
              n.createElement(w.Z, {
                toc: t.toc,
                minHeadingLevel: d,
                maxHeadingLevel: u,
                className: s.k.docs.docTocDesktop,
              })
            )
        );
      }
      function ie(e) {
        var t = "docs-doc-id-" + e.content.metadata.unversionedId;
        return n.createElement(
          r.FG,
          { className: t },
          n.createElement(le, e),
          n.createElement(re, e)
        );
      }
    },
    5893: (e, t, a) => {
      a.d(t, { Z: () => u });
      var n = a(2784),
        l = a(1077),
        r = a(211),
        i = a(7896),
        s = a(1461),
        c = a(6277);
      const o = "iconEdit_taBP";
      var d = ["className"];
      function m(e) {
        var t = e.className,
          a = (0, s.Z)(e, d);
        return n.createElement(
          "svg",
          (0, i.Z)(
            {
              fill: "currentColor",
              height: "20",
              width: "20",
              viewBox: "0 0 40 40",
              className: (0, c.Z)(o, t),
              "aria-hidden": "true",
            },
            a
          ),
          n.createElement(
            "g",
            null,
            n.createElement("path", {
              d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z",
            })
          )
        );
      }
      function u(e) {
        var t = e.editUrl;
        return n.createElement(
          "a",
          {
            href: t,
            target: "_blank",
            rel: "noreferrer noopener",
            className: r.k.common.editThisPage,
          },
          n.createElement(m, null),
          n.createElement(
            l.Z,
            {
              id: "theme.common.editThisPage",
              description: "The link label to edit the current page",
            },
            "Edit this page"
          )
        );
      }
    },
    7066: (e, t, a) => {
      a.d(t, { Z: () => i });
      var n = a(2784),
        l = a(6277),
        r = a(9817);
      function i(e) {
        var t = e.permalink,
          a = e.title,
          i = e.subLabel,
          s = e.isNext;
        return n.createElement(
          r.Z,
          {
            className: (0, l.Z)(
              "pagination-nav__link",
              s ? "pagination-nav__link--next" : "pagination-nav__link--prev"
            ),
            to: t,
          },
          i &&
            n.createElement(
              "div",
              { className: "pagination-nav__sublabel" },
              i
            ),
          n.createElement("div", { className: "pagination-nav__label" }, a)
        );
      }
    },
    9589: (e, t, a) => {
      a.d(t, { Z: () => d });
      var n = a(7896),
        l = a(1461),
        r = a(2784),
        i = a(6277),
        s = a(6986);
      const c = "tableOfContents_TN1Q";
      var o = ["className"];
      function d(e) {
        var t = e.className,
          a = (0, l.Z)(e, o);
        return r.createElement(
          "div",
          { className: (0, i.Z)(c, "thin-scrollbar", t) },
          r.createElement(
            s.Z,
            (0, n.Z)({}, a, {
              linkClassName: "table-of-contents__link toc-highlight",
              linkActiveClassName: "table-of-contents__link--active",
            })
          )
        );
      }
    },
    6986: (e, t, a) => {
      a.d(t, { Z: () => f });
      var n = a(7896),
        l = a(1461),
        r = a(2784),
        i = ["parentIndex"];
      function s(e) {
        var t = e.map(function (e) {
            return Object.assign({}, e, { parentIndex: -1, children: [] });
          }),
          a = Array(7).fill(-1);
        t.forEach(function (e, t) {
          var n = a.slice(2, e.level);
          (e.parentIndex = Math.max.apply(Math, n)), (a[e.level] = t);
        });
        var n = [];
        return (
          t.forEach(function (e) {
            var a = e.parentIndex,
              r = (0, l.Z)(e, i);
            a >= 0 ? t[a].children.push(r) : n.push(r);
          }),
          n
        );
      }
      function c(e) {
        var t = e.toc,
          a = e.minHeadingLevel,
          n = e.maxHeadingLevel;
        return t.flatMap(function (e) {
          var t = c({
            toc: e.children,
            minHeadingLevel: a,
            maxHeadingLevel: n,
          });
          return (function (e) {
            return e.level >= a && e.level <= n;
          })(e)
            ? [Object.assign({}, e, { children: t })]
            : t;
        });
      }
      var o = a(7683);
      function d(e) {
        var t = e.getBoundingClientRect();
        return t.top === t.bottom ? d(e.parentNode) : t;
      }
      function m(e, t) {
        var a,
          n,
          l = t.anchorTopOffset,
          r = e.find(function (e) {
            return d(e).top >= l;
          });
        return r
          ? (function (e) {
              return e.top > 0 && e.bottom < window.innerHeight / 2;
            })(d(r))
            ? r
            : null != (n = e[e.indexOf(r) - 1])
            ? n
            : null
          : null != (a = e[e.length - 1])
          ? a
          : null;
      }
      function u() {
        var e = (0, r.useRef)(0),
          t = (0, o.L)().navbar.hideOnScroll;
        return (
          (0, r.useEffect)(
            function () {
              e.current = t
                ? 0
                : document.querySelector(".navbar").clientHeight;
            },
            [t]
          ),
          e
        );
      }
      function v(e) {
        var t = (0, r.useRef)(void 0),
          a = u();
        (0, r.useEffect)(
          function () {
            if (!e) return function () {};
            var n = e.linkClassName,
              l = e.linkActiveClassName,
              r = e.minHeadingLevel,
              i = e.maxHeadingLevel;
            function s() {
              var e = (function (e) {
                  return Array.from(document.getElementsByClassName(e));
                })(n),
                s = (function (e) {
                  for (
                    var t = e.minHeadingLevel,
                      a = e.maxHeadingLevel,
                      n = [],
                      l = t;
                    l <= a;
                    l += 1
                  )
                    n.push("h" + l + ".anchor");
                  return Array.from(document.querySelectorAll(n.join()));
                })({ minHeadingLevel: r, maxHeadingLevel: i }),
                c = m(s, { anchorTopOffset: a.current }),
                o = e.find(function (e) {
                  return (
                    c &&
                    c.id ===
                      (function (e) {
                        return decodeURIComponent(
                          e.href.substring(e.href.indexOf("#") + 1)
                        );
                      })(e)
                  );
                });
              e.forEach(function (e) {
                !(function (e, a) {
                  a
                    ? (t.current &&
                        t.current !== e &&
                        t.current.classList.remove(l),
                      e.classList.add(l),
                      (t.current = e))
                    : e.classList.remove(l);
                })(e, e === o);
              });
            }
            return (
              document.addEventListener("scroll", s),
              document.addEventListener("resize", s),
              s(),
              function () {
                document.removeEventListener("scroll", s),
                  document.removeEventListener("resize", s);
              }
            );
          },
          [e, a]
        );
      }
      function b(e) {
        var t = e.toc,
          a = e.className,
          n = e.linkClassName,
          l = e.isChild;
        return t.length
          ? r.createElement(
              "ul",
              { className: l ? void 0 : a },
              t.map(function (e) {
                return r.createElement(
                  "li",
                  { key: e.id },
                  r.createElement("a", {
                    href: "#" + e.id,
                    className: null != n ? n : void 0,
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  r.createElement(b, {
                    isChild: !0,
                    toc: e.children,
                    className: a,
                    linkClassName: n,
                  })
                );
              })
            )
          : null;
      }
      const p = r.memo(b);
      var h = [
        "toc",
        "className",
        "linkClassName",
        "linkActiveClassName",
        "minHeadingLevel",
        "maxHeadingLevel",
      ];
      function f(e) {
        var t = e.toc,
          a = e.className,
          i =
            void 0 === a
              ? "table-of-contents table-of-contents__left-border"
              : a,
          d = e.linkClassName,
          m = void 0 === d ? "table-of-contents__link" : d,
          u = e.linkActiveClassName,
          b = void 0 === u ? void 0 : u,
          f = e.minHeadingLevel,
          g = e.maxHeadingLevel,
          E = (0, l.Z)(e, h),
          L = (0, o.L)(),
          N = null != f ? f : L.tableOfContents.minHeadingLevel,
          Z = null != g ? g : L.tableOfContents.maxHeadingLevel,
          k = (function (e) {
            var t = e.toc,
              a = e.minHeadingLevel,
              n = e.maxHeadingLevel;
            return (0, r.useMemo)(
              function () {
                return c({ toc: s(t), minHeadingLevel: a, maxHeadingLevel: n });
              },
              [t, a, n]
            );
          })({ toc: t, minHeadingLevel: N, maxHeadingLevel: Z });
        return (
          v(
            (0, r.useMemo)(
              function () {
                if (m && b)
                  return {
                    linkClassName: m,
                    linkActiveClassName: b,
                    minHeadingLevel: N,
                    maxHeadingLevel: Z,
                  };
              },
              [m, b, N, Z]
            )
          ),
          r.createElement(
            p,
            (0, n.Z)({ toc: k, className: i, linkClassName: m }, E)
          )
        );
      }
    },
    2321: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(2784),
        l = a(6277),
        r = a(9817);
      const i = "tag_qE9H",
        s = "tagRegular_aHXt",
        c = "tagWithCount_UC8q";
      function o(e) {
        var t = e.permalink,
          a = e.label,
          o = e.count;
        return n.createElement(
          r.Z,
          { href: t, className: (0, l.Z)(i, o ? c : s) },
          a,
          o && n.createElement("span", null, o)
        );
      }
    },
    6643: (e, t, a) => {
      a.d(t, { Z: () => o });
      var n = a(2784),
        l = a(6277),
        r = a(1077),
        i = a(2321);
      const s = "tags_q74f",
        c = "tag_lSC7";
      function o(e) {
        var t = e.tags;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "b",
            null,
            n.createElement(
              r.Z,
              {
                id: "theme.tags.tagsListLabel",
                description: "The label alongside a tag list",
              },
              "Tags:"
            )
          ),
          n.createElement(
            "ul",
            { className: (0, l.Z)(s, "padding--none", "margin-left--sm") },
            t.map(function (e) {
              var t = e.label,
                a = e.permalink;
              return n.createElement(
                "li",
                { key: a, className: c },
                n.createElement(i.Z, { label: t, permalink: a })
              );
            })
          )
        );
      }
    },
    5663: (e, t, a) => {
      a.d(t, { E: () => s, q: () => i });
      var n = a(2784),
        l = a(3364),
        r = n.createContext(null);
      function i(e) {
        var t = e.children,
          a = e.version;
        return n.createElement(r.Provider, { value: a }, t);
      }
      function s() {
        var e = (0, n.useContext)(r);
        if (null === e) throw new l.i6("DocsVersionProvider");
        return e;
      }
    },
  },
]);
