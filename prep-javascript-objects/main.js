var person = {
  firstName: 'Chase',
  lastName: 'Simmonds',
  hobby: 'Making beats'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s full name is ' + fullName);

person.job = 'software sales';
console.log('This person\'s job is ' + person.job);

person.previousJob = 'once again, software sales';
console.log('This person\'s previous job was ' + person.previousJob);

console.log(person);
