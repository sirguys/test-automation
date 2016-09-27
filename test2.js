var page = require('webpage').create()
page.viewportSize = {width:768,height:1024}
page.open('http://airbnb.com', save)

function save(status) {
  console.log(status)
  page.render('test-2a.png')
  phantom.exit()
}


// RUN: phantomjs test2.js
