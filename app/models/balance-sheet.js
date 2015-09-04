import DS from 'ember-data';

export default DS.Model.extend({
  results : DS.attr('array'),
  isError: DS.attr('boolean', { defaultValue: false }),
  errorMessage : DS.attr('string')
});
