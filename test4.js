var page = require('webpage').create()
page.onLoadFinished = ready
var step = 'open'
page.open('http://appspeed.us/login')

function ready(status) {
    console.log(page.url)
    if (step == 'open') {
        step = 'fill' //set next step
        page.evaluate(function () { //ประมวลผล page
            //fill data
            document.querySelector('[name=email]').value = 'user1234@gmail.com'
            document.querySelector('[name=password]').value = 'user123'
            //สั่ง click
            document.querySelector('[type=submit]').click() 
        })
    } else if (step == 'fill') {
        console.log(page.url)
        // ถ้า password ผิด

        if (page.url.indexOf('Invalid')) {
            console.log('Test Case: 4    PASSED')
        } else {
            console.log('Test Case: 4    FAILED')
        }

        // page.render('test-3x.png')
        phantom.exit()
    }
}
