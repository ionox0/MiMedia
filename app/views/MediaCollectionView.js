module.exports = Backbone.View.extend({

  render: function(){
    this.$el.html(this.model.toJSON());
  }

})
