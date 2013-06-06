var Employee = Backbone.Model.extend({
  defaults:function(){
    return {
      linkedin_id:'',
      candidates:[],
    };
  }
});

var Admin = Backbone.Model.extend({
  defaults:function(){
    return {
      name:'',
      company:'',
    };
  },
});
