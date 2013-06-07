var loginView = Backbone.View.extend({
  //template: _.template($('#login_template').html()),
  //$el:'body',
  initialize: function(){
    this.render()
  },
  el:'body',
  render: function(){
    //var dict = this.model.toJSON()
    //console.log('lmao')
    //var html = this.template//(dict)
    this.$el.append($('#login_template').html())
    return this;
  },
});

var walkthroughView = Backbone.View.extend({

});

var selectionView = Backbone.View.extend({

});

var doneView = Backbone.View.extend({

});

// Routes
var WorkspaceRouter = Backbone.Router.extend({
  routes:{
    'index.html'           : 'root',
    //'login'       : 'login',
    'walkthrough' : 'walkthrough',
    'selection'   : 'selection',
    'confirm'     : 'confirm',
    'done'        : 'login',
  },
  
  root : function(){
    new loginView()
  },

  walkthrough:function(){
    console.log('routes')
  },
});


// 

// app.js
$(function(){
 new WorkspaceRouter()
 Backbone.history.start({pushState:true})
 //var login_view = new loginView()
  alert( WorkspaceRouter.routes[Backbone.history.fragment] );
});
