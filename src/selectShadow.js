import {
  select
}
from 'web_modules/d3-selection.js';

const selectShadow = (selector, el) => {
  return select(el.shadowRoot.querySelector(selector));
}

export default selectShadow