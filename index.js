// ----------------------------1.Task: Array Filtering and Mapping------------------------------

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const familyMembers = [
  { name: 'Jhon', age: 40, gender: 'male' },
  { name: 'Jenny', age: 35, gender: 'female' },
  { name: 'Smith', age: 20, gender: 'male' },
  { name: 'Soniya', age: 18, gender: 'female' },
  { name: 'Sam', age: 10, gender: 'male' },
];

const getAllMalesName = (members) => {
  return members
    .filter((member) => member.gender === 'male')
    .map((member) => member.name);
};

const malesName = getAllMalesName(familyMembers);

// console.log(malesName);

// ----------------------------2.Task: Object Manipulation------------------------------

// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: 'The Last Symphony of Shadows', author: 'Orion Finch', year: 2033 },
  { title: 'Beneath the Crimson Sun', author: 'Arden Solace', year: 2025 },
  { title: "The Dream Weaver's Code", author: 'Ember Nyx', year: 2029 },
  { title: 'Songs of a Lost Universe', author: 'Cassiopeia Raine', year: 2051 },
  { title: 'Fragments of a Fractured Sky', author: 'Jasper Gale', year: 2037 },
];

const getAllBooksTitle = (books) => {
  let booksTitle = [];

  for (let i = 0; i < books.length; i++) {
    booksTitle.push(books[i].title);
  }

  return booksTitle;
};

// console.log(getAllBooksTitle(books));

// ----------------------------3.Task: Function Composition------------------------------

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const toSquare = (num) => num * num;
const toDouble = (num) => num + num;
const toAdd5 = (num) => num + 5;

const compose = (num) => {
  const square = toSquare(num);
  const double = toDouble(square);
  const add5 = toAdd5(double);

  return add5;
};

// console.log(compose(3));

// ----------------------------4.Task: Sorting Objects------------------------------

// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2019 },
  { make: 'Ford', model: 'Mustang', year: 2021 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Nissan', model: 'Altima', year: 2022 },
];

const sortByManufactureYear = (cars) => {
  const result = cars.sort((a, b) => a.year - b.year);
  return result;
};

// console.log(sortByManufactureYear(cars));

// ----------------------------5.Task: Find and Modify------------------------------

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: 'Alice', age: 20, gender: 'Female', occupation: 'Engineer' },
  { name: 'Bob', age: 25, gender: 'Male', occupation: 'Designer' },
  { name: 'Charlie', age: 28, gender: 'Male', occupation: 'Teacher' },
  { name: 'Diana', age: 32, gender: 'Female', occupation: 'Doctor' },
  { name: 'Ethan', age: 22, gender: 'Male', occupation: 'Student' },
];

const searchByNameAndUpdateAge = (name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

// console.log(searchByNameAndUpdateAge('ljknj', 31));

// ----------------------------6.Task: Array Reduction------------------------------

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [12, 23, 123, 32, 11, 44, 55];

const sumOfEvenNumbers = (numbers) => {
  let sum = numbers.reduce(function (acc, currentValue) {
    if (currentValue % 2 === 0) {
      return acc + currentValue;
    }
    return acc;
  }, 0);

  return sum;
};

// console.log(sumOfEvenNumbers(numbers));

// ----------------------------7. Task: Leap Year Checker------------------------------

// Write a function that determines whether a given year is a leap year.

const findLeapYear = (year) => {
  if (year % 4 === 0) {
    return 'This year is leap year';
  } else {
    return 'This year is not leap year';
  }
};

// console.log(findLeapYear(1901));

// ----------------------------8. Task: Unique Values------------------------------

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers2 = [1, 2, 2, 2, 1, 1, 3, 4, 5, 5, 5];

const removeDupliucateNumber = (numbers) => {
  let uniqueNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }

  return uniqueNumbers;
};

// console.log(removeDupliucateNumber(numbers2));

// ----------------------------09. Task: Find Maximum Value:------------------------------

// Write a function that takes an array of numbers and returns the maximum value.

const numbers3 = [23, 21, 54, 3, 43, 65];

const getMaxValue = (numbers) => {
  let maxNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
};

// console.log(getMaxValue(numbers3));
