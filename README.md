# \<preignition-mixin>

Series of helper mixin while developping Preignition with lit-element: 

- defaultValueMixin: allow to declare default values in properties (similar to Polymer)
- selectMixin: use d3-selection in component shadowRoot

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i preignition-mixin
```

## Usage

### defaultValueMixin
```js
import { defaultValueMixin } from '@preignition/preignition-mixin';

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
import { selectMixin } from '@preignition/preignition-mixin';

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


