var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var Media    = require('../models/Media');

module.exports = Backbone.Collection.extend({

  initialize: function(){
    this.url = 'https://api.qa.mimedia.com/2.0/mimetypesfull/supported/list'
  },

  sort:

  model: Media,

  comparator: 'type'

})
