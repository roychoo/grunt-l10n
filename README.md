# grunt-l10n

> l10n

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-l10n --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-l10n');
```

## The "l10n" task

### Overview
In your project's Gruntfile, add a section named `l10n` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  l10n: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
the default l10n config will be in l10n/l10n.js
```js
grunt.initConfig({
  l10n: {
    options: {},
    src : ['test/fixtures/view/**/*.tpl.html'],
    dest : 'dist/'
  },
})
```

#### Custom Options
specify the `l10nConfig` and `ext`
```js
grunt.initConfig({
  l10n: {
    options: {
      l10nConfig: 'l10n/l10n.js',
      ext: '.tpl.html'
    },
    src : ['test/fixtures/view/**/*.tpl.html'],
    dest : 'dist/'
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## ToDo
1. check whether the l10n config exist first before processing.
