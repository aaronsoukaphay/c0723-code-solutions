function ExampleConstructor() {}

console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

const constructor = new ExampleConstructor();
console.log('new constructor:', constructor);

const instanceOfConstructor = constructor instanceof ExampleConstructor;
console.log('instanceOfConstructor:', instanceOfConstructor);
