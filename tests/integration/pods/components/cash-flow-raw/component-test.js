import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cash-flow-raw', 'Integration | Component | cash flow raw', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cash-flow-raw}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cash-flow-raw}}
      template block text
    {{/cash-flow-raw}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
