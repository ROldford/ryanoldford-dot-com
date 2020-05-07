---
title: "Cycle Calendar Generator"
subtitle: "Makes n-day schedule iCal files"
date: "2018-08-09"
update: "2018-10-19"
tags: ["python", "script"]
category: "Personal"
project: "https://github.com/ROldford/cycle_calendar_generator"
demo: "https://pypi.org/project/cycle-calendar-generator/"
featuredImage: "../../img/project/cycle-calendar-generator.jpg"
---

At my last school, we had a problem. Our teaching schedules were on a 6-day
cycle, but there's no calendar software that does "repeat every 6 weekdays". To
solve this, I built this script.

To ensure that this worked properly for everyone, I used every software design
best practice I could find. I used TDD processes and CI (via Travis) for the
first time, and it seemed to work well with my testing group of other science
teachers.

The script simply looks for a folder of formatted Excel files. One stores the
general configuration for the school (i.e. how many days in the cycle, exact
calendar dates of each cycle day, etc.), while the rest hold teacher schedules.
The excel files are parsed using
[openpyxl](https://bitbucket.org/openpyxl/openpyxl/src), then an iCal file is
generated using [ics](https://github.com/C4ptainCrunch/ics.py).

I tested it with several other science teachers, and the script looked
promising. However, by the time I felt ready to deploy it in the school, I
learned that we would be implementing PowerSchool, so this script wouldn't be
needed. I also realized that I didn't have the time to write enough
documentation for my colleagues. However, I'm proud enough of this to deploy it
to the PyPI repository.

(Header image by [Bruno /Germany](https://tinyurl.com/y8mgjsu5) from
[Pixabay](https://tinyurl.com/yb3m2vwr))

---

**Update**: I was able to package this as a command line app, so it's much easier to run.
