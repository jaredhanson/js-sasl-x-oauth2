(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports, module);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'module'], factory);
  }
}(this, function(exports, module) {

  /**
   * X-OAUTH2 `Mechanism` constructor.
   *
   * This class implements the X-OAUTH2 SASL mechanism.
   *
   * The X-OAUTH2 SASL mechanism provides support for using OAuth 2.0 access
   * tokens for authentication.  This mechanism is defined by Google and
   * implemented in Google Talk.
   *
   * References:
   *  - [OAuth 2.0 Authorization](https://developers.google.com/talk/jep_extensions/oauth)
   *  - [XMPP Handshake Flow](https://developers.google.com/cloud-print/docs/rawxmpp)
   *
   * @api public
   */
  function Mechanism() {
  }
  
  Mechanism.prototype.name = 'X-OAUTH2';
  
  /**
   * Encode a response using given credential.
   *
   * Options:
   *  - `username`
   *  - `token`
   *
   * @param {Object} cred
   * @api public
   */
  Mechanism.prototype.response = function(cred) {
    var str = '';
    str += '\0';
    str += cred.username;
    str += '\0';
    str += cred.token;
    return str;
  };
  
  /**
   * Decode a challenge issued by the server.
   *
   * @param {String} chal
   * @api public
   */
  Mechanism.prototype.challenge = function(chal) {
  };

  exports = module.exports = Mechanism;
  
}));
