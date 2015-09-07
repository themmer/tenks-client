import DS from 'ember-data';

export default DS.Model.extend({
  accountingChange : DS.attr('string')
  // data : DS.attr('array'),
  // isError: DS.attr('boolean', { defaultValue: false }),
  // errors : DS.attr('array')
});
