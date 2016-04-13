import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  href: '#openModal',
  classNames: ['grid-item'],
  classNameBindings: ['gridItemBig', 'gridItemImage'],
  gridItemBig: Ember.computed('index', function() {
    var isSecondOfSeven = ((this.get('index') % 7) - 1 === 0);
    var isThirdOfSeven = ((this.get('index') % 7) - 2 === 0);
    return (isSecondOfSeven || isThirdOfSeven);
  }),
  gridItemImage: Ember.computed('index', function() {
    var isSecondOfSeven = ((this.get('index') % 7) - 1 === 0);
    return isSecondOfSeven;
  })
});
