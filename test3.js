var page = require('webpage').create()
page.onLoadFinished = ready
var step = 'open'
page.open('http://appspeed.us/login')

function ready(status) {
    console.log(page.url)
    if (step == 'open') {
        step = 'fill'
        page.evaluate(function () {
            document.querySelector('[name=email]').value = 'user1234@gmail.com'
            document.querySelector('[name=password]').value = 'user1234'
            document.querySelector('[type=submit]').click()
        })
    } else if (step == 'fill') {
        page.render('test-3x.png')
        phantom.exit()
    }
}
