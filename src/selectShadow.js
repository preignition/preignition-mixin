import { select } from 'd3-selection';
import { transition } from 'd3-transition';

export const selectShadow = (selector, el) => {
  return select(el.renderRoot.querySelector(selector));
}
export const queryShadow = (selector, el) => {
  return el.renderRoot.querySelector(selector);
}

export default selectShadow;
