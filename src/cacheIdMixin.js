/**
 * Cache template nodes with an id so that we can call this.$.id
 */

const CacheId = superClass => {
  return class extends superClass {
    constructor() {
      super();
      this.$ = {};
    }

    // Note(cg): stores all ids under this.$
    firstUpdated(props) {
      [...this.renderRoot.querySelectorAll('[id]')].forEach(node => {
        this.$[node.id] = node;
      });
      super.firstUpdated(props);
    }
  };
};

/*
 * @mixinFunction
 */
export default CacheId;
