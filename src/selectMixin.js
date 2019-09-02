import {
  default as select
}
from './selectShadow.js';

export const selectMixin = (superclass) => class extends superclass {
  
  selectShadow(selector) {
    return select(selector, this);
  }
}

export default selectMixin;
