import { selectShadow, queryShadow } from './selectShadow.js';

export const selectMixin = (superclass) => class extends superclass {
  
  selectShadow(selector) {
    return selectShadow(selector, this);
  }
  
  queryShadow(selector) {
    return queryShadow(selector, this);
  }
}

export default selectMixin;
