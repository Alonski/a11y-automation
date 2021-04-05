import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class violationsviolationRoute extends Route {
  @service store;
  model(params) {
    let violation = this.store.peekAll('violation', params.id);
    if(!violation) {
      console.log('sorry, no violation for this one ' + params.id);
    }
    return this.store.findRecord('violation', params.id);

  }
}
