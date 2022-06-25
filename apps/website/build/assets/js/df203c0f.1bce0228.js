"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [9924],
  {
    6116: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var l = a(2784),
        r = a(6277),
        n = a(9817),
        c = a(7239),
        o = a(328),
        s = a(211),
        i = a(1077),
        u = a(3982),
        g = a(4390);
      function m(e) {
        var t = e.doc;
        return l.createElement(
          "article",
          { className: "margin-vert--lg" },
          l.createElement(
            n.Z,
            { to: t.permalink },
            l.createElement("h2", null, t.title)
          ),
          t.description && l.createElement("p", null, t.description)
        );
      }
      function d(e) {
        var t,
          a = e.tag,
          d =
            ((t = (0, c.c)().selectMessage),
            function (e) {
              return t(
                e,
                (0, i.I)(
                  {
                    id: "theme.docs.tagDocListPageTitle.nDocsTagged",
                    description:
                      'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: "One doc tagged|{count} docs tagged",
                  },
                  { count: e }
                )
              );
            }),
          p = (0, i.I)(
            {
              id: "theme.docs.tagDocListPageTitle",
              description: "The title of the page for a docs tag",
              message: '{nDocsTagged} with "{tagName}"',
            },
            { nDocsTagged: d(a.count), tagName: a.label }
          );
        return l.createElement(
          o.FG,
          {
            className: (0, r.Z)(
              s.k.wrapper.docsPages,
              s.k.page.docsTagDocListPage
            ),
          },
          l.createElement(o.d, { title: p }),
          l.createElement(g.Z, { tag: "doc_tag_doc_list" }),
          l.createElement(
            u.Z,
            null,
            l.createElement(
              "div",
              { className: "container margin-vert--lg" },
              l.createElement(
                "div",
                { className: "row" },
                l.createElement(
                  "main",
                  { className: "col col--8 col--offset-2" },
                  l.createElement(
                    "header",
                    { className: "margin-bottom--xl" },
                    l.createElement("h1", null, p),
                    l.createElement(
                      n.Z,
                      { href: a.allTagsPath },
                      l.createElement(
                        i.Z,
                        {
                          id: "theme.tags.tagsPageLink",
                          description:
                            "The label of the link targeting the tag list page",
                        },
                        "View All Tags"
                      )
                    )
                  ),
                  l.createElement(
                    "section",
                    { className: "margin-vert--lg" },
                    a.items.map(function (e) {
                      return l.createElement(m, { key: e.id, doc: e });
                    })
                  )
                )
              )
            )
          )
        );
      }
    },
    7239: (e, t, a) => {
      a.d(t, { c: () => i });
      var l = a(2784),
        r = a(7614),
        n = ["zero", "one", "two", "few", "many", "other"];
      function c(e) {
        return n.filter(function (t) {
          return e.includes(t);
        });
      }
      var o = {
        locale: "en",
        pluralForms: c(["one", "other"]),
        select: function (e) {
          return 1 === e ? "one" : "other";
        },
      };
      function s() {
        var e = (0, r.Z)().i18n.currentLocale;
        return (0, l.useMemo)(
          function () {
            try {
              return (
                (t = e),
                (a = new Intl.PluralRules(t)),
                {
                  locale: t,
                  pluralForms: c(a.resolvedOptions().pluralCategories),
                  select: function (e) {
                    return a.select(e);
                  },
                }
              );
            } catch (l) {
              return (
                console.error(
                  'Failed to use Intl.PluralRules for locale "' +
                    e +
                    '".\nDocusaurus will fallback to the default (English) implementation.\nError: ' +
                    l.message +
                    "\n"
                ),
                o
              );
            }
            var t, a;
          },
          [e]
        );
      }
      function i() {
        var e = s();
        return {
          selectMessage: function (t, a) {
            return (function (e, t, a) {
              var l = e.split("|");
              if (1 === l.length) return l[0];
              l.length > a.pluralForms.length &&
                console.error(
                  "For locale=" +
                    a.locale +
                    ", a maximum of " +
                    a.pluralForms.length +
                    " plural forms are expected (" +
                    a.pluralForms.join(",") +
                    "), but the message contains " +
                    l.length +
                    ": " +
                    e
                );
              var r = a.select(t),
                n = a.pluralForms.indexOf(r);
              return l[Math.min(n, l.length - 1)];
            })(a, t, e);
          },
        };
      }
    },
  },
]);
