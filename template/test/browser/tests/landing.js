/* global casper */

function beforeEach (casper) {
  casper.start(
    casper.cli.options.url + '/template/'
  )
  casper.viewport(600, 600)
  casper.then(function () {
    this.waitForSelector('.ci-nav')
  })
}

/*
 * Example test
*/
casper.test.begin(
  'Example test',
  3,
  function (test) {
    beforeEach(casper)

    test.assertVisible('.hello')
    test.assertVisible('.foo')
    test.assertVisible('.bar')

    casper.run(function () {
      test.done()
    })
  }
)
