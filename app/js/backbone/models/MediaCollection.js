var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var Media    = require('../models/Media');

module.exports = Backbone.Collection.extend({

  initialize: function(){
    this.url = 'https://api.qa.mimedia.com/2.0/mimetypesfull/supported/list'
  },

  model: Media,

  parse: function(response){
    var list = response.mimeTypeFullList;
    return list;
  },

  count: function(mimeType) {

    return this.filter(function(n) {
      return !(n.get('type').indexOf(mimeType));
    }).length;

  }

});

