var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var template = require('../../../templates/MediaCollectionView.hbs');

module.exports = Backbone.View.extend({

  events: {
    'click #sort': 'sort'
  },

  initialize: function(){
    this.collection.on('sort', this.render, this);
  },

  render: function(){
    var index = template(this.collection.toJSON()[0]);
    this.$el.html(index);
    console.log(this.collection.toJSON());
  },

  sort: function(e){
    this.comparator = $(e.target).data('type');
    console.log(this.comparator);
    var that = this;
    //this.collection.set('comparator', this.comparator);
    this.collection.sort();
  }

})
