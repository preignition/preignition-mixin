import { html, fixture, expect } from '@open-wc/testing';
import { TestElement } from './TestElement.js';
import { default as cssTheme } from '../src/cssTheme.js';

class themeElement extends TestElement {
    
}

window.customElements.define('theme-element', themeElement);
cssTheme(`#title {color: rgb(255, 0, 0);}`, 'theme-element');


describe('CSS theme', () => {
  it('applies css theme ', async () => {
    const el = await fixture(html`
      <theme-element></theme-element>
    `);

    expect(window.getComputedStyle(el.shadowRoot.querySelector('#title')).color).to.equal('rgb(255, 0, 0)');
  });

  // it('can override the default value via attribute', async () => {
  //   const el = await fixture(html`
  //     <default-element value="override"></default-element>
  //   `);

  //   expect(el.value).to.equal('override');
  // });

});
