import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  value: DS.attr('boolean', { defaultValue: false }),
  calender: DS.belongsTo('calendar')
});
