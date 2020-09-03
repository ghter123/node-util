module.exports = (component, extender) => {
  const proto = Object.getPrototypeOf(component);

  function Decorator(obj) {
    Object.assign(this, obj);
  }
  Decorator.prototype = Object.create(proto);

  Object.getOwnPropertyNames(extender).forEach((name) => {
    if (!Object.prototype.hasOwnProperty.call(Decorator.prototype, name) && typeof extender[name] === 'function') {
      Decorator.prototype[name] = extender[name];
    }
  });
  return new Decorator(component);
};
