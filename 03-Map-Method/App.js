//  Practical Examples


//* 1. Converting Temperatures from Celsius to Fahrenheit

const celsius = [0, 10, 20, 30];

const fahrenheit = celsius.map((currVal) => {
    console.log(currVal);
    
    const value = ((currVal * 9 / 5) + 32)
    return value
})

console.log(fahrenheit);


//* 2. Extracting Specific Properties from an Array of Objects


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const userNames = users.map((userName) => {
    return userName.name
})

console.log(userNames);


//* 3. Mapping Over Array Indexes
const numbers = [10, 20, 30, 40];

const index = numbers.map((data, index) => {
    return data + " , " + index;
})

console.log(index);

