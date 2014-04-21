module.exports = Backbone.Model.extend({

  url: 'https://api.qa.mimedia.com/2.0/mimetypesfull/supported/list',

  defaults: {

    name: "",

  }

});
