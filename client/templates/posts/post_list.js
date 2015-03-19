/**
 * Created by madrid on 15/03/15.
 */

//Se declara el ayudante posts que incluye el arreglo postData para su posterior llamada
Template.postsList.helpers({
    //Anon function to return posts
    posts: function() {
        return Posts.find();
    }
})