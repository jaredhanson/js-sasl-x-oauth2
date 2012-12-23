define(['require',
        'mocha',
        'chai',
        'mocha-cloud'],
function(require, mocha, chai, cloud) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/sasl-x-oauth2.test',
           'test/sasl-x-oauth2.mechanism.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { cloud(mocha.run()); }
  });
});
