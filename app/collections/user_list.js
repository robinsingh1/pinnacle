var UserList = Backbone.Collection.extend({
  model:User,
  localStorage: new Backbone.LocalStorage('pinnacle_user'),
  
  
});

var Users = new UserList;
