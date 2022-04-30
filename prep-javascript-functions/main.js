function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(8);
console.log('minutes: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('World!');
console.log('greeting: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var aMB5 = addAndMultiplyBy5(10, 5);
console.log('add & multiply by 5: ', aMB5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 15);
console.log('difference: ', difference);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14;
}

var circumference = getCircleCircumference(5);
console.log('circumference: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Chase', 'Simmonds');
console.log('full name: ', fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(5);
console.log('cubed: ', cubed);
