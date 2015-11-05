import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('balance-sheet-raw', 'Integration | Component | balance sheet raw', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{balance-sheet-raw}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#balance-sheet-raw}}
      template block text
    {{/balance-sheet-raw}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
