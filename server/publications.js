//Cursor that references to all posts
Meteor.publish('posts', function(){
    return Posts.find();
});