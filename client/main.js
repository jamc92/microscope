/**
 * Created by madrid on 15/03/15.
 */

// < START Config for package pcel:loading
Template.loading.rendered = function () {
    if ( ! Session.get('loadingSplash') ) {
        this.loading = window.pleaseWait({
            logo: '/images/mowebjobs.png',
            backgroundColor: '#40d47e',
            loadingHtml: message + spinner
        });
        Session.set('loadingSplash', true); // just show loading splash once
    }
};

Template.loading.destroyed = function () {
    if ( this.loading ) {
        this.loading.finish();
    }
};

var message = '<p class="loading-message">MowebJobs</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';

// END Config for package pcel:loading >