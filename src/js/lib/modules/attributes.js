import $ from '../core';

$.prototype.setAttr = function(attributeName, attributeValue) {
    if (!attributeName || !attributeValue) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, attributeValue);
    }

    return this;
};

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);
    }

    return this;
};

$.prototype.toggleAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(attributeName);
    }

    return this;
};