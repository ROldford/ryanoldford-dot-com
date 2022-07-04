---
title: "canadianborderpatrol.com"
subtitle: "Podcast website"
date: "2019-04-13"
update: "2019-08-10"
tags: ["javascript", "react", "gatsby", "podcast", "website"]
category: "Personal"
linkPillTitles: ["Code Repo", "Demo"]
linkPillHrefs: ["https://github.com/rheajt/canadianborderpatrol", "https://canadianborderpatrol.com"]
featuredImage: "../../img/project/canadianborderpatrol-dot-com.png"
---

With my podcasting partner Jordan Rhea ([rheajt](https://github.com/rheajt) on
Github), I developed a site for our podcast, the Canadian Border Patrol.

While I had used React before, this was my first experience using Gatsby (or any
SSG actually). I took on 2 main parts of the project:
1. UI design
2. RSS feed configuration
For the UI design, I researched the possible styling options (of which there are
many), tested a few, and eventually settled on the Rebass framework. Rebass was
able to make much of the responsive design easier, and I could fall back on
styled-components for more control.
RSS feed configuration proved difficult due to confusing documentation and
differences between podcast services. The documentation was not fully clear on
how to add and format iTunes namespace tags, so a lot of trial and error was
needed. On the podcast services side, I discovered that they are notoriously
inconsistent with accepted HTML formatting in show notes. I decided on sending a
very plain text excerpt per episode and having detailed show notes be limited to
the site itself, and formatted my episode Markdown files accordingly.

---

**Update**: I did some more RSS configuration to match iTunes new requirements 
for podcast episode numbers.
