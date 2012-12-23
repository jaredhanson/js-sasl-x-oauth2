(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-x-oauth2'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-x-oauth2'], factory);
  }
}(this, function(saslxoauth2) {

  describe('sasl-x-oauth2', function() {
    
    it('should export Mechanism', function() {
      expect(saslxoauth2.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslxoauth2).to.equal(saslxoauth2.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-x-oauth2' };
  
}));
