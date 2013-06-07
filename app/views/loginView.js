varloginView = Backbone.View.extend({
  template: _.template($("#template-contact").html()),

  render: function() {
    // This is a dictionary object of the attributes of the models.
    // => { name: "Jason", email: "j.smith@gmail.com" }
    var dict = this.model.toJSON();

    // Pass this object onto the template function.
    // This returns an HTML string.
    var html = this.template(dict);

    // Append the result to the view's element.
    $(this.el).append(html);
  }
});
