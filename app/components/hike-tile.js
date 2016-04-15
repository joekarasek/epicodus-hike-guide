import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  // href is dynamically created to match the associated modal
  attributeBindings: ['href'],
  href: Ember.computed('index', function() {
      return "#openModal"+this.get('index');
    }),
  classNames: ['grid-item'],
  // sets the 2 and 3 of every 7 tiles to be bigger
  classNameBindings: ['gridItemBig', 'gridItemImage'],
  gridItemBig: Ember.computed('index', function() {
    var isSecondOfSeven = ((this.get('index') % 7) - 1 === 0);
    var isThirdOfSeven = ((this.get('index') % 7) - 2 === 0);
    return (isSecondOfSeven || isThirdOfSeven);
  }),
  // sets the
  gridItemImage: Ember.computed('index', function() {
    var isSecondOfSeven = ((this.get('index') % 7) - 1 === 0);
    return isSecondOfSeven;
  })

});
