---
title: "Decryptoquote"
subtitle: "Decode cryptoquote puzzles"
date: "2019-07-16"
update: "2021-12-28"
tags: ["python", "flask", "mongodb", "heroku"]
category: "Personal"
project: "https://github.com/ROldford/decryptoquote"
demo: "https://decryptoquote.herokuapp.com/"
featuredImage: "../../img/project/decryptoquote.jpg"
---

My parents love doing cryptoquote puzzles, word puzzles that challenge players
to decipher a famous quote encoded using a simple substitution cypher. I decided
that this would be a perfect subject for a personal coding project.

My initial attempt was slow to develop, but after completing my first CS course
at UBC, I was able to make much more progress. I decided on a generative tree
structure of game states, with depth-first search to find a solution. To
generate new nodes, I began developing a language model that would give possible
words matching a undecoded (or partially decoded) word.

However, my first attempt at a language model ran into difficulties when first
testing the program, with the program taking far too much time, especially with
short words. These words should have been the first to be decoded, as there are
few possible real words for one- and two-letter words. However, debugging showed
that the corpus, made from Project Gutenberg books, was full of things like
chapter headers, which were being used as valid words. That meant that my
program was trying "X" as a one-letter word.

I looked for new corpuses, and found the english-words package. However, I
needed to modify it, as the words files didn't include words with apostrophes,
which I was using to reduce the solution space. Modifying the shell script to
generate words with apostrophes, but not other punctuation, revealed a new
problem: the script didn't work for me at all. Running it didn't generate the
text and JSON files it was meant to.

(Header image by [Steve Buissinne](https://tinyurl.com/y72vzx8u) from
[Pixabay](https://tinyurl.com/yb7gheq5))

---

**Update**: After forking the english-words project, I was able to adapt the 
shell script to make it work on my machine, as well as generate the desired
corpus files. My next step is to test the solver with the new corpus, checking
for accuracy and speed. I may work on storing the corpus in a different data
structure if speed continues to be an issue.

**Update**: I discovered the ["word patterns" strategy](https://inventwithpython.com/hacking/chapter18.html) from [Invent with Python](https://inventwithpython.com/), and applied it to this project. I've had some good results with it, but I've discovered that some puzzles can have multiple solutions using real English words, so I will need to update the code to produce all solutions.

**Update**: Over this holiday, I was able to update my algorithm to produce all solutions for a puzzle, reimplemented the word patterns store to use [MongoDB](https://www.mongodb.com/), designed a REST API for the solver using the [Flask](https://flask.palletsprojects.com/en/2.0.x/) framework, and hosted the webapp using [Heroku](https://www.heroku.com) and [MongoDB Atlas](https://www.mongodb.com/atlas/database). The app is feature complete, but the front end does need some work to make it responsive for any mobile users.
