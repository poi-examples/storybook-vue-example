module.exports = {
  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  presets: [
    require('poi-preset-storybook')()
  ]
}
