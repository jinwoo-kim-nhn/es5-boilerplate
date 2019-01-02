'use strict';

/**
 * @param {HTMLElement} element - control element
 */
function HelloWorld(element) {
  var $wrapper = $(element);
  this.$inputElement = $wrapper.find('input');
  this.$buttonElement = $wrapper.find('button');
  this.$messageElement = $wrapper.find('#message');
  this.$inputElement.val('ES5');

  this.addEvent();
}

HelloWorld.prototype.addEvent = function() {
  this.$buttonElement.bind('click', this.announceMesaage.bind(this));
};

HelloWorld.prototype.announceMesaage = function() {
  var compiled = _.template('hello!! <%= name %>!');
  var name = this.$inputElement.val();
  var message = compiled({name: name});
  this.$messageElement.html(message);
};
