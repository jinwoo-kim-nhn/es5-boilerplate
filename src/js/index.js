'use strict';

/**
 * Hello world calss
 * @constructor
 * @param {HTMLElement} element - control element
 */
function HelloWorld(element) {
  this.inputElement = element.querySelector('input');
  this.buttonElement = element.querySelector('button');
  this.messageElement = element.querySelector('#message');
  this.inputElement.value = 'ES5';

  this.addEvent();
}

/**
 * Add button event
 */
HelloWorld.prototype.addEvent = function() {
  this.buttonElement.addEventListener('click', this.announceMesaage.bind(this));
};

/**
 * Print message
 */
HelloWorld.prototype.announceMesaage = function() {
  var name = this.inputElement.value;
  var message = 'hello!! ' + name;

  this.messageElement.innerHTML = message;
};
