var Backbone = require('backbone');
var $        = require('jquery');
var _        = require('underscore');
var template = require('../../templates/MediaCollectionView.hbs');

module.exports = Backbone.View.extend({

  render: function(){
    var index = template(this.model.toJSON()[0]);
    this.$el.html(index);
    console.log(this.model.toJSON());
    console.log(template());
  }

})
