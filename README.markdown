# HTML Base

This is a simple set of files that I usually start off with whenever starting a new HTML based project.  It's mostly here to save for my common Javascript components that I may or may not use in a given project. Everything here is built with MooTools (1.2).

## Javascript Breakdown

I like to split my Javascripts up into multiple directories to simplify development. My `scripts.js` handles the loading of these and assumes you keep a similar directory structure.

  `/lib/` - For self-sustaining javascript libraries (no library requirement).
  `/plugins/` - For generic libraries/plugins/functionality that depend on other libraries.
  `/modules/` - Useful for widget-specific functionality encapsulation. May depend on libraries and plugins.
  `/specs/` - Contains all Javascript Specs (you're testing your Javascript, right?)
  `/application.js` - This should hold all triggers for javascript execution (the things that activate a given module/plugin/library).