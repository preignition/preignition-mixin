import { select } from 'd3-selection';

export const selectShadow = (selector, el) => {
  return select(el.shadowRoot.querySelector(selector));
}
export const queryShadow = (selector, el) => {
  return el.shadowRoot.querySelector(selector);
}

export default selectShadow;