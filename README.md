# Magna Charta

A jQuery plugin for producing bar charts from tables.

## Quick Downloads
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/alphagov/magna-charta/master/dist/magna-charta.min.js
[max]: https://raw.github.com/alphagov/magna-charta/master/dist/magna-charta.js

## Documentation

Documentation is on Github Pages, which means we can show you live graphs, rather than screenshots. [Read the documentation and examples](http://alphagov.github.com/magna-charta/).

## Browser Support

Working in:

- Safari 5
- Safari 6
- Chrome
- Firefox
- IE9
- IE8
- Opera
- iPhone, iPad
- Chrome, Android 4.2

By default, we disable the plugin and revert to standard tables for IE < 8.

## Contributing

You're going to need Node, npm and Grunt (`npm install -g grunt`) to work on Magna Charta.

- Fork and clone the repository
- Run `grunt test` to make sure the tests are still passing (which they should be).
- Write tests for your new feature and watch them fail.
- Write your feature.
- Get all tests passing.
- Push up to your fork, and then make a pull request.

## Release History / Changelist

_We use [Semantic Versioning](http://semver.org/) for our version numbers._


__1.1.1__
- change to make the outdented text option to be set through a class on the table, by adding `mc-outdented`, as an alternative to setting it as an option through the JS. Both work, adding a class is preferred.


__1.1.0__
- added options to allow the text to be outdented, so it sits outside the bar, just to the right.
- To do this, set `outdentText` option to `true`. The default amount to allow is the bar width + 3%, but you can set the value `outdentTextLevel` to something new.

__1.0.0__
- we completely rewrote Magna Charta, and are "re-releasing" as V1.0.0. From now on we'll use proper semantic versioning to manage releases.
- instead of applying CSS and styling to a table, we duplicate the table as a large amount of `div`s, that are styled. Doing this instead of styling a table means we end up not fighting browser's interpretations of table styling.



