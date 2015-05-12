/**
 * Created by madrid on 11/05/15.
 */
Template.postSubmit.events({
    'submit form': function(e) {
        //To prevent default state once sent the form from going forward or backward
        e,preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };

        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});

