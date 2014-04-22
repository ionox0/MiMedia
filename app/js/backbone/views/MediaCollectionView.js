'use strict';

var Backbone  = require('backbone');
var $         = require('jquery');
Backbone.$    = $;
var _         = require('underscore');
var MediaView = require('./MediaView.js');
var headerTemplate  = require('../../../templates/MediaCollectionView.hbs');
var footerTemplate  = require('../../../templates/MediaCollectionViewFooter.hbs');

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

    var attrs = this.collection.toJSON();
    attrs.imageCount = this.collection.count("image");
    attrs.videoCount = this.collection.count("video");
    attrs.audioCount = this.collection.count("audio");
    attrs.documentCount = this.collection.count("application");
    attrs.plainTextCount = this.collection.count("text/plain");

    this.$el.prepend(headerTemplate(attrs));
    this.collection.forEach(this.addMedia, this);
    this.$el.append(footerTemplate(attrs));
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
