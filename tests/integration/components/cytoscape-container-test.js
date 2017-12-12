import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cytoscape-container', 'Integration | Component | cytoscape container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cytoscape-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cytoscape-container}}
      template block text
    {{/cytoscape-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
