import { html, fixture, expect } from '@open-wc/testing';
import { TestElement } from './TestElement.js';
import { default as  DefaultValue } from '../src/defaultValueMixin.js';

class DefaultElement extends DefaultValue(TestElement) {
  
  static get properties() {
    return {
      value: {type: String, value: 'test'}
    };
  }
}

window.customElements.define('default-element', DefaultElement);


describe('Default Value', () => {
  it('has a default value', async () => {
    const el = await fixture(html`
      <default-element></default-element>
    `);

    expect(el.value).to.equal('test');
  });

  it('can override the default value via attribute', async () => {
    const el = await fixture(html`
      <default-element value="override"></default-element>
    `);

    expect(el.value).to.equal('override');
  });

});
