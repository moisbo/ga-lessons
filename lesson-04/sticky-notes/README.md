# Sticky Notes

For this exercise, you'll be creating a page that displays a set of sticky notes
with a colour and title as entered by the user.

Your solution should look similar to this:

![](https://s3.amazonaws.com/f.cl.ly/items/30342l3m3N151L442S1Z/Image%202015-12-03%20at%207.23.15%20PM.png)

## Goals

- Use closures to ensure no variables end up in global scope
- Sticky note contents and colour is taken from the user's input
- Each sticky note message should start with a number representing the order of
  its creation
  - For example; If the user enters "_Hello World_" as the first sticky note, it
    should be shown as "_1 - Hello World_"

## Instructions

Start by creating a new repository on GitHub (make sure you _do not_ tick the
_"Initialize with README"_ option), then clone it to your machine (follow
GitHub's instructions).

Extract the contents of the homework `.zip` archive (including this file) into
your newly cloned repository.

Use git to `add`, `commit`, and `push` the files to GitHub (use `status` to make
sure you've added and committed everything).

Edit the `app.js` file to complete your solution.

Try out your solution by opening the `index.html` file in your favourite
browser.

Once you're done, `add`, `commit`, and `push` the `app.js` file again, then
send the GitHub URL for the repository to your instructors via Slack.

## Assessment

There is **no** formal assessment associated with this homework. It is intended
as a continuation of Lesson 04; Functions & Scope.

Your instructors will be looking for the following things when they review your
solution;

* Clarity of code
* Creation of closures
* Completion of the problem

## Hints:

- Use `createElement` to create the sticky note DOM elements:
  http://mdn.io/createElement
- Give each of the created DOM elements the class `box` so they are positioned
  correctly.
- Use `appendChild` to add the DOM elements to your page:
  http://mdn.io/appendChild
- Append each of the created DOM elements into the `.container` `<div>`
