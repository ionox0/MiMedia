var MediaModel = require('./models/MediaModel');
var MediaCollection = require('./models/MediaCollection');
var MediaModelView = require('./views/MediaModelView');
var MediaCollectionView = require('./views/MediaCollectionView')

module.exports = Backbone.Router.extend({

  routes: {
    "": "list"
  },

  list: function(){
    this.mediaModel = new MediaModel();
    this.mediaCollection = new MediaCollection();
    this.mediaModelView = new MediaModelView({
      model: this.mediaModel
    });
    var that = this;
    this.mediaModel.fetch({
      success: function () {
        that.mediaModelView.render();
      }
    });
    this.mediaCollectionView = new MediaCollectionView({
      model: this.mediaCollectionView
    });
    this.mediaCollection.fetch({
      success: function () {
        that.mediaCollectionView.render();
      }
    })
    $('#results').html(this.mediaCollectionView.el);
  }

})
