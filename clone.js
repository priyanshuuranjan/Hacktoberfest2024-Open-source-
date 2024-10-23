// Equality and sameness in cloning array

const oldArray = ["dog1", "dog2", "dog3"];

const clonedArrayES6 = [...oldArray];
const newArray = oldArray;

// False, i.e. shallow copy
console.log(clonedArrayES6 === oldArray)

// True, i.e. deep copy
console.log(newArray === oldArray)
