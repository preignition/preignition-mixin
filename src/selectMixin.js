import { selectShadow } from './selectShadow.js';

export const selectMixin = (superclass) => class extends superclass {
  
  selectShadow(selector) {
    return selectShadow(selector, this);
  }
}

export default selectMixin;
