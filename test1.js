var page = require('webpage').create()
page.open('http://appspeed.us', save)

function save(status) {
  console.log(status)
  page.render('test1.png')
  phantom.exit()
}


// RUN: phantomjs test1.js
