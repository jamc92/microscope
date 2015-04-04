/**
 * Created by madrid on 04/04/15.
 */

//Configuring the router to scope the default layout for all routes
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    //Setting a not found template error 404
    notFoundTemplate: 'notFound',
    //Defining our function waitOn globally through router
    waitOn: function() { return Meteor.subscribe('posts'); }
});

//Mapping route postList to root /
Router.route('/', {name: 'postsList'});

//Mapping dynamic route to postPage template
Router.route('/posts/:_id', {
    name: 'postPage',
    //Getting context data from a search based on id that we get from URL
    data: function() { return Posts.findOne(this.params._id); }
});

//Setting a not found page when the route will be invalid and when it returns a false or null data
Router.onBeforeAction( 'dataNotFound', {only: 'postPage'});
