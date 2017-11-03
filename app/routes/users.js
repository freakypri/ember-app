import Route from '@ember/routing/route';

export default Route.extend({
    model: function () {
        var url  = 'https://api.github.com/users';
        return Ember.$.getJSON(url).then(function (data) {
            return data.splice(0,10);
        });
    }
});
