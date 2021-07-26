
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   https://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  // "ui": {
  //     "port": 3001
  // },
  "files": [
    `./_site/**/*.{jpg,jpeg,gif,png,svg,html,css,js}`,
  ],
  "server": {
    "baseDir": "./_site/"
  },
  "proxy": false,
  "startPath": "/",
  // "port": 3000,

};
