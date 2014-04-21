var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
Backbone.$   = $;
Backbone._   = _;

var Routes   = require('./router.js');

$(function() {
  var routes = new Routes();
  Backbone.history.start();
});
