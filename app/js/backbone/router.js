'use strict';

var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var MediaModel = require('./models/Media');
var MediaCollection = require('./models/MediaCollection');
var MediaCollectionView = require('./views/MediaCollectionView');

module.exports = Backbone.Router.extend({

  routes: {
    "": "list"
  },

  list: function(){
    this.mediaCollection = new MediaCollection();
    this.mediaCollectionView = new MediaCollectionView({
      collection: this.mediaCollection
    });
    var that = this;
    this.mediaCollection.fetch({})
    $('#results').html(this.mediaCollectionView.el);
  }

})
