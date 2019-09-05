import {
  select
}
from '/web-modules/d3-selection.js';

const selectShadow = (selector, el) => {
  return select(el.shadowRoot.querySelector(selector));
}

export default selectShadow