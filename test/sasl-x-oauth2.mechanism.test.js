(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('../lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-x-oauth2/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named X-OAUTH2', function() {
      expect(mech.name).to.equal('X-OAUTH2');
    });
    
    it('should be client first', function() {
      expect(mech.clientFirst).to.equal(true);
    });
    
    it('should encode credentials', function() {
      expect(mech.response({ username: 'janedoe', token: 's3cr2t' })).to.equal('\u0000janedoe\u0000s3cr2t');
    });
    
    it('should have challenge function', function() {
      expect(mech.challenge).to.be.a('function');
    });
    
  });
  
  return { name: 'test.sasl-x-oauth2.mechanism' };
  
}));
