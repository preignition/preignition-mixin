import { queryShadow } from './selectShadow.js';

export const selectMixin = (superclass) => class extends superclass {
  queryShadow(selector) {
    return queryShadow(selector, this);
  }
};

export default selectMixin;
