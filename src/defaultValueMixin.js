/**
 * Enables the default option for properties to be applied as initial property values
 *
 * @param {LitElement} baseElement - the LitElement to extend
 */
export const DefaultValue = (baseElement) => class extends baseElement {
  
  constructor() {
    super();
    if (this.constructor.properties) {
      const { properties } = this.constructor;
      const propertyNames = Object.keys(properties);
      propertyNames.forEach((propertyName) => {
        if (!this.hasOwnProperty(propertyName) && properties[propertyName].hasOwnProperty('value')) {
          this[propertyName] = properties[propertyName].value instanceof Function ? properties[propertyName].value() : properties[propertyName].value;
        }
      });
    }
  }
  
}

export default DefaultValue;
