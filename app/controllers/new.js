import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => console.error("Model didn't saved")
      );
    },
    cancel() {
      this.get('model').deleteRecord();
      return true;
    }
  }
});
