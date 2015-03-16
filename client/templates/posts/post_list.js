/**
 * Created by madrid on 15/03/15.
 */

//Declaramos nuestro arreglo clave valor
var postsData = [
    {
        title: 'Introducing Moweb Jobs. A group of JavaScript lovers that build web and mobile app faster',
        url: 'https://www.twitter.com/MowebJobs/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'Discover Meteor',
        url: 'http://es.discovermeteor.com'
    }
];

//Se declara el ayudante posts que incluye el arreglo postData para su posterior llamada
Template.postsList.helpers({
    posts: postsData
})