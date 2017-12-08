import Ember from 'ember';
import SemanticModalMixinMixin from 'semantic-proper-modals/mixins/semantic-modal-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | semantic modal mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let SemanticModalMixinObject = Ember.Object.extend(SemanticModalMixinMixin);
  let subject = SemanticModalMixinObject.create();
  assert.ok(subject);
});
