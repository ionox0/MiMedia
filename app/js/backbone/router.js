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
    this.mediaModel = new MediaModel();
    this.mediaCollection = new MediaCollection();
    var that = this;
    this.mediaCollectionView = new MediaCollectionView({
      collection: this.mediaCollection
    });
    this.mediaCollection.fetch({
      success: function () {
        that.mediaCollectionView.render();
      }
    })
    $('#results').html(this.mediaCollectionView.el);
  }

})
