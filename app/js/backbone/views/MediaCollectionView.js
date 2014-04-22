'use strict';

var Backbone  = require('backbone');
var $         = require('jquery');
Backbone.$    = $;
var _         = require('underscore');
var MediaView = require('./MediaView.js');
var template  = require('../../../templates/MediaCollectionView.hbs');

module.exports = Backbone.View.extend({

  tagName: 'table',
  className: 'mediaList',

  events: {
    'click #sort': 'sort'
  },

  initialize: function(){
    this.collection.on('add', this.addMedia, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.on('sort', this.addAll, this);
  },

  render: function(){
    this.addAll();
  },

  addAll: function() {
    this.$el.html('');
    this.$el.prepend(template);
    this.collection.forEach(this.addMedia, this);
  },

  addMedia: function(media) {
    var mediaView = new MediaView({model: media});
    this.$el.append(mediaView.el);
  },

  sort: function(e){
    console.log(e.currentTarget.getAttribute("data-type"));
    var sort = e.currentTarget.getAttribute("data-type");
    this.collection.comparator = sort;
    this.collection.sort();
  }

})
