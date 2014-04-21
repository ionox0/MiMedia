var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var MediaModel = require('./models/Media');
var MediaCollection = require('./models/MediaCollection');
var MediaModelView = require('./views/MediaModelView');
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
      model: this.mediaCollection
    });
    this.mediaCollection.fetch({
      success: function () {
        that.mediaCollectionView.render();
      }
    })
    $('#results').html(this.mediaCollectionView.el);
  }

})