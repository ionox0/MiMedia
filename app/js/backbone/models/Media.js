var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');

module.exports = Backbone.Model.extend({

  defaults: {
    type: "",
    fileExtension: "",
    description: "",
    supported: ""
  }

});
