import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['PC Repair', 'Network Diagnostics', 'Home Audio Installations']
    }
})