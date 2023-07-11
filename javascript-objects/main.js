const student = {
  firstName: 'Aaron',
  lastName: 'Soukaphay',
  age: 24,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'clinical lab assistant';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: '2013',
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Johnny',
  type: 'terrier poodle',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
