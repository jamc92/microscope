/**
 * Created by madrid on 18/03/15.
 */

//Load 3 posts on meteor app startup

//If mongo find 0 posts, insert 3.
if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagrief.com/itroducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}