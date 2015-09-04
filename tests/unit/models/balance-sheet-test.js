import { moduleForModel, test } from 'ember-qunit';

moduleForModel('balance-sheet', 'Unit | Model | balance sheet', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
