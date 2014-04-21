var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var template = require('../../../templates/MediaCollectionView.hbs');

module.exports = Backbone.View.extend({

  events: {
    'click #sort': 'sort',
    'reset': 'render2'
  },

  render: function(){
    var index = template(this.model.toJSON()[0]);
    this.$el.html(index);
  },

  sort: function(e){
    console.log($(e.target).data('type'));
    var comparator = $(e.target).data('type');
    this.model.comparator = comparator;
    this.model.sort();
  },

  render2: function(){
    console.log('asdf');
    $('#results').html(this.$el);
  }

})
