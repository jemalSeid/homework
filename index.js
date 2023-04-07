// 1. find method returns the first element in array that passes the provided test function
const numbers = [7, 9,11, 20, 59, 34,14];

const findFirstNum = numbers.find(element => element > 9);

console.log(findFirstNum);
//  output: 11

//2. The findIndex method returns the index of the first element in an array that satisfies the provided testing function.

const Newnumbers = [7, 9,11, 20, 59, 34,14];

const isLargeNumber = (element) => element > 9;

console.log(Newnumbers.findIndex(isLargeNumber));

//the out put is 2 which is the index of "11" which is the first larger number in array

//3. The some method tests whether at least one element in the array passes the test

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// Expected output: true

const ages = [8, 7, 19, 22,19,10];
function checkAdult(age) {
return age > 20;
}
console.log(ages.some(checkAdult));

//out put is true

const age = [2,5,7,8,10,30]

function checkOldest(age) {
  return age > 62 
}

console.log(age.some(checkOldest));

//the output false because there is no element that satisfy our tests

//4.The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements

const daysOfTheWeek = ["Monday","Wednesday","Thursday","Friday","Saturday","Newday"]
daysOfTheWeek.splice(1,0,"Tuesday") // Inserts at index 1
daysOfTheWeek.splice(6,1, "Sunday")// Expected output: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
console.log(daysOfTheWeek);

//5.every() method tests whether all elements in the array pass the test implemented by the provided function.

const students = [20, 26, 19, 22];

function checkAge(students) {
return students > 18;
}
console.log(students.every(checkAge))//output true because every elements in the array passes our test

//example 2

const salary = [6000,7000,7500,4500,5500]

function highestPaid(salary) {
  return salary > 5000;
}
console.log(salary.every(highestPaid))//output is false because there is 1 element in the array not passed our test