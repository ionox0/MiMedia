'use strict';

var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var template = require('../../../templates/MediaView.hbs');

module.exports = Backbone.View.extend({

  tagName: 'tr',
  className: 'media',

  initialize: function() {
    this.render();
  },

  render: function() {
    var attrs = this.model.toJSON();
    this.$el.append(template(attrs));
    return this;
  }

});
