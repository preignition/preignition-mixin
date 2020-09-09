import { unsafeCSS } from 'lit-element';

/**
 * applies style to a already registered custom element
 * @param  {String } css      css to apply
 * @param  {String} element   element name
 */
export const cssTheme = (css, element) => {
  const cls = customElements.get(element);
  if (!cls) {
    throw new Error(`custom element for ${element} is not yet registered`);
  }
  cls._styles.push(unsafeCSS(css));
};

export default cssTheme;
