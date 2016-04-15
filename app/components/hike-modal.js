import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modalDialog'],
  // Dynamic binding of the id attribute is required to correctly associate modal windowns on click
  attributeBindings: ['id'],
  id: Ember.computed('index', function() {
      return "openModal"+this.get('index');
    })
});
