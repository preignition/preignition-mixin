# \<preignition-mixin>

Series of helper mixin while developping Preignition with lit-element: 

- DoNotSetUndefinedValue: prevent property setting when value is undefined. This is usefull for not overriding child components default values when parent have not set those properties.
- SelectMixin: use d3-selection in component shadowRoot
- DefaultValueMixin: allow to declare default values in properties (similar to Polymer)
- RelayTo: allow to automatically relay properties from parent to child, without declaring the binding in template. 
- CacheId: cache element having an `id` under `this.$`for easier reference. Usage borrowed from Polymer.

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i preignition-mixin
```

## Usage

### defaultValueMixin
```js
import { DefaultValueMixin } from '@preignition/preignition-mixin';

class DefaultElement extends defaultValueMixin(TestElement) {
  
  static get properties() {
    return {
      value: {type: String, value: 'test'}
    };
  }
}
```

### selectMixin
```js
import { SelectMixin } from '@preignition/preignition-mixin';

class SelectElement extends selectMixin(TestElement) {
}
window.customElements.define('select-element', SelectElement);

const el = html`<select-element></select-element>`;
const title = el.selectShadow('#title')
```


## Testing using karma (if applied by author)
```bash
npm run test
```


