"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3089],
  {
    9956: (e, t, a) => {
      a.r(t), a.d(t, { default: () => g });
      var r = a(2784),
        n = a(6277),
        l = a(7614),
        s = a(328),
        c = a(211),
        i = a(4736),
        m = a(2727),
        u = a(2156),
        o = a(4390);
      function d(e) {
        var t = e.metadata,
          a = (0, l.Z)().siteConfig.title,
          n = t.blogDescription,
          c = t.blogTitle,
          i = "/" === t.permalink ? a : c;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(s.d, { title: i, description: n }),
          r.createElement(o.Z, { tag: "blog_posts_list" })
        );
      }
      function p(e) {
        var t = e.metadata,
          a = e.items,
          n = e.sidebar;
        return r.createElement(
          i.Z,
          { sidebar: n },
          a.map(function (e) {
            var t = e.content;
            return r.createElement(
              m.Z,
              {
                key: t.metadata.permalink,
                frontMatter: t.frontMatter,
                assets: t.assets,
                metadata: t.metadata,
                truncated: t.metadata.truncated,
              },
              r.createElement(t, null)
            );
          }),
          r.createElement(u.Z, { metadata: t })
        );
      }
      function g(e) {
        return r.createElement(
          s.FG,
          { className: (0, n.Z)(c.k.wrapper.blogPages, c.k.page.blogListPage) },
          r.createElement(d, e),
          r.createElement(p, e)
        );
      }
    },
  },
]);
