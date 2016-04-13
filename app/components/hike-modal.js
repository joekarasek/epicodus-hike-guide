import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modalDialog'],
  attributeBindings: ['id'],
  id: Ember.computed('index', function() {
      return "openModal"+this.get('index');
    })
});
