var page = require('webpage').create()
var step = 'open'
page.onLoadFinished = ready
page.open('https://github.com')

function ready(status) {
    if (step == 'open') {
        page.render('test-github-a.png')
        step = 'fill'
        page.evaluate(function() {
            document.getElementById('user[login]').value='MarkBangkokSamyan'
            document.getElementById('user[email]').value='mark4657@gmail.com'
            document.getElementById('user[password]').value = 'mark4657'
            document.querySelector('[type=submit]').click()
        })
    } else if (step == 'fill') {
        page.render('test-github-b.png')
        if (page.url == 'https://github.com/join/plan') {
            console.log('Test case: GitHub   PASSED')
        } else {
            console.log('Test case: GitHub   FAILED - ' + page.url)
        }
        phantom.exit()
    }
}