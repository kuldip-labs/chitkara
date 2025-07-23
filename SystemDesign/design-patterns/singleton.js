/* By invoking Singleton.getInstance(), we obtain the Singleton instance. 
Multiple invocations of getInstance() will always return the same instance. */

const Singleton = (() => {
  let instance;

  function createInstance() {
    // Private members and methods
    // ...

    return {
      // Public members and methods
      // ...
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Usage:
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true