---
title: "October Update"
date: "2020-11-03T06:42:18Z"
update: ""
tags: ["update"]
category: "blog"
featuredImage: "../../img/post/ansh-bhagania-WhM5NJ11sFk-unsplash.jpg"
---
Things progressed nicely in my co-op work this last month, despite some bad luck. There's a good story there.

So we have this testing device that we're using with our robot. This thing isn't really meant for the kind of work we're doing, but it's acceptably close. We just needed some new functionality from it, and they were great about adding that into the firmware. We get news that the update is ready on the same day we were going to do the final testing on a run that had been waiting for days. I wasn't sure if we should wait on the firmware update until we finished that run, but we decided that it was best to push forward with development, so I did the update. Naturally, Murphy's Law made an appearance, and the tester was completely bricked.

Fortunately, there's a lot of other work to do on the robot. I've been able to redevelop the code so that it's more adaptable and maintainable, which has made it easy to add in new features and reorganize the robot layout. Our outside partners are really happy with what we've been able to show.

Currently, I'm working on a feature that will let us restart a run from automatic save data. The big issue is "impure" Python objects, which have underlying C code. If the code was pure Python, I could just use pickle, but those objects aren't compatible. I've put together a system using JSON to save the data that can be saved, then use it to get everything else for full recovery. I've learned a lot about JSON serialization and deserialization in the process, and I'll have to write a post here about it.

Anyway, see you next month!

(Photo by [Ansh Bhagania](https://tinyurl.com/y2gczzv7) on [Unsplash](https://unsplash.com/photos/WhM5NJ11sFk))