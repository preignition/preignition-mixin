import {
  select
}
from 'd3-selection';

const selectShadow = (selector, el) => {
  return select(el.shadowRoot.querySelector(selector));
}

export default selectShadow