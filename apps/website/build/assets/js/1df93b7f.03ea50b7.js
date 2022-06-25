"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3237],
  {
    2089: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var n = a(2784),
        s = a(6277),
        r = a(9817),
        l = a(7614),
        c = a(3982);
      const o = {
        heroBanner: "heroBanner_qdFl",
        buttons: "buttons_AeoN",
        sectionAlt: "sectionAlt_Oc16",
        sectionDark: "sectionDark_EPOQ",
        sectionDarkTitle: "sectionDarkTitle_m1G2",
      };
      var i = a(77);
      function m() {
        var e = (0, l.Z)().siteConfig;
        return n.createElement(
          "header",
          { className: (0, s.Z)("hero", o.heroBanner) },
          n.createElement(
            "div",
            { className: "container" },
            n.createElement("img", {
              className: (0, s.Z)(o.heroBannerLogo, "margin-vert--md"),
              src: (0, i.Z)("img/eslint-logo.svg"),
              width: "200",
              height: "200",
            }),
            n.createElement("h1", { className: "hero__title" }, e.title),
            n.createElement("p", { className: "hero__subtitle" }, e.tagline),
            n.createElement(
              "div",
              { className: o.buttons },
              n.createElement(
                r.Z,
                {
                  className: "button button--secondary button--lg",
                  to: "/docs/intro",
                },
                "\u26a1\ufe0f Let's plug you in \u26a1\ufe0f"
              )
            )
          )
        );
      }
      function d() {
        var e = (0, l.Z)().siteConfig;
        return n.createElement(
          c.Z,
          {
            title: e.title,
            description:
              "An opinionated set of ESLint extensions that will help you spread high-standards",
          },
          n.createElement(m, null),
          n.createElement(
            "main",
            null,
            n.createElement(
              "div",
              { className: o.sectionDark },
              n.createElement(
                "div",
                { className: "container padding-vert--md" },
                n.createElement(
                  "div",
                  { className: "row" },
                  n.createElement(
                    "div",
                    { className: "col col--8 col--offset-2" },
                    n.createElement(
                      "div",
                      { className: "margin-vert--lg text--center" },
                      n.createElement(
                        "h2",
                        {
                          className: (0, s.Z)(
                            o.sectionDarkTitle,
                            "sectionDarkTitle__h2--primary-darker"
                          ),
                        },
                        "We are here to make conventions simple to as many folks as possible"
                      )
                    )
                  )
                )
              )
            ),
            n.createElement(
              "p",
              { className: "padding-vert--xl" },
              n.createElement(
                "p",
                { className: "container" },
                n.createElement(
                  "p",
                  { className: "row" },
                  n.createElement(
                    "p",
                    { className: "col col--10 col--offset-1" },
                    n.createElement(
                      "h2",
                      { className: "text--center margin-bottom--xl" },
                      "Why?"
                    ),
                    n.createElement(
                      "div",
                      { className: "row margin-vert--lg" },
                      n.createElement(
                        "div",
                        { className: "col" },
                        n.createElement("h3", null, "Easy to Use"),
                        n.createElement(
                          "p",
                          null,
                          "Our ESLint extensions was designed with the very good user experience in-mind, and focuses on standards while make sure everyone understand why those standards were chosen."
                        )
                      ),
                      n.createElement(
                        "div",
                        { className: "col" },
                        n.createElement("h3", null, "Grow Fast"),
                        n.createElement(
                          "p",
                          null,
                          "ESLint makes sure everyone are following standards programmatically, which reduces human errors, improves code quality, and makes code reviews focus on what's matter."
                        )
                      ),
                      n.createElement(
                        "div",
                        { className: "col" },
                        n.createElement("h3", null, "Wide Community"),
                        n.createElement(
                          "p",
                          null,
                          "ESLint is consistently getting ",
                          n.createElement(
                            "a",
                            {
                              href: "https://www.npmtrends.com/eslint-vs-prettier-vs-tslint",
                            },
                            "popularity"
                          ),
                          ", We have researched the whole eco-system to find the best approach for conventions we can create to help spreading standards that can be easily understood"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    },
  },
]);
