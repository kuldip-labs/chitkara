/* single Observer class that maintains the state and also triggers the subscribers of the observer.*/
import Observer from './Observer.js';
const observer = new Observer();

// Returns a function which, when called, unsubscribes from the observer.
const unsubscribe = observer.subscribe(data => {
  console.log("SingleSubscribe", data);
});

const subscriberA = data => console.log("A", data);
const subscriberB = data => console.log("B", data);

// Returns an array of unsubscribe functions
observer.subscribe([subscriberA, subscriberB]);

observer.set(10);

// To unsubscribe the observer
// unsubscribe()