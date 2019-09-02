import { html, fixture, expect } from '@open-wc/testing';
import { TestElement } from './TestElement.js';
import { default as  Select } from '../src/selectMixin.js';

class SelectElement extends Select(TestElement) {}
window.customElements.define('select-element', SelectElement);

describe('Select Mixin', () => {
  it('selects the right element from shadowRoot', async () => {
    const el = await fixture(html`
      <select-element></select-element>
    `);

    const title = el.selectShadow('#title')
    expect(title.node().id).to.equal('title');
  });

});
