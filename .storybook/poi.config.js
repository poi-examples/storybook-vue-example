module.exports = {
  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  dist: '.storybook/dist',

  presets: [
    require('poi-preset-storybook')()
  ]
}
